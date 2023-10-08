import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { AxiosError } from 'axios';

import api from '../../../services/api';

import { toastError, toastSuccess } from '../../../utils/toast';

import BgStars from '../../../components/BgStars';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import FormGroup from '../../../components/Form/FormGroup';

import { AuthContext } from '../../../contexts/AuthContext';

import { Content, FormTop, Logo } from './styles';

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { login } = useContext(AuthContext);

  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const submit = async (data: FormData) => {
    setSaving(true);

    const { email, password } = data;

    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      });

      const token = response.data?.access_token;

      if (!token) {
        return toastError('Ocorreu um erro ao fazer o login!');
      }

      await login(token);

      toastSuccess('Usuário logado com sucesso!');
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = err.response?.data?.data?.msg;

        toastError(
          error ||
            'Não foi possível fazer o login. Por favor, comunique um administrador.',
        );

        setError('email', {});
        setError('password', {});
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <BgStars>
      <Content>
        <div />

        <Form onSubmit={handleSubmit(submit)}>
          <FormTop>
            <h2>Login</h2>
            <p>Faça o login para conseguir editar os dados do sistema.</p>
          </FormTop>

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
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="******"
              {...register('password', {
                required: 'O campo de senha é obrigatório!',
                minLength: {
                  value: 6,
                  message: 'A senha deve conter no mínimo 6 caracteres.',
                },
              })}
            />
          </FormGroup>

          <Button isLoading={saving} type="submit" size="full" text="Entrar" />
        </Form>

        <Link to="/">
          <Logo>
            vinícius<span>Lima</span>
          </Logo>
        </Link>
      </Content>
    </BgStars>
  );
};

export default Login;
