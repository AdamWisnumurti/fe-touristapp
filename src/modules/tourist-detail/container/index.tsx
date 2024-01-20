import React, { useState, useCallback } from 'react';
import type { ITourist } from '@global/type';
import Image from 'next/image';
import { Button } from '@global/component';
import { HiArrowLeft } from 'react-icons/hi';
import {
  ModalDeleteTourist,
  ModalEditTourist,
} from '@tourist-detail/component';
import { useRouter } from 'next/router';

export const TouristDetail = ({ data }: { data: ITourist }) => {
  const router = useRouter();
  const [modal, setModal] = useState({
    isOpen: false,
    dataInit: null,
    type: 'edit',
    isSuccess: false,
  });

  const toggleOpenModal = useCallback((type: string, dataInit?: ITourist) => {
    setModal((curr) => ({
      ...curr,
      isOpen: true,
      type,
      dataInit,
    }));
  }, []);

  const toggleCloseModal = useCallback(() => {
    setModal((curr) => ({
      ...curr,
      isOpen: false,
    }));
  }, []);

  const randBg = Math.floor(Math.random() * 4) + 1;

  return (
    <>
      <div
        className="h-60 w-full bg-cover md:h-80"
        style={{
          backgroundImage: `url(/images/bg${randBg}.jpg)`,
          backgroundPosition: `center center`,
        }}
      />
      <main className="px-2 md:px-16">
        <section className="mb-8 flex flex-col items-center justify-center text-start">
          <Image
            src={data?.tourist_profilepicture || ''}
            alt="Background Image"
            width={0}
            height={0}
            sizes="100vw"
            className="-mt-16 mb-6 h-24 w-24 rounded-full border border-white object-cover md:-mt-28 md:h-40 md:w-40"
          />
          <div className="min-w-[300px] md:min-w-[600px]">
            <div className="mb-4 flex items-center justify-between">
              <Button
                variant="primary-text"
                size="md"
                classWrapper="p-0 space-x-1"
                onClick={() => router.push('/')}
              >
                <HiArrowLeft />
                <span>Back</span>
              </Button>
              <span className="flex space-x-2">
                <Button
                  variant="secondary"
                  size="sm"
                  classWrapper=" space-x-1"
                  onClick={() => toggleOpenModal('delete', data)}
                >
                  <span>Delete</span>
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  classWrapper=" space-x-1"
                  onClick={() => toggleOpenModal('edit', data)}
                >
                  <span>Edit</span>
                </Button>
              </span>
            </div>
            <div className="space-y-2 rounded-lg border border-neutral-10 bg-white px-6 py-4">
              <h2 className="text-2xl font-semibold">
                {data?.tourist_name || ''}
              </h2>
              <h3 className="my-0.5 font-semibold">
                {data?.tourist_email || ''}
              </h3>
              <p className="text-sm">{data?.tourist_location || ''}</p>
            </div>
          </div>
        </section>
      </main>
      <div className="px-10 py-6" />
      <ModalEditTourist
        isOpen={modal.isOpen && modal?.type === 'edit'}
        dataInit={modal?.dataInit}
        toggleClose={toggleCloseModal}
      />
      <ModalDeleteTourist
        isOpen={modal.isOpen && modal?.type === 'delete'}
        dataInit={modal?.dataInit}
        toggleClose={toggleCloseModal}
        // reload={fetchTourist}
      />
    </>
  );
};
