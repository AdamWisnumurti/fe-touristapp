import { Button, LoadingInline, Table } from '@global/component';
import { useAuth, usePagination } from '@global/hook';
import { TouristServices } from '@service';
import React, { useState, useCallback } from 'react';
import { FaPlus } from 'react-icons/fa';
import type { ITourist } from '@global/type';
import type { Column } from 'react-table';
import { useRouter } from 'next/router';
import { ModalAddTourist } from '@admin-dashboard/component';

export const AdminDashboard = () => {
  const { token } = useAuth();
  const { getTourist } = TouristServices(token);
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: false,
  });

  const toggleOpenModal = useCallback(() => {
    setModal((curr) => ({
      ...curr,
      isOpen: true,
    }));
  }, []);

  const toggleCloseModal = useCallback(() => {
    setModal((curr) => ({
      ...curr,
      isOpen: false,
      isSuccess: false,
      dataInit: null,
    }));
  }, []);

  const { data, reload, isLoading } = usePagination(getTourist);

  const toggleDetail = useCallback(
    (item: ITourist) => {
      router.push(`/tourist/${item?.id}`);
    },
    [router],
  );

  const columns = React.useMemo<Column<any>[]>(
    () => [
      { Header: 'No', accessor: 'key', width: '10%' },
      { Header: 'Name', accessor: 'tourist_name', width: '90%' },
      { Header: 'Email', accessor: 'tourist_email', width: 10 },
      {
        Header: 'Location',
        accessor: 'tourist_location',
        width: 10,
      },
      {
        // eslint-disable-next-line react/no-unstable-nested-components
        Header: () => {
          return <div className="text-center">Action</div>;
        },
        accessor: 'qty',
        width: 50,
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: (props) => {
          return (
            <div className="flex items-center justify-center space-x-2 text-center">
              {/* <ButtonDelete onClick={() => deleteHandler(props.row.original)} />
              <ButtonEdit onClick={() => editHandler(props.row.original)} /> */}
              <Button
                size="sm"
                onClick={() => toggleDetail(props.row.original)}
              >
                Detail
              </Button>
            </div>
          );
        },
      },
    ],
    [toggleDetail],
  );

  return (
    <>
      <main className="px-2 md:px-16">
        <section>
          <div className="mt-16 flex items-center justify-between">
            <h2 className="text-2xl font-black">Tourist List</h2>
            <Button
              size="sm"
              onClick={() => toggleOpenModal()}
              variant="secondary"
            >
              <span className="flex items-center space-x-2">
                <FaPlus size={12} />
                <p className="text-[15px] font-black">Add Portfolio</p>
              </span>
            </Button>
          </div>
          <div className="mb-16 mt-4 space-y-3">
            {isLoading && (
              <div className="h-40">
                <LoadingInline />
              </div>
            )}
            {data?.length > 0 && !isLoading && (
              <Table columns={columns} data={data} isLoading={false} />
            )}
          </div>
        </section>
      </main>

      <ModalAddTourist
        isOpen={modal.isOpen}
        toggleClose={toggleCloseModal}
        reload={reload}
      />
    </>
  );
};
