import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { toastSuccess } from '../../../utils/toast';

import BgStars from '../../../components/BgStars';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import FormGroup from '../../../components/Form/FormGroup';

import { Content, FormTop, Logo } from './styles';

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submit = (data: FormData) => {
    toastSuccess('Login efetuado com sucesso!');

    console.log(data);
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

          <FormGroup
            isInvalid={errors.email ? true : false}
            errorMsg="E-mail inválido."
          >
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="viniciuslima@email.com"
              {...register('email', { required: true })}
            />
          </FormGroup>

          <FormGroup
            isInvalid={errors.email ? true : false}
            errorMsg="Senha inválida."
          >
            <label htmlFor="password">Senha</label>
            <input
              id="passoword"
              type="password"
              placeholder="******"
              {...register('password', { required: true, minLength: 6 })}
            />
          </FormGroup>

          <Button type="submit" text="Entrar" />
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
