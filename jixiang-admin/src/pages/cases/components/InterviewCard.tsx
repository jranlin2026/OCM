import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CustomerInterview } from '@/types';
import TierTag from '@/components/ui/TierTag';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';

interface Props {
  interview: CustomerInterview;
}

export default function InterviewCard({ interview }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
        p: 2.5,
        transition: 'all 0.2s ease',
        '&:hover': { borderColor: colors.borderStrong },
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Avatar Placeholder */}
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              backgroundColor: colors.goldSubtle,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <i className="fa-solid fa-user" style={{ fontSize: '0.875rem', color: colors.gold }} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: colors.textPrimary }}>
              {interview.customerName}
            </Typography>
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
              {interview.customerTitle}
            </Typography>
          </Box>
        </Box>
        <TierTag tier={interview.tier} size="small" />
      </Box>

      {/* Interview Date + Interviewer */}
      <Box sx={{ display: 'flex', gap: 2, mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <i className="fa-solid fa-calendar" style={{ fontSize: '0.6875rem', color: colors.textTertiary }} />
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
            {interview.interviewDate}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <i className="fa-solid fa-microphone" style={{ fontSize: '0.6875rem', color: colors.textTertiary }} />
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
            {interview.interviewer}
          </Typography>
        </Box>
      </Box>

      {/* Highlights */}
      <Box sx={{ mb: 1.5 }}>
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.75 }}>
          采访亮点
        </Typography>
        {interview.highlights.slice(0, 3).map((highlight, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 0.75,
              mb: 0.5,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                backgroundColor: colors.gold,
                mt: 0.5,
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                fontSize: '0.75rem',
                color: colors.textSecondary,
                lineHeight: 1.5,
              }}
            >
              {highlight}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Tags + Status */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          {interview.tags.map((tag) => (
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
        <StatusBadge status={interview.status} size="small" />
      </Box>
    </Box>
  );
}
