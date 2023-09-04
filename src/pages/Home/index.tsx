import About from '../../components/About';
import AcademicProjects from '../../components/AcademicProjects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Portfolio from '../../components/Portfolio';
import ScrollToTopBtn from '../../components/ScrollToTopBtn';
import Services from '../../components/Services';
import Skills from '../../components/Skills';

import {
  aboutData,
  academicData,
  contactData,
  footerData,
  headerData,
  portfolioData,
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

      <AcademicProjects data={academicData} />

      <Portfolio data={portfolioData} />

      <Contact data={contactData} />

      <Footer data={footerData} />

      <ScrollToTopBtn />
    </>
  );
};

export default Home;
