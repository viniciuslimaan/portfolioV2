import { useState } from 'react';
import Modal from 'react-modal';

import { Icon } from '@iconify/react';

import { Academic } from '../../../types/academic';

import { getAcademicSemester } from '../../../utils/functions/getAcademicSemester';

import {
  CardBg,
  Image,
  Description,
  ModalClose,
  ModalText,
  ModalImg,
  ModalTitle,
} from './styles';

const Card = ({ name, semester, image, description }: Academic) => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const handleModal = () => setModalOpened(!modalOpened);

  return (
    <>
      <CardBg onClick={() => handleModal()}>
        <Image src={image} className="img">
          <Icon className="view-icon" icon="ph:eye-duotone" />
        </Image>

        <Description>
          <h3>{getAcademicSemester(semester)}</h3>
          <p>{name}</p>
        </Description>
      </CardBg>

      <Modal
        isOpen={modalOpened}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => handleModal()}
        closeTimeoutMS={300}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, .9)',
            zIndex: '999',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #000b29',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            width: '90%',
            maxWidth: '1000px',
            background:
              'linear-gradient(to top right, #000617 0%, #000b29 100%)',
          },
        }}
      >
        <ModalClose onClick={() => handleModal()}>
          <Icon icon="majesticons:close" className="closeModal" />
        </ModalClose>

        <ModalImg src={image} alt={name} />

        <ModalTitle>
          <h3>{name}</h3>
          <p>{getAcademicSemester(semester)}</p>
        </ModalTitle>

        <ModalText>
          <div
            dangerouslySetInnerHTML={{
              __html:
                description ||
                'Em breve adicionaremos uma descrição ao projeto.',
            }}
          />
        </ModalText>
      </Modal>
    </>
  );
};

export default Card;
