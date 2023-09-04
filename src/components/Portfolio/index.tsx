import { useState, useEffect } from 'react';

import { Lightbox } from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import { Portfolio as PortfolioType } from '../../types/portfolio';

import ScrollFadeIn from '../FadeInAnimations/Scroll';
import SectionTitle from '../SectionTitle';
import Card from './Card';

import { Container } from '../../styles/layout';
import { Button, Buttons, Cards } from './styles';

type Filter = 'all' | 'design' | 'web' | 'mobile';

interface ImageProps {
  src: string;
  width?: number;
  height: number;
}

interface Props {
  data: PortfolioType[];
}

const Portfolio = ({ data }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('all');
  const [filteredData, setFilteredData] = useState<PortfolioType[]>(data);
  const [images, setImages] = useState<ImageProps[]>([]);

  const [open, setOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const handleFilter = (filter: Filter) => {
    if (filter !== selectedFilter) {
      setFilteredData([]);
      setSelectedFilter(filter);

      if (filter === 'all') {
        setFilteredData(data);
      } else {
        const newData: PortfolioType[] = data.filter(
          (item) => item.type === filter,
        );

        setFilteredData(newData);
      }
    }
  };

  const handleLightbox = (id: number) => {
    setLightboxIndex(id);
    setOpen(true);
  };

  useEffect(() => {
    const filteredImages = filteredData.map((item) => ({
      src: item.image,
      description: item.name,
      height: 1000,
    }));

    setImages(filteredImages);
  }, [data, filteredData]);

  return (
    <Container padding id="portfolio">
      <ScrollFadeIn>
        <SectionTitle
          title="Portfólio"
          description="Alguns projetos que desenvolvi."
        />
      </ScrollFadeIn>

      <ScrollFadeIn animation="animate__fadeInUp">
        <Buttons>
          <Button
            className={selectedFilter === 'all' ? 'selected' : ''}
            onClick={() => handleFilter('all')}
          >
            Tudo
          </Button>

          <Button
            className={selectedFilter === 'design' ? 'selected' : ''}
            onClick={() => handleFilter('design')}
          >
            Design
          </Button>

          <Button
            className={selectedFilter === 'web' ? 'selected' : ''}
            onClick={() => handleFilter('web')}
          >
            Aplicativo web
          </Button>

          <Button
            className={selectedFilter === 'mobile' ? 'selected' : ''}
            onClick={() => handleFilter('mobile')}
          >
            Aplicativo mobile
          </Button>
        </Buttons>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={lightboxIndex}
          slides={images}
          plugins={[
            Captions,
            Counter,
            Fullscreen,
            Slideshow,
            Thumbnails,
            Video,
            Zoom,
          ]}
          carousel={{ finite: true }}
          controller={{ closeOnBackdropClick: true }}
          animation={{ fade: 500 }}
          captions={{ descriptionTextAlign: 'center' }}
          thumbnails={{ showToggle: true, border: 0, padding: 0 }}
          styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .9)' } }}
        />

        <Cards>
          {filteredData.length > 0 &&
            filteredData.map((item: PortfolioType, i: number) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                type={item.type}
                link={item.link}
                github={item.github}
                figma={item.figma}
                onClick={() => handleLightbox(i)}
              />
            ))}
        </Cards>
      </ScrollFadeIn>
    </Container>
  );
};

export default Portfolio;
