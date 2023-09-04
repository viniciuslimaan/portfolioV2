import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Portfolio as PortfolioType } from '../../../types/portfolio';

import api from '../../../services/api';

import { toastError, toastSuccess } from '../../../utils/toast';

import Form from '../../../components/Form';
import BtnSave from '../../../components/Form/BtnSave';
import FormGroup from '../../../components/Form/FormGroup';
import HeaderAdm from '../../../components/Header/Admin';
import TopicTitle from '../../../components/TopicTitle';

import { Container } from '../../../styles/layout';

const Portfolio = () => {
  const { portfolioId } = useParams();

  const [portfolio, setPortfolio] = useState<PortfolioType>(
    {} as PortfolioType,
  );
  const [loading, setLoading] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PortfolioType>();

  const getPortfolio = useCallback(async () => {
    setLoading(true);

    try {
      if (portfolioId) {
        const response = await api.get(`/portfolio/${portfolioId}`);

        setPortfolio(response.data);
      }
    } catch (error) {
      toastError('Não foi possível obter os dados do portfólio.');
    } finally {
      setLoading(false);
    }
  }, [portfolioId]);

  const submit = (data: PortfolioType) => {
    if (portfolioId) {
      toastSuccess('Portfólio editado com sucesso!');
    } else {
      toastSuccess('Portfólio cadastrado com sucesso!');
    }

    console.log(data);
  };

  useEffect(() => {
    getPortfolio();
  }, [getPortfolio]);

  return (
    <Container>
      <HeaderAdm />

      <TopicTitle>
        {portfolioId ? 'Editar portfólio' : 'Novo portfólio'}
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
              placeholder="SOSCantinas"
              {...register('name', { required: true })}
            />
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
            isInvalid={errors.type ? true : false}
            errorMsg="Tipo inválido."
          >
            <label htmlFor="password">Tipo</label>
            <select id="password" {...register('type', { required: true })}>
              <option value="">Selecione...</option>
              <option value="design">Design</option>
              <option value="prototype">Protótipo</option>
              <option value="web">Web</option>
              <option value="mobile">Mobile</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="link">Link</label>
            <input
              id="link"
              type="text"
              placeholder="www.viniciuslimaan.com.br/soscantinas"
              {...register('link')}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="github">Github</label>
            <input
              id="github"
              type="text"
              placeholder="www.github.com/viniciuslimaan/soscantinas"
              {...register('github')}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="figma">Figma</label>
            <input
              id="figma"
              type="text"
              placeholder="www.figma.com/soscantinas"
              {...register('figma')}
            />
          </FormGroup>

          <BtnSave />
        </Form>
      )}
    </Container>
  );
};

export default Portfolio;
