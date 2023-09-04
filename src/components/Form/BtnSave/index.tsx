import { Icon } from '@iconify/react';

import Button from '../../Button';

const BtnSave = () => {
  return (
    <Button
      icon={<Icon className="icon" icon="ph:floppy-disk-duotone" />}
      text="Salvar"
      color="green"
      type="submit"
    />
  );
};

export default BtnSave;
