import { useState, useEffect, useCallback } from 'react';

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

import api from '../../services/api';

import EmptyData from '../EmptyData';
import ScrollFadeIn from '../FadeInAnimations/Scroll';
import SectionTitle from '../SectionTitle';
import Card from './Card';
import Loading from './Loading';

import { Container } from '../../styles/layout';
import { Button, Buttons, Cards, LinkGit } from './styles';

type Filter = 'all' | 'design' | 'prototype' | 'web' | 'mobile';

interface ImageProps {
  src: string;
  width?: number;
  height: number;
}

interface AvaliableButtonsProps {
  name: string;
  filter: Filter;
}

const AvaliableButtons: AvaliableButtonsProps[] = [
  {
    name: 'Tudo',
    filter: 'all',
  },
  {
    name: 'Design',
    filter: 'design',
  },
  {
    name: 'Protótipo',
    filter: 'prototype',
  },
  {
    name: 'Aplicativo web',
    filter: 'web',
  },
  {
    name: 'Aplicativo mobile',
    filter: 'mobile',
  },
];

const Portfolio = () => {
  const [data, setData] = useState<PortfolioType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedFilter, setSelectedFilter] = useState<Filter>('all');
  const [filteredData, setFilteredData] = useState<PortfolioType[]>([]);
  const [images, setImages] = useState<ImageProps[]>([]);

  const [open, setOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const getData = useCallback(async () => {
    try {
      const response = await api.get('/portfolio');

      const portfolioData = response.data.data;

      setData(portfolioData);
      setFilteredData(portfolioData);
    } catch (err) {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

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
      src: item.image_url || '',
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
          {AvaliableButtons.map((item, i) => (
            <Button
              key={i}
              className={selectedFilter === item.filter ? 'selected' : ''}
              onClick={() => handleFilter(item.filter)}
            >
              {item.name}
            </Button>
          ))}
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

        {!loading && filteredData.length === 0 && <EmptyData />}

        <Cards>
          {loading && <Loading />}

          {!loading &&
            filteredData.length > 0 &&
            filteredData.map((item: PortfolioType, i: number) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image_url || ''}
                type={item.type}
                deploy={item.deploy}
                github={item.github}
                figma={item.figma}
                onClick={() => handleLightbox(i)}
              />
            ))}
        </Cards>

        <LinkGit>
          Você pode encontrar mais projetos no meu{' '}
          <a
            href="https://github.com/viniciuslimaan"
            target="_blank"
            rel="noreferrer"
          >
            porfólio
          </a>
          .
        </LinkGit>
      </ScrollFadeIn>
    </Container>
  );
};

export default Portfolio;
