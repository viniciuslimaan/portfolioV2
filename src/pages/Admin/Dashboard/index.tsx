import { useCallback, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';

import { Portfolio as PortfolioType } from '../../../types/portfolio';
import { User as UserType } from '../../../types/user';

import api from '../../../services/api';

import { getPortfolioType } from '../../../utils/functions/getPortfolioType';
import { toastError } from '../../../utils/toast';

import Button from '../../../components/Button';
import HeaderAdm from '../../../components/Header/Admin';
import ModalRemove from '../../../components/Modal/ModalRemove';
import Topic from '../../../components/TopicTitle';

import {
  Cards,
  Card,
  TableTitle,
  Table,
  BtnFuctions,
  Funcions,
  Empty,
  NewContainer,
} from './styles';

type SelectTypes = 'user' | 'portfolio';

interface ModalDataProps {
  data: UserType | PortfolioType;
  type: SelectTypes;
  reload: () => void;
}

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState<SelectTypes>('user');
  const [loading, setLoading] = useState<boolean>(true);

  const [users, setUsers] = useState<UserType[]>([]);
  const [portfolios, setPortfolios] = useState<PortfolioType[]>([]);

  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalDataProps>({
    data: { id: 0, name: '', email: '', password: '' },
    type: 'user',
    reload: () => null,
  });

  const handleModal = useCallback(
    (data: ModalDataProps) => {
      setModalData(data);
      setModalOpened(!modalOpened);
    },
    [modalOpened],
  );

  const getUsers = useCallback(async () => {
    try {
      const response = await api.get('/user');

      setUsers(response.data.data);
    } catch (err) {
      setUsers([]);
      toastError('Não foi possível obter os dados dos usuários.');
    }
  }, []);

  const getPortfolios = useCallback(async () => {
    try {
      const response = await api.get('/portfolio');

      setPortfolios(response.data.data);
    } catch (err) {
      setPortfolios([]);
      toastError('Não foi possível obter os dados dos portfólios.');
    }
  }, []);

  const getAll = useCallback(async () => {
    setLoading(true);

    try {
      await Promise.allSettled([getUsers(), getPortfolios()]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [getUsers, getPortfolios]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <NewContainer>
        <HeaderAdm isDashboard={true} />

        <Topic>Dashboard</Topic>

        <Cards>
          <Card
            selected={selectedType === 'user'}
            onClick={() => setSelectedType('user')}
          >
            <Icon className="icon" icon="ph:identification-badge-duotone" />
            <p>Usuários</p>
          </Card>

          <Card
            selected={selectedType === 'portfolio'}
            onClick={() => setSelectedType('portfolio')}
          >
            <Icon className="icon" icon="ph:briefcase-duotone" />
            <p>Portfólios</p>
          </Card>
        </Cards>

        <TableTitle>
          <Topic>
            {`${
              (selectedType === 'user' && 'Usuários') ||
              (selectedType === 'portfolio' && 'Portfólios')
            }
          `}
          </Topic>

          <Link
            to={`${
              (selectedType === 'user' && '/admin/user') ||
              (selectedType === 'portfolio' && '/admin/portfolio')
            } `}
          >
            <Button
              color="green"
              icon={<Icon className="icon" icon="ph:plus-circle-duotone" />}
              text={
                <>
                  {selectedType === 'user' && 'Novo Usuário'}
                  {selectedType === 'portfolio' && 'Novo Portfólio'}
                </>
              }
            />
          </Link>
        </TableTitle>

        <Table>
          <thead>
            <tr>
              <td>Nome</td>

              {selectedType === 'user' && <td>E-mail</td>}
              {selectedType === 'portfolio' && <td>Tipo</td>}

              <td>Ações</td>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <>
                <td>
                  <Skeleton count={3} height={50} />
                </td>

                <td>
                  <Skeleton count={3} height={50} />
                </td>

                <td>
                  <Skeleton count={3} height={50} />
                </td>
              </>
            )}

            {!loading &&
              selectedType === 'user' &&
              users.length > 0 &&
              users.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>

                  <td>{item.email}</td>

                  <td>
                    <Funcions>
                      <Link to={`/admin/user/${item.id}`}>
                        <BtnFuctions type="edit">
                          <Icon className="icon" icon="ph:gear-six-duotone" />
                        </BtnFuctions>
                      </Link>

                      <BtnFuctions
                        type="del"
                        onClick={() =>
                          handleModal({
                            data: item,
                            type: 'user',
                            reload: getUsers,
                          })
                        }
                      >
                        <Icon className="icon" icon="ph:trash-duotone" />
                      </BtnFuctions>
                    </Funcions>
                  </td>
                </tr>
              ))}

            {!loading &&
              selectedType === 'portfolio' &&
              portfolios.length > 0 &&
              portfolios.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>

                  <td>{getPortfolioType(item.type)}</td>

                  <td>
                    <Funcions>
                      <Link to={`/admin/portfolio/${item.id}`}>
                        <BtnFuctions type="edit">
                          <Icon className="icon" icon="ph:gear-six-duotone" />
                        </BtnFuctions>
                      </Link>

                      <BtnFuctions
                        type="del"
                        onClick={() =>
                          handleModal({
                            data: item,
                            type: 'portfolio',
                            reload: getPortfolios,
                          })
                        }
                      >
                        <Icon className="icon" icon="ph:trash-duotone" />
                      </BtnFuctions>
                    </Funcions>
                  </td>
                </tr>
              ))}
            {!loading &&
              ((selectedType === 'user' && users.length === 0) ||
                (selectedType === 'portfolio' && portfolios.length === 0)) && (
                <tr>
                  <Empty colSpan={3}>
                    <Icon
                      className="icon"
                      icon="ph:folder-notch-open-duotone"
                    />
                    <p>Nenhum item encontrado.</p>
                  </Empty>
                </tr>
              )}
          </tbody>
        </Table>
      </NewContainer>

      <ModalRemove data={modalData} opened={{ modalOpened, setModalOpened }} />
    </>
  );
};

export default Dashboard;
