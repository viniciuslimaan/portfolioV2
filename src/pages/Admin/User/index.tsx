import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { User as UserType } from '../../../types/user';

import api from '../../../services/api';

import { handleFormErrors } from '../../../utils/functions/handleFormErrors';
import { toastError, toastSuccess } from '../../../utils/toast';

import Form from '../../../components/Form';
import BtnSave from '../../../components/Form/BtnSave';
import FormGroup from '../../../components/Form/FormGroup';
import FormLoading from '../../../components/Form/FormLoading';
import HeaderAdm from '../../../components/Header/Admin';
import TopicTitle from '../../../components/TopicTitle';

import { NewContainer } from '../Dashboard/styles';

interface PasswordRules {
  minLength: {
    value: number;
    message: string;
  };
  required?: string;
}

const User = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserType>({} as UserType);

  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const getUser = useCallback(async () => {
    setLoading(true);

    try {
      if (userId) {
        const response = await api.get(`/user/${userId}`);

        const userData = response.data.data;

        setUser(userData);
      }
    } catch (err) {
      toastError('Não foi possível obter os dados do usuário.');
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const submit = useCallback(
    async (data: UserType) => {
      setSaving(true);

      const { name, email, password } = data;

      try {
        if (userId) {
          await api.put(`/user/${userId}`, {
            name,
            email,
            password,
          });

          toastSuccess('Usuário atualizado com sucesso!');
        } else {
          await api.post('/user', {
            name,
            email,
            password,
          });

          toastSuccess('Usuário cadastrado com sucesso!');
        }
        navigate('/admin');
      } catch (err) {
        handleFormErrors(err, setError);
      } finally {
        setSaving(false);
      }
    },
    [userId],
  );

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

  useEffect(() => {
    reset({ ...user });
  }, [user, reset]);

  return (
    <NewContainer>
      <HeaderAdm />

      <TopicTitle>{userId ? 'Editando usuário' : 'Novo usuário'}</TopicTitle>

      <Form onSubmit={handleSubmit(submit)}>
        {loading ? (
          <FormLoading length={3} />
        ) : (
          <>
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
                Senha{' '}
                {userId && (
                  <small>(Insira a senha apenas caso queira mudar)</small>
                )}
              </label>
              <input
                id="password"
                type="password"
                placeholder="******"
                {...register('password', passwordValidation)}
              />
            </FormGroup>

            <BtnSave isSaving={saving} />
          </>
        )}
      </Form>
    </NewContainer>
  );
};

export default User;
