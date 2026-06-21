import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CaseStudy } from '@/types';
import TierTag from '@/components/ui/TierTag';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';

interface Props {
  caseItem: CaseStudy;
  onClick: () => void;
}

export default function CaseCard({ caseItem, onClick }: Props) {
  const truncatedSummary =
    caseItem.summary.length > 80
      ? caseItem.summary.slice(0, 80) + '...'
      : caseItem.summary;

  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: colors.gold,
          boxShadow: `0 4px 14px rgba(212,168,83,0.15)`,
          transform: 'translateY(-2px)',
        },
      }}
    >
      {/* Cover Image Placeholder */}
      <Box
        sx={{
          height: 140,
          backgroundColor: colors.bgSecondary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: colors.goldSubtle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i className="fa-solid fa-file-lines" style={{ fontSize: '1.25rem', color: colors.gold }} />
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        {/* Title + Customer */}
        <Typography
          sx={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: colors.textPrimary,
            lineHeight: 1.4,
            mb: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {caseItem.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography sx={{ fontSize: '0.75rem', color: colors.textSecondary }}>
            {caseItem.customerName}
          </Typography>
          <TierTag tier={caseItem.customerTier} size="small" />
        </Box>

        {/* Summary */}
        <Typography
          sx={{
            fontSize: '0.75rem',
            color: colors.textTertiary,
            lineHeight: 1.5,
            mb: 1.5,
            minHeight: 36,
          }}
        >
          {truncatedSummary}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 1.5 }}>
          {caseItem.tags.slice(0, 3).map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.625rem',
                color: colors.textSecondary,
                backgroundColor: colors.goldSubtle,
                borderRadius: 1,
                '& .MuiChip-label': { px: 0.75 },
              }}
            />
          ))}
        </Box>

        {/* Status */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <StatusBadge status={caseItem.status} size="small" />
        </Box>
      </Box>
    </Box>
  );
}
