import { Skill } from '../../types/skill';

import ScrollFadeIn from '../FadeInAnimations/Scroll';
import SectionTitle from '../SectionTitle';
import Card from './Card';

import { Container } from '../../styles/layout';
import { Cards } from './styles';

interface Props {
  data: Skill[];
}

const Skills = ({ data }: Props) => {
  return (
    <Container padding id="skills">
      <ScrollFadeIn>
        <SectionTitle
          title="Habilidades"
          description="Algumas tecnologias que utilizo ou já utilizei."
        />
      </ScrollFadeIn>

      <ScrollFadeIn animation="animate__fadeInUp">
        <Cards>
          {data &&
            data.map((item, i) => (
              <Card key={i} icon={item.icon} name={item.name} />
            ))}
        </Cards>
      </ScrollFadeIn>
    </Container>
  );
};

export default Skills;
