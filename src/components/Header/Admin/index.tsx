import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';

import Button from '../../Button';

import { Account, NameAccount, ButtonsAccount, Line } from './styles';

interface Props {
  isDashboard?: boolean;
}

const HeaderAdmin = ({ isDashboard = false }: Props) => {
  return (
    <>
      <Account>
        <NameAccount>
          Bem-vindo, <span>Administrador</span>!
        </NameAccount>

        <ButtonsAccount>
          {isDashboard ? (
            <>
              <Link to={`/admin/user/`}>
                <Button
                  icon={
                    <Icon className="icon" icon="ph:user-circle-gear-duotone" />
                  }
                  text="Editar conta"
                  color="blue"
                />
              </Link>

              <Button
                icon={<Icon className="icon" icon="ph:sign-out-duotone" />}
                color="red"
              />
            </>
          ) : (
            <Link to="/admin">
              <Button
                icon={<Icon className="icon" icon="ph:arrow-left-duotone" />}
                color="green"
              />
            </Link>
          )}
        </ButtonsAccount>
      </Account>

      <Line />
    </>
  );
};

export default memo(HeaderAdmin);
