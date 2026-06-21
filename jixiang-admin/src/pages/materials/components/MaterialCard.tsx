import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { colors } from '@/theme/tokens';
import StatusBadge from '@/components/ui/StatusBadge';
import { formatDateTime } from '@/utils/formatters';

export interface MaterialItem {
  id: string;
  title: string;
  category: string;
  content: string;
  author: string;
  status: 'draft' | 'published';
  views: number;
  downloads: number;
  createdAt: string;
  tags: string[];
}

interface Props {
  item: MaterialItem;
  icon: string;
}

export default function MaterialCard({ item, icon }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
        p: 2.5,
        transition: 'all 0.2s',
        cursor: 'pointer',
        '&:hover': {
          borderColor: colors.borderGold,
          backgroundColor: colors.surfaceHover,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            backgroundColor: colors.goldSubtle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.gold,
            fontSize: '1.125rem',
            flexShrink: 0,
          }}
        >
          <i className={icon} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary, lineHeight: 1.4 }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary, mt: 0.25 }}>
            {item.author} · {formatDateTime(item.createdAt)}
          </Typography>
        </Box>
        <StatusBadge status={item.status} size="small" />
      </Box>
      <Typography
        sx={{
          fontSize: '0.8125rem',
          color: colors.textSecondary,
          lineHeight: 1.6,
          mb: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {item.content}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          {item.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontSize: '0.6875rem',
                height: 20,
                backgroundColor: colors.surfaceElevated,
                color: colors.textSecondary,
                border: `1px solid ${colors.border}`,
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexShrink: 0 }}>
          <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
            <i className="fa-solid fa-eye" style={{ marginRight: 4 }} />
            {item.views}
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
            <i className="fa-solid fa-download" style={{ marginRight: 4 }} />
            {item.downloads}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
