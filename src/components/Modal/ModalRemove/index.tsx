import { useState, useCallback } from 'react';
import Modal from 'react-modal';

import { Icon } from '@iconify/react';

import { Portfolio as PortfolioType } from '../../../types/portfolio';
import { User as UserType } from '../../../types/user';

import api from '../../../services/api';

import { toastError, toastSuccess } from '../../../utils/toast';

import Button from '../../../components/Button';

import { ModalClose, ModalHeader, ModalContent, ModalFooter } from './styles';

interface ModalDataProps {
  data: UserType | PortfolioType;
  type: 'user' | 'portfolio';
  reload: () => void;
}

interface Props {
  data: ModalDataProps;
  opened: {
    modalOpened: boolean;
    setModalOpened: (value: boolean) => void;
  };
}

const ModalRemove = ({ data, opened }: Props) => {
  const [saving, setSaving] = useState<boolean>(false);

  const { modalOpened, setModalOpened } = opened;

  const styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .9)',
      zIndex: '999',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '10px',
      padding: '0',
      width: '90%',
      maxWidth: '450px',
      background: 'linear-gradient(to top right, #000617 0%, #000b29 100%)',
    },
  };

  const typeName = data.type === 'user' ? 'usuário' : 'portfólio';

  const firstLetterUp = (type: string) =>
    type.charAt(0).toUpperCase() + type.slice(1);

  const onConfirm = useCallback(async () => {
    setSaving(true);

    try {
      await api.delete(`/${data.type}/${data.data.id}`);

      toastSuccess(`${firstLetterUp(typeName)} excluído com sucesso!`);
    } catch (err) {
      toastError(`Não foi possível excluir o ${firstLetterUp(typeName)}.`);
    } finally {
      setModalOpened(false);
      setSaving(false);
      data.reload();
    }
  }, [data, setModalOpened, typeName]);

  return (
    <Modal
      isOpen={modalOpened}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setModalOpened(false)}
      closeTimeoutMS={300}
      ariaHideApp={false}
      style={styles}
    >
      <ModalHeader>
        <h3>Excluir {typeName}</h3>
      </ModalHeader>

      <ModalClose onClick={() => setModalOpened(false)}>
        <Icon icon="majesticons:close" className="closeModal" />
      </ModalClose>

      <ModalContent>
        <p>
          Você realmente deseja excluir o {typeName} <b>{data.data.name}</b>?
        </p>
      </ModalContent>

      <ModalFooter>
        <Button
          text="Cancelar"
          color="red"
          execute={() => setModalOpened(false)}
        />
        <Button
          text="Excluir"
          color="green"
          isLoading={saving}
          execute={() => onConfirm()}
        />
      </ModalFooter>
    </Modal>
  );
};

export default ModalRemove;
