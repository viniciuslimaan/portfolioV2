import { Academic as AcademicType } from '../../types/academic';

import ScrollFadeIn from '../FadeInAnimations/Scroll';
import SectionTitle from '../SectionTitle';
import Card from './Card';

import { Container } from '../../styles/layout';
import { Cards } from './styles';

interface Props {
  data?: AcademicType[];
}

const AcademicProjects = ({ data }: Props) => {
  return (
    <Container padding id="academicProjects">
      <ScrollFadeIn>
        <SectionTitle
          title="Projetos acadêmicos"
          description="Atividades realizadas durante meu estudo na Fatec."
        />
      </ScrollFadeIn>

      <ScrollFadeIn animation="animate__fadeInUp">
        <Cards>
          {data &&
            data.map((item, i) => (
              <Card
                key={i}
                name={item.name}
                semester={item.semester}
                image={item.image}
                description={item.description}
              />
            ))}
        </Cards>
      </ScrollFadeIn>
    </Container>
  );
};

export default AcademicProjects;
