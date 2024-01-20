import React, { useCallback, useState } from 'react';
import { Button, Modal } from '@global/component';
import { TouristServices } from '@service';
import { toast } from 'react-toastify';
import { useAuth } from '@global/hook';
import type { ITourist } from '@global/type';
import { useRouter } from 'next/router';

export const ModalDeleteTourist = ({
  isOpen,
  dataInit,
  toggleClose,
}: {
  isOpen: boolean;
  dataInit?: ITourist;
  toggleClose: () => void;
}) => {
  const { token } = useAuth();
  const router = useRouter();
  const { deleteTourist } = TouristServices(token);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      await deleteTourist(dataInit?.id);
      toggleClose();
      toast('Tourist has beed deleted', {
        type: 'success',
        autoClose: 3000,
      });
      setTimeout(() => {
        router.push('/');
      }, 2800);
    } catch (error: any) {
      toast(
        error?.response?.data?.message ||
          error?.statusText ||
          'Internal Server Error',
        {
          type: 'error',
          autoClose: 3000,
        },
      );
    } finally {
      setIsLoading(false);
    }
  }, [deleteTourist, dataInit?.id, toggleClose, router]);

  return (
    <Modal
      isOpen={isOpen}
      toggleClose={() => {
        if (!isLoading) {
          toggleClose();
        }
      }}
      modalTitle="Delete Portfolio"
    >
      {/* Children Error */}
      <div className="flex flex-col justify-center px-2 text-center text-neutral-90  md:px-8">
        <div className="my-6">
          <h3 className=" pb-2 text-lg font-semibold">
            Are you sure you want to delete {dataInit?.tourist_name || '-'} from
            list? <br />
          </h3>
          <p>This action cannot be undone.</p>
        </div>
        <div className="mb-6 flex justify-end space-x-3">
          <Button
            variant="primary"
            label="Back to Dashboard"
            onClick={handleSubmit}
            size="md"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Delete
          </Button>
          <Button
            variant="gray"
            label="Back to Dashboard"
            onClick={toggleClose}
            size="md"
            disabled={isLoading}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};
