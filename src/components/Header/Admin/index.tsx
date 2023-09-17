import { memo, useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';

import { AuthContext } from '../../../contexts/AuthContext';
import Button from '../../Button';

import { Account, NameAccount, ButtonsAccount, Line } from './styles';

interface Props {
  isDashboard?: boolean;
}

const HeaderAdmin = ({ isDashboard = false }: Props) => {
  const { loading, user, logout } = useContext(AuthContext);

  return (
    <>
      <Account>
        {loading ? (
          <Skeleton width={300} height={30} />
        ) : (
          <NameAccount>
            Bem-vindo, <span>{user?.name || 'administrador'}</span>!
          </NameAccount>
        )}

        <ButtonsAccount>
          {loading && (
            <>
              <Skeleton width={150} height={30} />{' '}
              <Skeleton width={150} height={30} />{' '}
            </>
          )}

          {!loading && isDashboard && (
            <>
              <Link to={`/admin/user/${user?.id}`}>
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
                execute={() => logout()}
              />
            </>
          )}

          {!loading && !isDashboard && (
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
