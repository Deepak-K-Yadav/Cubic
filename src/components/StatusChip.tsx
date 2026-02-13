import { Chip } from '@mui/material';

type Props = {
  status: 'On' | 'Off';
};

export default function StatusChip({ status }: Props) {
  return (
    <Chip
      label={status}
      size="small"
      color={status === 'On' ? 'success' : 'default'}
    />
  );
}
