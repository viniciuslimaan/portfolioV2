import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { User as UserType } from '../../../types/user';

import api from '../../../services/api';

import { toastError, toastSuccess } from '../../../utils/toast';

import Form from '../../../components/Form';
import BtnSave from '../../../components/Form/BtnSave';
import FormGroup from '../../../components/Form/FormGroup';
import HeaderAdm from '../../../components/Header/Admin';
import TopicTitle from '../../../components/TopicTitle';

import { Container } from '../../../styles/layout';

interface PasswordRules {
  minLength: {
    value: number;
    message: string;
  };
  required?: string;
}

const User = () => {
  const { userId } = useParams();

  const [user, setUser] = useState<UserType>({} as UserType);
  const [loading, setLoading] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const getUser = useCallback(async () => {
    setLoading(true);

    try {
      if (userId) {
        const response = await api.get(`/user/${userId}`);

        setUser(response.data);
      }
    } catch (error) {
      toastError('Não foi possível obter os dados do usuário.');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const submit = (data: UserType) => {
    if (userId) {
      toastSuccess('Usuário editado com sucesso!');
    } else {
      toastSuccess('Usuário cadastrado com sucesso!');
    }

    console.log(data);
  };

  const passwordValidation: PasswordRules = {
    minLength: {
      value: 6,
      message: 'A senha deve conter no mínimo 6 caracteres.',
    },
  };

  if (!userId) passwordValidation.required = 'O campo senha é obrigatório!';

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Container>
      <HeaderAdm />

      <TopicTitle>{userId ? 'Editar usuário' : 'Novo usuário'}</TopicTitle>

      {loading ? (
        'Carregando...'
      ) : (
        <Form onSubmit={handleSubmit(submit)}>
          <FormGroup error={errors.name}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Vinicius Lima"
              {...register('name', {
                required: 'O campo nome é obrigatório!',
              })}
            />
          </FormGroup>

          <FormGroup error={errors.email}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="viniciuslima@email.com"
              {...register('email', {
                required: 'O campo e-mail é obrigatório!',
              })}
            />
          </FormGroup>

          <FormGroup error={errors.password}>
            <label htmlFor="password">
              Senha <small>(Insira a senha apenas caso queira mudar)</small>
            </label>
            <input
              id="password"
              type="password"
              placeholder="******"
              {...register('password', passwordValidation)}
            />
          </FormGroup>

          <BtnSave />
        </Form>
      )}
    </Container>
  );
};

export default User;
