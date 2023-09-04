import { Service } from '../../types/service';

import ScrollFadeIn from '../FadeInAnimations/Scroll';
import Card from './Card';

import { Container } from '../../styles/layout';
import { Cards } from './styles';

interface Props {
  data: Service[];
}

const Services = ({ data }: Props) => {
  return (
    <Container padding>
      <ScrollFadeIn animation="animate__fadeInUp">
        <Cards>
          {data &&
            data.map((item, i) => (
              <Card
                key={i}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
        </Cards>
      </ScrollFadeIn>
    </Container>
  );
};

export default Services;
