import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Academic as AcademicType } from '../../../types/academic';

import api from '../../../services/api';

import { toastError, toastSuccess } from '../../../utils/toast';

import Form from '../../../components/Form';
import BtnSave from '../../../components/Form/BtnSave';
import FormGroup from '../../../components/Form/FormGroup';
import HeaderAdm from '../../../components/Header/Admin';
import TopicTitle from '../../../components/TopicTitle';

import { Container } from '../../../styles/layout';

const Academic = () => {
  const { academicId } = useParams();

  const [academic, setAcademic] = useState<AcademicType>({} as AcademicType);
  const [loading, setLoading] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AcademicType>();

  const getAcademic = useCallback(async () => {
    setLoading(true);

    try {
      if (academicId) {
        const response = await api.get(`/academic/${academicId}`);

        setAcademic(response.data);
      }
    } catch (error) {
      toastError('Não foi possível obter os dados do projeto acadêmico.');
    } finally {
      setLoading(false);
    }
  }, [academicId]);

  const submit = (data: AcademicType) => {
    if (academicId) {
      toastSuccess('Projeto acadêmico editado com sucesso!');
    } else {
      toastSuccess('Projeto acadêmico cadastrado com sucesso!');
    }

    console.log(data);
  };

  useEffect(() => {
    getAcademic();
  }, [getAcademic]);

  return (
    <Container>
      <HeaderAdm />

      <TopicTitle>
        {academicId ? 'Editar projeto acadêmico' : 'Novo projeto acadêmico'}
      </TopicTitle>

      {loading ? (
        'Carregando...'
      ) : (
        <Form onSubmit={handleSubmit(submit)}>
          <FormGroup
            isInvalid={errors.name ? true : false}
            errorMsg="Nome inválido."
          >
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Cardápio online"
              {...register('name', { required: true })}
            />
          </FormGroup>

          <FormGroup
            isInvalid={errors.semester ? true : false}
            errorMsg="Semestre inválido."
          >
            <label htmlFor="semester">Semestre</label>
            <select id="semester" {...register('semester', { required: true })}>
              <option value="">Selecione...</option>
              <option value="one">1º Semestre</option>
              <option value="two">2º Semestre</option>
              <option value="three">3º Semestre</option>
              <option value="four">4º Semestre</option>
              <option value="five">5º Semestre</option>
              <option value="six">6º Semestre</option>
            </select>
          </FormGroup>

          <FormGroup
            isInvalid={errors.image ? true : false}
            errorMsg="Imagem inválida."
          >
            <label htmlFor="image">Imagem</label>
            <input
              id="image"
              type="file"
              {...register('image', { required: true })}
            />
          </FormGroup>

          <FormGroup
            isInvalid={errors.description ? true : false}
            errorMsg="A descrição deve ter no máximo 200 caracteres."
          >
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="O projeto é um cardápio online blá blá blá"
              rows={5}
              {...register('description', { maxLength: 200 })}
            />
          </FormGroup>

          <BtnSave />
        </Form>
      )}
    </Container>
  );
};

export default Academic;
