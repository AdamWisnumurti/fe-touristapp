import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { toast } from 'react-toastify';

export const DropzoneImage = ({
  dataImage,
  obj,
  handleImage,
}: {
  dataImage: string;
  obj: string;
  handleImage: (_: string, __: string) => void;
}) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (
        acceptedFiles?.[0]?.type?.split('/')?.[0] === 'image' // get type of file and check image format
      ) {
        const val = acceptedFiles?.[0];
        const reader = new FileReader();

        reader.onload = (e) => {
          if (e.target) {
            const base64String = e.target.result as string;
            handleImage(obj, base64String);
          }
        };
        reader.readAsDataURL(val);
      } else {
        toast('File must be an image (PNG, JPEG, or JPG).', {
          type: 'error',
          autoClose: 3000,
        });
      }
      // Do something with the files
    },
    [handleImage, obj],
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="cursor-pointer text-black">
      <input {...getInputProps()} />
      <div className="flex h-40 w-full flex-col items-center justify-center rounded-lg border-2 border-dotted border-gray-300 bg-gray-100 p-4">
        {dataImage ? (
          <Image
            src={dataImage || ''}
            alt="image dropzone"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto object-cover"
          />
        ) : (
          <p>Drag and drop files, or Browse</p>
        )}
      </div>
      <div className="flex items-center justify-between space-x-3">
        <p className="w-full text-sm text-gray-500">
          Drag and drop files above, or{' '}
          <span className="text-blue-500 underline hover:brightness-90">
            Browse
          </span>
        </p>
        <p />
      </div>
    </div>
  );
};
