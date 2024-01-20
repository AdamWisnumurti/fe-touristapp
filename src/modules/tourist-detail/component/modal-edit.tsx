import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { Button, InputLabel, Modal } from '@global/component';
import { TouristServices } from '@service';
import { useAuth } from '@global/hook';
import { toast } from 'react-toastify';
import { hasEmptyValue, isValidEmail } from '@global/util';
import type { ITourist, ITouristEdit } from '@global/type';
import { useRouter } from 'next/router';

export const ModalEditTourist = ({
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
  const { putTourist } = TouristServices(token);
  const [dataEdit, setDataEdit] = useState<ITouristEdit>({
    tourist_email: '',
    tourist_name: '',
    tourist_location: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      await putTourist(dataInit?.id, dataEdit);
      toggleClose();
      toast('Tourist has been edited', {
        type: 'success',
        autoClose: 3000,
      });
      setTimeout(() => {
        router.reload();
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
  }, [dataEdit, dataInit?.id, putTourist, router, toggleClose]);

  useEffect(() => {
    if (isOpen) {
      setDataEdit({
        ...dataInit,
        tourist_name: dataInit?.tourist_name,
        tourist_email: dataInit?.tourist_email,
        tourist_location: dataInit?.tourist_location,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      toggleClose={() => {
        if (!isLoading) {
          toggleClose();
        }
      }}
      modalTitle="Edit Tourist"
    >
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
              _.isEqual(dataEdit, dataInit) ||
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
