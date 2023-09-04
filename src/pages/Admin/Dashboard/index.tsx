import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';

import Button from '../../../components/Button';
import HeaderAdm from '../../../components/Header/Admin';
import Topic from '../../../components/TopicTitle';

import { Container } from '../../../styles/layout';
import {
  Cards,
  Card,
  TableTitle,
  Table,
  BtnFuctions,
  BtnNew,
  Funcions,
} from './styles';

type SelectTypes = 'user' | 'portfolio' | 'academicProjects';

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState<SelectTypes>('user');

  return (
    <Container>
      <HeaderAdm isDashboard={true} />

      <Topic>Dashboard</Topic>

      <Cards>
        <Card
          selected={selectedType === 'user' ? true : false}
          onClick={() => setSelectedType('user')}
        >
          <Icon className="icon" icon="ph:identification-badge-duotone" />
          <p>Usuários</p>
        </Card>

        <Card
          selected={selectedType === 'portfolio' ? true : false}
          onClick={() => setSelectedType('portfolio')}
        >
          <Icon className="icon" icon="ph:briefcase-duotone" />
          <p>Portfólios</p>
        </Card>

        <Card
          selected={selectedType === 'academicProjects' ? true : false}
          onClick={() => setSelectedType('academicProjects')}
        >
          <Icon className="icon" icon="ph:graduation-cap-duotone" />
          <p>Projetos Acadêmicos</p>
        </Card>
      </Cards>

      <TableTitle>
        <Topic>
          {`${
            (selectedType === 'user' && 'Usuários') ||
            (selectedType === 'portfolio' && 'Portfólios') ||
            (selectedType === 'academicProjects' && 'Projetos Acadêmicos')
          }
          `}
        </Topic>

        <Link
          to={`${
            (selectedType === 'user' && '/admin/user') ||
            (selectedType === 'portfolio' && '/admin/portfolio') ||
            (selectedType === 'academicProjects' && '/admin/academic')
          } `}
        >
          <Button
            color="green"
            icon={<Icon className="icon" icon="ph:plus-circle-duotone" />}
            text={
              <>
                {selectedType === 'user' && 'Novo Usuário'}
                {selectedType === 'portfolio' && 'Novo Portfólio'}
                {selectedType === 'academicProjects' && 'Novo Acadêmico'}
              </>
            }
          />
        </Link>
      </TableTitle>

      <Table>
        <thead>
          <tr>
            <td>Nome</td>

            {selectedType === 'portfolio' && <td>Tipo</td>}
            {selectedType === 'user' && <td>E-mail</td>}
            {selectedType === 'academicProjects' && <td>Semestre</td>}

            <td>Ações</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>tosiehfboasd</td>
            <td>tosiehfboasd</td>
            <td>
              <Funcions>
                <Link to="/admin/user">
                  <BtnFuctions type="edit">
                    <Icon className="icon" icon="ph:gear-six-duotone" />
                  </BtnFuctions>
                </Link>

                <BtnFuctions type="del">
                  <Icon className="icon" icon="ph:trash-duotone" />
                </BtnFuctions>
              </Funcions>
            </td>
          </tr>

          <tr>
            <td>tosiehfboasd</td>
            <td>tosiehfboasd</td>
            <td>
              <Funcions>
                <Link to="/admin/user">
                  <BtnFuctions type="edit">
                    <Icon className="icon" icon="ph:gear-six-duotone" />
                  </BtnFuctions>
                </Link>

                <BtnFuctions type="del">
                  <Icon className="icon" icon="ph:trash-duotone" />
                </BtnFuctions>
              </Funcions>
            </td>
          </tr>

          <tr>
            <td>tosiehfboasd</td>
            <td>tosiehfboasd</td>
            <td>
              <Funcions>
                <Link to="/admin/user">
                  <BtnFuctions type="edit">
                    <Icon className="icon" icon="ph:gear-six-duotone" />
                  </BtnFuctions>
                </Link>

                <BtnFuctions type="del">
                  <Icon className="icon" icon="ph:trash-duotone" />
                </BtnFuctions>
              </Funcions>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
