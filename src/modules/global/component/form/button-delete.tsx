import { FaTrashAlt } from 'react-icons/fa';

export const ButtonDelete = ({ onClick }: { onClick: (_: any) => void }) => {
  return (
    //   <Button onClick={onClick} size="sm" variant="gray" className="w-auto">
    <div
      className="cursor-pointer rounded-md bg-neutral-20 p-[7px] text-neutral-100 hover:opacity-80"
      onClick={onClick}
    >
      <FaTrashAlt size={14} />
    </div>
    // </Button>
  );
};
