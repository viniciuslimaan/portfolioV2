import { Icon } from '@iconify/react';

import CurriculumPdf from '../../assets/curriculum.pdf';

import { About as AboutType } from '../../types/about';
import { Contact as ContactType } from '../../types/contact';
import { Footer as FooterType } from '../../types/footer';
import { Header as HeaderType } from '../../types/header';
import { Service as ServiceType } from '../../types/service';
import { Skill as SkillType } from '../../types/skill';

const socialLinks = {
  whatsapp: 'https://wa.me/5514991212457',
  facebook: 'https://www.facebook.com/viniciuslimaan',
  instagram: 'https://www.instagram.com/viniciuslimaan/',
  linkedin: 'https://www.linkedin.com/in/viniciuslimaan',
  github: 'https://github.com/viniciuslimaan',
};

export const headerData: HeaderType = {
  title: 'Eu transformo suas ideias em realidade',
  subtitle:
    'Sou desenvolvedor full-stack, designer e apaixonado por astronomia. Agora, vou compartilhar um pouco da minha vida neste lindo universo da programação.',
};

export const servicesData: ServiceType[] = [
  {
    icon: <Icon className="icon" icon="ph:lightbulb-duotone" />,
    title: 'Design',
    description: 'Crio logos, flyers, artes de divulgação, entre outros.',
  },
  {
    icon: <Icon className="icon" icon="ph:desktop-duotone" />,
    title: 'Web Design',
    description:
      'Projeto e devenvolvo aplicações web desde uma landing page até um e-commerce.',
  },
  {
    icon: <Icon className="icon" icon="ph:device-mobile-duotone" />,
    title: 'Mobile',
    description: 'Projeto e desenvolvo aplicações mobile para Android e iOs.',
  },
];

const age: number = new Date().getFullYear() - 2003;

export const aboutData: AboutType = {
  title: (
    <h3>
      Olá, eu sou o <span>Vinícius</span>!
    </h3>
  ),
  description: (
    <p>
      Meu nome é Vinícius Lima, tenho {age} anos e sou graduado em tecnólogo em
      Sistemas para Internet pela Fatec de Lins, além de possuir formação de
      Técnico em Informática pela Etec de Lins. Desde a infância, minha paixão
      pela tecnologia e inovação tem sido constante em minha jornada. Aos 12
      anos, dei meus primeiros passos na programação, criando scripts para jogos
      de computador. A verdadeira imersão no universo da programação iniciou-se
      aos 15 anos, quando ingressei na Etec de Lins. Desde então, venho
      desenvolvendo aplicações Front-end e Back-end, sempre em busca do
      aprimoramento constante das minhas habilidades e conhecimentos nessa área
      tão fascinante.
    </p>
  ),
  curriculum: CurriculumPdf,
  ...socialLinks,
};

export const skillsData: SkillType[] = [
  {
    icon: <Icon className="icon" icon="simple-icons:html5" />,
    name: 'HTML5',
  },
  {
    icon: <Icon className="icon" icon="simple-icons:css3" />,
    name: 'CSS3',
  },
  {
    icon: <Icon className="icon" icon="fa6-brands:sass" />,
    name: 'Sass',
  },
  {
    icon: <Icon className="icon" icon="cib:bootstrap" />,
    name: 'Bootstrap',
  },
  {
    icon: <Icon className="icon" icon="cib:javascript" />,
    name: 'Javascript',
  },
  {
    icon: <Icon className="icon" icon="cib:typescript" />,
    name: 'Typescript',
  },
  {
    icon: <Icon className="icon" icon="simple-icons:react" />,
    name: 'ReactJs',
  },
  {
    icon: <Icon className="icon" icon="akar-icons:node-fill" />,
    name: 'NodeJs',
  },
  {
    icon: <Icon className="icon" icon="simple-icons:nextdotjs" />,
    name: 'NextJs',
  },
  {
    icon: <Icon className="icon" icon="devicon-plain:php" />,
    name: 'php',
  },
  {
    icon: <Icon className="icon" icon="fa-brands:laravel" />,
    name: 'Laravel',
  },
  {
    icon: <Icon className="icon" icon="fontisto:mysql" />,
    name: 'MySql',
  },
  {
    icon: <Icon className="icon" icon="simple-icons:git" />,
    name: 'Git',
  },
  {
    icon: <Icon className="icon" icon="simple-icons:github" />,
    name: 'GitHub',
  },
  {
    icon: <Icon className="icon" icon="akar-icons:figma-fill" />,
    name: 'Figma',
  },
  {
    icon: <Icon className="icon" icon="devicon-plain:photoshop" />,
    name: 'Photoshop',
  },
];

export const contactData: ContactType = {
  email: 'viniciuslimaandre@hotmail.com',
  phone: '(14) 99121-2457',
  city: 'Lins - São Paulo',
  cityLink: 'https://goo.gl/maps/k2XJFjZ5ah7Mvm7H9',
};

export const footerData: FooterType = {
  ...socialLinks,
};
