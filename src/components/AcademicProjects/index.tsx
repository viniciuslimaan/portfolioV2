import { useCallback, useEffect, useState } from 'react';

import { Academic as AcademicType } from '../../types/academic';

import api from '../../services/api';

import EmptyData from '../EmptyData';
import ScrollFadeIn from '../FadeInAnimations/Scroll';
import SectionTitle from '../SectionTitle';
import Card from './Card';
import Loading from './Loading';

import { Container } from '../../styles/layout';
import { Cards } from './styles';

const AcademicProjects = () => {
  const [data, setData] = useState<AcademicType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = useCallback(async () => {
    try {
      const response = await api.get('/academic');

      setData(response.data.data);
    } catch (err) {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container padding id="academicProjects">
      <ScrollFadeIn>
        <SectionTitle
          title="Projetos acadêmicos"
          description="Atividades realizadas durante meu estudo na Fatec."
        />

        {!loading && data.length === 0 && <EmptyData />}
      </ScrollFadeIn>

      <ScrollFadeIn animation="animate__fadeInUp">
        <Cards>
          {loading && <Loading />}

          {!loading &&
            data.length > 0 &&
            data.map((item) => (
              <Card
                id={item.id}
                key={item.id}
                name={item.name}
                semester={item.semester}
                image={item.image_url || ''}
                description={item.description}
              />
            ))}
        </Cards>
      </ScrollFadeIn>
    </Container>
  );
};

export default AcademicProjects;
