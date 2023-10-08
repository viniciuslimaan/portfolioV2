import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

import { Icon } from '@iconify/react';

import { ImgPreview, ImgRemove, InputBg } from './styles';

const InputImage = () => {
  const { setValue, watch } = useFormContext();

  const watchImgUrl = watch('image_url');

  const [imagePreview, setImagePreview] = useState('');

  const onDrop = useCallback(
    (file: any) => {
      setValue('image', file[0]);
      setImagePreview(URL.createObjectURL(file[0]));
    },
    [setValue],
  );

  const removeImage = useCallback(
    (event: any) => {
      event.preventDefault();
      event.stopPropagation();

      setValue('image', '');
      setImagePreview('');
    },
    [setValue],
  );

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragReject } =
    useDropzone({
      accept: {
        'image/jpeg': [],
        'image/png': [],
      },
      onDrop,
    });

  return (
    <InputBg
      {...getRootProps({
        isFocused,
        isDragReject,
        uploaded: !!imagePreview,
      })}
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>
          {isDragReject
            ? 'Apenas imagens *.jpg e *.png são aceitas!'
            : 'Só soltar a imagem...'}
        </p>
      ) : (
        <>
          <p>Arraste a imagem ou clique aqui e selecione</p>
          <small>(Apenas imagens *.jpg e *.png são aceitas)</small>
        </>
      )}

      {watchImgUrl && !imagePreview && (
        <ImgPreview>
          <img src={watchImgUrl} alt="Imagem carregada" />
        </ImgPreview>
      )}

      {imagePreview && (
        <ImgPreview>
          <img
            src={imagePreview}
            onLoad={() => {
              URL.revokeObjectURL(imagePreview);
            }}
            alt="Imagem carregada"
          />

          <ImgRemove onClick={(e: any) => removeImage(e)}>
            <Icon icon="majesticons:close" className="icon" />
          </ImgRemove>
        </ImgPreview>
      )}
    </InputBg>
  );
};

export default InputImage;
