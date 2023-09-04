import { Icon } from '@iconify/react';

import CurriculumPdf from '../../assets/curriculum.pdf';

import { About as AboutType } from '../../types/about';
import { Academic as AcademicType } from '../../types/academic';
import { Contact as ContactType } from '../../types/contact';
import { Footer as FooterType } from '../../types/footer';
import { Header as HeaderType } from '../../types/header';
import { Portfolio as PortfolioType } from '../../types/portfolio';
import { Service as ServiceType } from '../../types/service';
import { Skill as SkillType } from '../../types/skill';

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
      Meu nome é <span>Vinícius Lima</span>, tenho {age} anos, sou formado em
      técnico em informática integrado ao ensino médio na Etec Lins e atualmente
      estou cursando tecnólogo em Sistemas para Internet na Fatec Lins. Sou
      apaixonado por tecnologia e inovação desde pequeno, tive meu primeiro
      contato com programação aos 12 anos, onde eu desenvolvia scripts para
      jogos de computador. Comecei realmente a programar aos 15, quando
      ingressei na Etec Lins e, desde então, desenvolvo aplicações Front-End e
      Back-End.
    </p>
  ),
  curriculum: CurriculumPdf,
  whatsapp: 'https://wa.me/5514991212457',
  facebook: 'https://www.facebook.com/viniciuslimaan',
  instagram: 'https://www.instagram.com/viniciuslimaan/',
  linkedin: 'https://www.linkedin.com/in/viniciuslimaan',
  github: 'https://github.com/viniciuslimaan',
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

export const academicData: AcademicType[] = [
  {
    name: 'MirrorFashion',
    semester: 'one',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956311152_15787.png',
    description: '',
  },
  {
    name: 'Setembro Amarelo',
    semester: 'two',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956311152_15787.png',
    description: '',
  },
  {
    name: 'Cardápio Online',
    semester: 'three',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956311152_15787.png',
    description: '',
  },
  {
    name: 'Álbum da Copa',
    semester: 'four',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956311152_15787.png',
    description: '',
  },
  {
    name: 'SOSCantinas',
    semester: 'five',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956311152_15787.png',
    description: '',
  },
  {
    name: 'SOSCantinas',
    semester: 'six',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956311152_15787.png',
    description: '',
  },
];

export const portfolioData: PortfolioType[] = [
  {
    id: 1,
    name: 'Título do aplicativo',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956417478_15787.png',
    type: 'web',
    link: '/',
    github: 'www.github.com',
    figma: 'www.figma.com',
  },
  {
    id: 2,
    name: 'Título do aplicativo',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682955956996_15787.png',
    type: 'web',
    github: 'www.github.com',
  },
  {
    id: 3,
    name: 'Título do app',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956009422_15787.png',
    type: 'mobile',
    link: '/',
    github: 'www.github.com',
    figma: 'www.figma.com',
  },
  {
    id: 4,
    name: 'Título do design',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682961927410_15787.png',
    type: 'design',
  },
  {
    id: 5,
    name: 'Título do design',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682961936963_15787.png',
    type: 'design',
  },
  {
    id: 6,
    name: 'Título do design',
    image:
      'https://www.viniciuslimaan.com.br/api/images/1682956311152_15787.png',
    type: 'design',
  },
];

export const contactData: ContactType = {
  email: 'viniciuslimaandre@hotmail.com',
  phone: '(14) 99121-2457',
  city: 'Lins - São Paulo',
  cityLink: 'https://goo.gl/maps/k2XJFjZ5ah7Mvm7H9',
};

export const footerData: FooterType = {
  whatsapp: 'https://wa.me/5514991212457',
  facebook: 'https://www.facebook.com/viniciuslimaan',
  instagram: 'https://www.instagram.com/viniciuslimaan/',
  linkedin: 'https://www.linkedin.com/in/viniciuslimaan',
  github: 'https://github.com/viniciuslimaan',
};
