import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const LoadingInline = () => {
  return (
    <div className=" z-50 flex h-full w-full items-center justify-center overflow-hidden bg-transparent py-16">
      <div className="flex h-full flex-col items-center justify-center overflow-hidden text-neutral-40">
        <AiOutlineLoading3Quarters className="m-auto animate-spin text-4xl text-primary" />
      </div>
    </div>
  );
};

export const LoadingScreen = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-10 pb-16">
      <div className="flex flex-col items-center justify-center overflow-hidden text-neutral-40">
        <AiOutlineLoading3Quarters className="m-0 animate-spin p-0 text-4xl text-primary" />
      </div>
    </div>
  );
};

export const LoadingOverlay = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-hidden bg-black bg-opacity-10 pb-16">
      <div className="flex flex-col items-center justify-center overflow-hidden text-neutral-40">
        <AiOutlineLoading3Quarters className="m-0 animate-spin p-0 text-4xl text-primary" />
      </div>
    </div>
  );
};
