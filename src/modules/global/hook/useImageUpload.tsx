/* eslint-disable no-new */

import { type Dispatch, type SetStateAction } from 'react';
// import exifr from 'exifr';

export const useImageUpload = (
  // state: IDataRegister,
  // obj: string,
  handleInput: Dispatch<SetStateAction<string>>,
  // isKtp?: boolean,
) => {
  const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024; // 2MB (adjust as needed)
    const file = event.target.files?.[0];
    if (
      file
      //  && file.size < MAX_IMAGE_SIZE_BYTES
    ) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const base64String = e.target.result as string;
          // setResult(base64String);
          handleInput(base64String);
        }
      };

      // const exifData = await exifr.gps(file);
      // console.log(exifData);
      // if (exifData) {
      //   setLocation({
      //     latitude: exifData.latitude,
      //     longitude: exifData.longitude,
      //   });
      // } else {
      //   setLocation(null);
      // }

      reader.readAsDataURL(file);
    }
  };

  return { handleImage };
};
