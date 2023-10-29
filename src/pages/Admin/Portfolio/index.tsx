import { useState, useEffect, useCallback } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { Portfolio as PortfolioType } from '../../../types/portfolio';

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

const Portfolio = () => {
  const { portfolioId } = useParams();
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState<PortfolioType>(
    {} as PortfolioType,
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  const methods = useForm<PortfolioType>();
  const {
    control,
    register,
    setError,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const getPortfolio = useCallback(async () => {
    setLoading(true);

    try {
      if (portfolioId) {
        const response = await api.get(`/portfolio/${portfolioId}`);

        const portfolioData = response.data.data;

        setPortfolio(portfolioData);
      }
    } catch (err) {
      toastError('Não foi possível obter os dados do portfólio.');
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  }, [portfolioId]);

  const submit = useCallback(
    async (data: PortfolioType) => {
      setSaving(true);

      const saveData = new FormData();
      saveData.append('type', data.type);
      saveData.append('deploy', data.deploy ?? '');
      saveData.append('github', data.github ?? '');
      saveData.append('figma', data.figma ?? '');
      saveData.append('name', data.name);

      if (data.image) {
        saveData.append('image', data.image);
      }

      try {
        if (portfolioId) {
          await api.post(`/portfolio/${portfolioId}?_method=PUT`, saveData);

          toastSuccess('Portfólio atualizado com sucesso!');
        } else {
          await api.post('/portfolio', saveData);

          toastSuccess('Portfólio adicionado com sucesso!');
        }

        navigate('/admin');
      } catch (err) {
        handleFormErrors(err, setError);
      } finally {
        setSaving(false);
      }
    },
    [portfolioId],
  );

  useEffect(() => {
    getPortfolio();
  }, [getPortfolio]);

  useEffect(() => {
    reset({ ...portfolio });
    setValue('image', '');
  }, [portfolio, reset, setValue]);

  return (
    <NewContainer>
      <HeaderAdm />

      <TopicTitle>
        {portfolioId ? 'Editar portfólio' : 'Novo portfólio'}
      </TopicTitle>

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(submit)}>
          {loading ? (
            <FormLoading length={6} />
          ) : (
            <>
              <FormGroup error={errors.name}>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  placeholder="SOSCantinas"
                  {...register('name', {
                    required: 'O campo nome é obrigatório!',
                  })}
                />
              </FormGroup>

              <FormGroup error={errors.type}>
                <label htmlFor="type">Tipo</label>
                <select
                  id="type"
                  {...register('type', {
                    required: 'O campo tipo é obrigatório!',
                  })}
                >
                  <option value="">Selecione...</option>
                  <option value="design">Design</option>
                  <option value="prototype">Protótipo</option>
                  <option value="web">Aplicativo Web</option>
                  <option value="mobile">Aplicativo Mobile</option>
                </select>
              </FormGroup>

              <FormGroup error={errors.image}>
                <label htmlFor="image">Imagem</label>
                <Controller
                  name="image"
                  control={control}
                  rules={{
                    required: {
                      value: portfolioId ? false : true,
                      message: 'O campo imagem é obrigatório!',
                    },
                  }}
                  render={() => <InputImage />}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="deploy">
                  Link <small>(Não obrigatório)</small>
                </label>
                <input
                  id="deploy"
                  type="text"
                  placeholder="www.viniciuslimaan.com.br/soscantinas"
                  {...register('deploy')}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="github">
                  Github <small>(Não obrigatório)</small>
                </label>
                <input
                  id="github"
                  type="text"
                  placeholder="www.github.com/viniciuslimaan/soscantinas"
                  {...register('github')}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="figma">
                  Figma <small>(Não obrigatório)</small>
                </label>
                <input
                  id="figma"
                  type="text"
                  placeholder="www.figma.com/soscantinas"
                  {...register('figma')}
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

export default Portfolio;
