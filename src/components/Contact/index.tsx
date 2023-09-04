import { Icon } from '@iconify/react';

import AstronautImg from '../../assets/img/astronauthome.png';

import { Contact as ContactType } from '../../types/contact';

import ScrollFadeIn from '../FadeInAnimations/Scroll';
import SectionTitle from '../SectionTitle';

import { ContactBg, Content, Item, Itens } from './styles';

interface Props {
  data: ContactType;
}

const Contact = ({ data }: Props) => {
  return (
    <ScrollFadeIn>
      <ContactBg id="contact">
        <Content>
          <SectionTitle
            title="Contato"
            description="Algumas formas de conversar comigo além das redes sociais."
            position="left"
            marginBottom="1rem"
          />

          <ScrollFadeIn animation="animate__fadeInUp">
            <Itens>
              <Item href={`mailto:${data.email}`}>
                <Icon icon="ph:at-duotone" className="icon" />

                <div>
                  <p className="title">Email</p>
                  <p>{data.email}</p>
                </div>
              </Item>

              <Item href={`tel:${data.phone}`}>
                <Icon icon="ph:phone-duotone" className="icon" />

                <div>
                  <p className="title">Telefone</p>
                  <p>{data.phone}</p>
                </div>
              </Item>

              <Item href={data.cityLink} target="__blank">
                <Icon icon="ph:house-duotone" className="icon" />

                <div>
                  <p className="title">Moro em</p>
                  <p>{data.city}</p>
                </div>
              </Item>
            </Itens>
          </ScrollFadeIn>
        </Content>

        <img src={AstronautImg} alt="Imagem de um astronauta" />
      </ContactBg>
    </ScrollFadeIn>
  );
};

export default Contact;
