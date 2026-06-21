import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { STATUS_COLORS } from '@/utils/colors';

interface Props {
  status: string;
  size?: 'small' | 'medium';
}

const STATUS_LABELS: Record<string, string> = {
  draft: '草稿',
  published: '已发布',
  pending: '待处理',
  confirmed: '已确认',
  delivered: '已交付',
  completed: '已完成',
};

export default function StatusBadge({ status, size = 'small' }: Props) {
  const color = STATUS_COLORS[status] || '#6B6B82';
  const label = STATUS_LABELS[status] || status;
  const height = size === 'small' ? 22 : 26;
  const fontSize = size === 'small' ? '0.6875rem' : '0.75rem';
  const dotSize = size === 'small' ? 6 : 8;

  return (
    <Chip
      icon={
        <Box
          sx={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: color,
            ml: 0.75,
          }}
        />
      }
      label={label}
      size="small"
      sx={{
        height,
        fontSize,
        fontWeight: 500,
        color: color,
        backgroundColor: `${color}1A`,
        borderRadius: 0.5,
        '& .MuiChip-icon': { mr: -0.25 },
        '& .MuiChip-label': { px: 0.75 },
      }}
    />
  );
}
