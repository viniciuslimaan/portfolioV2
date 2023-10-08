import { useState, useEffect, useCallback } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { Academic as AcademicType } from '../../../types/academic';

import api from '../../../services/api';

import { handleFormErrors } from '../../../utils/functions/handleFormErrors';
import { toastError, toastSuccess } from '../../../utils/toast';

import Form from '../../../components/Form';
import BtnSave from '../../../components/Form/BtnSave';
import FormGroup from '../../../components/Form/FormGroup';
import FormLoading from '../../../components/Form/FormLoading';
import InputImage from '../../../components/Form/InputImage';
import HeaderAdm from '../../../components/Header/Admin';
import TopicTitle from '../../../components/TopicTitle';

import { NewContainer } from '../Dashboard/styles';
import { CustomQuill } from './styles';

const Academic = () => {
  const { academicId } = useParams();
  const navigate = useNavigate();

  const [academic, setAcademic] = useState<AcademicType>({} as AcademicType);

  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  const methods = useForm<AcademicType>();
  const {
    control,
    register,
    setError,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const customToolbar = [
    [{ header: 1 }, { header: 2 }],
    ['bold', 'italic', 'underline', 'strike', { align: [] }],
    ['blockquote', 'code-block', 'link'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['clean'],
  ];

  const getAcademic = useCallback(async () => {
    setLoading(true);

    try {
      if (academicId) {
        const response = await api.get(`/academic/${academicId}`);

        const academicData = response.data.data;

        setAcademic(academicData);
      }
    } catch (error) {
      toastError('Não foi possível obter os dados do projeto acadêmico.');
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  }, [academicId]);

  const submit = useCallback(
    async (data: AcademicType) => {
      setSaving(true);

      const saveData = new FormData();
      saveData.append('name', data.name);
      saveData.append('semester', data.semester);
      saveData.append('description', data.description ?? '');

      if (data.image) {
        saveData.append('image', data.image);
      }

      try {
        if (academicId) {
          await api.post(`/academic/${academicId}?_method=PUT`, saveData);

          toastSuccess('Projeto acadêmico atualizado com sucesso!');
        } else {
          await api.post('/academic', saveData);

          toastSuccess('Projeto acadêmico adicionado com sucesso!');
        }

        navigate('/admin');
      } catch (err) {
        handleFormErrors(err, setError);
      } finally {
        setSaving(false);
      }
    },
    [academicId],
  );

  useEffect(() => {
    getAcademic();
  }, [getAcademic]);

  useEffect(() => {
    reset({ ...academic });
    setValue('image', '');
  }, [academic, reset]);

  return (
    <NewContainer>
      <HeaderAdm />

      <TopicTitle>
        {academicId ? 'Editar projeto acadêmico' : 'Novo projeto acadêmico'}
      </TopicTitle>

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(submit)}>
          {loading ? (
            <FormLoading length={4} />
          ) : (
            <>
              <FormGroup error={errors.name}>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Cardápio online"
                  {...register('name', {
                    required: 'O campo nome é obrigatório!',
                  })}
                />
              </FormGroup>

              <FormGroup error={errors.semester}>
                <label htmlFor="semester">Semestre</label>
                <select
                  id="semester"
                  {...register('semester', {
                    required: 'O campo semestre é obrigatório!',
                  })}
                >
                  <option value="">Selecione...</option>
                  <option value="one">1º Semestre</option>
                  <option value="two">2º Semestre</option>
                  <option value="three">3º Semestre</option>
                  <option value="four">4º Semestre</option>
                  <option value="five">5º Semestre</option>
                  <option value="six">6º Semestre</option>
                </select>
              </FormGroup>

              <FormGroup error={errors.image}>
                <label htmlFor="image">Imagem</label>
                <Controller
                  name="image"
                  control={control}
                  rules={{
                    required: {
                      value: academicId ? false : true,
                      message: 'O campo imagem é obrigatório!',
                    },
                  }}
                  render={() => <InputImage />}
                />
              </FormGroup>

              <FormGroup error={errors.description}>
                <label htmlFor="description">Descrição</label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <CustomQuill
                      {...field}
                      theme="snow"
                      placeholder="O projeto é um cardápio online blá blá blá"
                      modules={{
                        toolbar: customToolbar,
                      }}
                    />
                  )}
                />
              </FormGroup>

              <BtnSave isSaving={saving} />
            </>
          )}
        </Form>
      </FormProvider>
    </NewContainer>
  );
};

export default Academic;
