import { Icon } from '@iconify/react';

import Button from '../../Button';

interface Props {
  isSaving?: boolean;
}

const BtnSave = ({ isSaving }: Props) => {
  return (
    <Button
      icon={<Icon className="icon" icon="ph:floppy-disk-duotone" />}
      isLoading={isSaving}
      text="Salvar"
      color="green"
      type="submit"
    />
  );
};

export default BtnSave;
