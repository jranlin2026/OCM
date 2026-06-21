import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import type { AgentPolicy } from '@/types';

interface Props {
  policy: AgentPolicy;
}

const CATEGORY_CONFIG: Record<string, { label: string; color: string }> = {
  level: { label: '等级', color: '#3B82F6' },
  commission: { label: '佣金', color: '#22C55E' },
  training: { label: '培训', color: '#A855F7' },
  reward: { label: '奖励', color: '#F59E0B' },
};

export default function PolicyCard({ policy }: Props) {
  const catCfg = CATEGORY_CONFIG[policy.category] || { label: policy.category, color: '#6B6B82' };

  return (
    <ContentCard>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Chip
          label={catCfg.label}
          size="small"
          sx={{
            height: 22,
            fontSize: '0.6875rem',
            fontWeight: 600,
            color: '#FFFFFF',
            backgroundColor: catCfg.color,
            borderRadius: 1,
          }}
        />
        <StatusBadge status={policy.status} />
      </Box>
      <Typography
        sx={{
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: colors.textPrimary,
          mb: 0.75,
        }}
      >
        {policy.title}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.8125rem',
          color: colors.textSecondary,
          lineHeight: 1.6,
          mb: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {policy.content}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          生效: {policy.effectiveDate}
        </Typography>
        {policy.expireDate && (
          <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
            截止: {policy.expireDate}
          </Typography>
        )}
      </Box>
    </ContentCard>
  );
}
