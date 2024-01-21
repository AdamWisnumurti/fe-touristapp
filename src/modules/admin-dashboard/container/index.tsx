/* eslint-disable react/no-unstable-nested-components */
import {
  Button,
  LoadingInline,
  ModalDeleteTourist,
  ModalEditTourist,
  Pagination,
  Table,
} from '@global/component';
import { useAuth, usePagination } from '@global/hook';
import { TouristServices } from '@service';
import React, { useState, useCallback } from 'react';
import { FaPlus } from 'react-icons/fa';
import type { ITourist } from '@global/type';
import type { Column } from 'react-table';
import { useRouter } from 'next/router';
import { ModalAddTourist } from '@admin-dashboard/component';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

export const AdminDashboard = () => {
  const { token } = useAuth();
  const { getTourist } = TouristServices(token);
  const router = useRouter();
  const [modal, setModal] = useState({
    isOpen: false,
    dataInit: null,
    type: 'edit',
    isSuccess: false,
  });

  const { data, pageIndex, pageCount, setPageIndex, reload, isLoading } =
    usePagination(getTourist);

  const toggleDetail = useCallback(
    (item: ITourist) => {
      router.push(`/tourist/${item?.id}`);
    },
    [router],
  );

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
      isSuccess: false,
      dataInit: null,
    }));
  }, []);

  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: 'No',
        accessor: 'key',
        Cell: (props) => {
          return <span>{props.row.index + 1 + (pageIndex - 1) * 10}</span>;
        },
      },
      {
        Header: 'Name',
        accessor: 'tourist_name',
        Cell: (props) => {
          return (
            <Button
              size="sm"
              onClick={() => toggleDetail(props.row.original)}
              classWrapper="p-0 text-base"
              variant="primary-text"
            >
              {props?.row?.original?.tourist_name || '-'}
            </Button>
          );
        },
      },
      { Header: 'Email', accessor: 'tourist_email', width: 10 },
      {
        Header: 'Location',
        accessor: 'tourist_location',
        width: 10,
      },
      {
        Header: () => {
          return <div className="text-center">Action</div>;
        },
        accessor: 'qty',
        Cell: (props) => {
          return (
            <div className="flex items-center justify-center space-x-2 text-center">
              <Button
                size="sm"
                onClick={() => toggleOpenModal('edit', props?.row?.original)}
                classWrapper="py-1 px-2"
                variant="secondary"
              >
                <HiPencilAlt size={18} />
              </Button>
              <Button
                size="sm"
                onClick={() => toggleOpenModal('delete', props?.row?.original)}
                classWrapper="py-1 px-2"
                variant="danger"
              >
                <HiTrash size={18} />
              </Button>
            </div>
          );
        },
      },
    ],
    [pageIndex, toggleDetail, toggleOpenModal],
  );

  return (
    <>
      <section className="px-2 py-16 md:px-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black">Tourist List</h2>
          <Button size="sm" onClick={() => toggleOpenModal('add')}>
            <span className="flex items-center space-x-2">
              <FaPlus size={12} />
              <p className="text-[15px] font-black">Add Tourist</p>
            </span>
          </Button>
        </div>
        <div className="mt-4 space-y-3">
          {isLoading && (
            <div className="h-40">
              <LoadingInline />
            </div>
          )}
          {data?.length > 0 && !isLoading && (
            <div className="space-y-8">
              <Table columns={columns} data={data} isLoading={false} />
              <Pagination
                pageIndex={pageIndex}
                pageCount={pageCount}
                setPageIndex={setPageIndex}
              />
            </div>
          )}
        </div>
      </section>

      <ModalAddTourist
        isOpen={modal.isOpen && modal?.type === 'add'}
        toggleClose={toggleCloseModal}
        reload={reload}
      />
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
