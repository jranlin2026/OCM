import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import TierTag from '@/components/ui/TierTag';
import { RefundPolicy, PolicyStatus } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  policy: RefundPolicy;
}

const STATUS_LABELS: Record<PolicyStatus, string> = {
  [PolicyStatus.DRAFT]: '草稿',
  [PolicyStatus.EFFECTIVE]: '生效中',
  [PolicyStatus.EXPIRED]: '已过期',
  [PolicyStatus.ARCHIVED]: '已归档',
};

const STATUS_COLORS: Record<PolicyStatus, string> = {
  [PolicyStatus.DRAFT]: colors.textTertiary,
  [PolicyStatus.EFFECTIVE]: colors.success,
  [PolicyStatus.EXPIRED]: colors.danger,
  [PolicyStatus.ARCHIVED]: colors.textTertiary,
};

export default function RefundPolicyCard({ policy }: Props) {
  const statusColor = STATUS_COLORS[policy.status];
  const statusLabel = STATUS_LABELS[policy.status];

  return (
    <ContentCard>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary }}>
            {policy.title}
          </Typography>
          <TierTag tier={policy.productTier} />
        </Box>
        <Box
          sx={{
            px: 1.5,
            py: 0.25,
            borderRadius: 1,
            backgroundColor: `${statusColor}1A`,
            color: statusColor,
            fontSize: '0.6875rem',
            fontWeight: 600,
          }}
        >
          {statusLabel}
        </Box>
      </Box>

      {/* Refund Period */}
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.75,
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          backgroundColor: `${colors.warning}1A`,
          color: colors.warning,
          fontSize: '0.75rem',
          fontWeight: 600,
          mb: 1.5,
        }}
      >
        <i className="fa-solid fa-clock" style={{ fontSize: '0.75rem' }} />
        退款期限: {policy.refundPeriod}
      </Box>

      {/* Refund Rule */}
      <Box sx={{ mb: 1.5 }}>
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.5 }}>
          退款规则
        </Typography>
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.6 }}>
          {policy.refundRule}
        </Typography>
      </Box>

      {/* Deduction Rule */}
      <Box sx={{ mb: 1.5 }}>
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.5 }}>
          扣费规则
        </Typography>
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.6 }}>
          {policy.deductionRule}
        </Typography>
      </Box>

      {/* Exceptions */}
      {policy.exceptions.length > 0 && (
        <Box>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.danger, mb: 0.5 }}>
            例外情况
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {policy.exceptions.map((exc, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.75 }}>
                <i className="fa-solid fa-circle-exclamation" style={{ fontSize: '0.625rem', color: colors.danger, marginTop: '0.125rem' }} />
                <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
                  {exc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </ContentCard>
  );
}
