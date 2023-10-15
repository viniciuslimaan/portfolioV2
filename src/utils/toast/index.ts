import { toast, Zoom } from 'react-toastify';

export const toastSuccess = (text: string) => {
  toast.success(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    pauseOnFocusLoss: false,
    transition: Zoom,
    theme: 'colored',
  });
};

export const toastWarning = (text: string) => {
  toast.warning(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    pauseOnFocusLoss: false,
    transition: Zoom,
    theme: 'colored',
  });
};

export const toastError = (text: string) => {
  toast.error(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    pauseOnFocusLoss: false,
    transition: Zoom,
    theme: 'colored',
  });
};
