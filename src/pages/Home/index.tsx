import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Portfolio from '../../components/Portfolio';
import ScrollToTopBtn from '../../components/ScrollToTopBtn';
import Services from '../../components/Services';
import Skills from '../../components/Skills';

import {
  aboutData,
  contactData,
  footerData,
  headerData,
  servicesData,
  skillsData,
} from './defaultData';

const Home = () => {
  return (
    <>
      <Header data={headerData} />

      <Services data={servicesData} />

      <About data={aboutData} />

      <Skills data={skillsData} />

      <Portfolio />

      <Contact data={contactData} />

      <Footer data={footerData} />

      <ScrollToTopBtn />
    </>
  );
};

export default Home;
