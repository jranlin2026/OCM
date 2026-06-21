import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import TierTag from '@/components/ui/TierTag';
import { PricingStrategy, PolicyStatus } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  pricing: PricingStrategy;
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

export default function PricingCard({ pricing }: Props) {
  const statusColor = STATUS_COLORS[pricing.status];
  const statusLabel = STATUS_LABELS[pricing.status];

  return (
    <ContentCard>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary }}>
            {pricing.name}
          </Typography>
          <TierTag tier={pricing.productTier} />
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

      {/* Base Price */}
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: colors.gold, mb: 1.5 }}>
        ¥{pricing.basePrice.toLocaleString()}
        <span style={{ fontSize: '0.8125rem', fontWeight: 400, color: colors.textTertiary, marginLeft: 4 }}>
          /年
        </span>
      </Typography>

      {/* Discount Rules */}
      {pricing.discountRules.length > 0 && (
        <Box sx={{ mb: 1.5 }}>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.75 }}>
            折扣规则
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            {pricing.discountRules.map((rule) => (
              <Box
                key={rule.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: colors.bgSecondary,
                  borderRadius: 1.5,
                  px: 1.5,
                  py: 0.75,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, color: colors.textPrimary }}>
                    {rule.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mt: 0.25 }}>
                    {rule.condition}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 1,
                    py: 0.15,
                    borderRadius: 0.75,
                    backgroundColor: `${colors.success}1A`,
                    color: colors.success,
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {rule.type === 'percentage' ? `-${rule.value}%` : `-¥${rule.value}`}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Validity */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <i className="fa-solid fa-calendar" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          有效期: {pricing.effectiveStart}
          {pricing.effectiveEnd ? ` ~ ${pricing.effectiveEnd}` : ' ~ 长期有效'}
        </Typography>
      </Box>
    </ContentCard>
  );
}
