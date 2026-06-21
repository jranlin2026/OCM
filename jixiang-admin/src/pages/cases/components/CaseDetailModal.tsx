import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CaseStudy } from '@/types';
import { colors } from '@/theme/tokens';
import MetricsDisplay from './MetricsDisplay';
import TierTag from '@/components/ui/TierTag';

interface Props {
  caseItem: CaseStudy | null;
  open: boolean;
  onClose: () => void;
}

export default function CaseDetailModal({ caseItem, open, onClose }: Props) {
  if (!caseItem) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: colors.surface,
          backgroundImage: 'none',
          borderRadius: 3,
          border: `1px solid ${colors.border}`,
        },
      }}
    >
      <Box sx={{ position: 'relative', p: 3 }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: colors.textTertiary,
            '&:hover': { color: colors.textPrimary },
          }}
        >
          <i className="fa-solid fa-xmark" style={{ fontSize: '1.125rem' }} />
        </IconButton>

        {/* Title + Customer */}
        <Typography
          sx={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: colors.textPrimary,
            mb: 0.5,
            pr: 4,
          }}
        >
          {caseItem.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
            {caseItem.customerName}
          </Typography>
          <TierTag tier={caseItem.customerTier} size="small" />
        </Box>

        {/* Challenge */}
        <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.textPrimary, mb: 0.5 }}>
          挑战
        </Typography>
        <Typography
          sx={{
            fontSize: '0.8125rem',
            color: colors.textSecondary,
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          {caseItem.challenge}
        </Typography>

        {/* Solution */}
        <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.textPrimary, mb: 0.5 }}>
          解决方案
        </Typography>
        <Typography
          sx={{
            fontSize: '0.8125rem',
            color: colors.textSecondary,
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          {caseItem.solution}
        </Typography>

        {/* Result */}
        <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.textPrimary, mb: 0.5 }}>
          成果
        </Typography>
        <Typography
          sx={{
            fontSize: '0.8125rem',
            color: colors.textSecondary,
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          {caseItem.result}
        </Typography>

        {/* Metrics */}
        <MetricsDisplay metrics={caseItem.metrics} />
      </Box>
    </Dialog>
  );
}
