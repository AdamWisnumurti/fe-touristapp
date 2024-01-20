import { Button } from '@global/component';

export const ButtonEdit = ({ onClick }: { onClick: (_: any) => void }) => {
  return (
    <Button onClick={onClick} size="sm" variant="gray">
      Edit
    </Button>
  );
};
