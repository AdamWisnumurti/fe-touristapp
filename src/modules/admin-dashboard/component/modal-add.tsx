import React, { useCallback, useState } from 'react';
import { Button, InputLabel, Modal } from '@global/component';
import { TouristServices } from '@service';
import { useAuth } from '@global/hook';
import { toast } from 'react-toastify';
import { hasEmptyValue, isValidEmail } from '@global/util';
import type { ITouristEdit } from '@global/type';

export const ModalAddTourist = ({
  isOpen,
  toggleClose,
  reload,
}: {
  isOpen: boolean;
  toggleClose: () => void;
  reload?: () => void;
}) => {
  const { token } = useAuth();
  const { postTourist } = TouristServices(token);
  const [dataEdit, setDataEdit] = useState<ITouristEdit>({
    tourist_email: '',
    tourist_name: '',
    tourist_location: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      await postTourist(dataEdit);
      toggleClose();
      toast('New tourist has been added', {
        type: 'success',
        autoClose: 3000,
      });
      setTimeout(() => {
        setDataEdit({
          tourist_email: '',
          tourist_name: '',
          tourist_location: '',
        });
        reload();
      }, 1000);
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
  }, [dataEdit, postTourist, reload, toggleClose]);

  return (
    <Modal
      isOpen={isOpen}
      toggleClose={() => {
        if (!isLoading) {
          toggleClose();
        }
      }}
      modalTitle="Add Tourist"
    >
      {/* Children Error */}
      <div className="flex flex-col px-2 text-center md:px-8">
        <div className="my-6 space-y-4 text-start">
          <InputLabel
            label="Email"
            value={dataEdit?.tourist_email || ''}
            onChange={(e) =>
              setDataEdit((curr) => ({
                ...curr,
                tourist_email: e.target.value,
              }))
            }
            isError={
              dataEdit?.tourist_email && !isValidEmail(dataEdit?.tourist_email)
            }
            errorMessage="Email must be valid"
            placeholder="Input Tourist's Email"
          />
          <InputLabel
            label="TFullname"
            value={dataEdit?.tourist_name || ''}
            onChange={(e) =>
              setDataEdit((curr) => ({
                ...curr,
                tourist_name: e.target.value,
              }))
            }
            placeholder="Input Tourist's Fullname"
          />
          <InputLabel
            label="Location"
            value={dataEdit?.tourist_location || ''}
            onChange={(e) =>
              setDataEdit((curr) => ({
                ...curr,
                tourist_location: e.target.value,
              }))
            }
            placeholder="Input Tourist's Location"
          />
        </div>
        <div className="mb-6 flex justify-end space-x-3">
          <Button
            variant="primary"
            label="Back to Dashboard"
            onClick={handleSubmit}
            size="md"
            isLoading={isLoading}
            disabled={
              !isValidEmail(dataEdit?.tourist_email) ||
              isLoading ||
              hasEmptyValue(dataEdit)
            }
          >
            Save Changes
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
