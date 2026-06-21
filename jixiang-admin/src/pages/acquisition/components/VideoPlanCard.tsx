import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import type { ShortVideoPlan } from '@/types';

interface Props {
  plan: ShortVideoPlan;
}

const PLATFORM_LABELS: Record<string, string> = {
  douyin: '抖音',
  kuaishou: '快手',
  shipinhao: '视频号',
};

export default function VideoPlanCard({ plan }: Props) {
  return (
    <ContentCard>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: colors.textPrimary,
            }}
          >
            {plan.title}
          </Typography>
          <Chip
            label={PLATFORM_LABELS[plan.platform] || plan.platform}
            size="small"
            sx={{
              height: 20,
              fontSize: '0.6875rem',
              fontWeight: 600,
              color: '#FFF',
              backgroundColor: '#1DA1F2',
              borderRadius: 1,
            }}
          />
        </Box>
        <StatusBadge status={plan.status} />
      </Box>

      <Typography
        sx={{
          fontSize: '0.8125rem',
          color: colors.textSecondary,
          mb: 1.5,
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {plan.script}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <MetricBadge label="播放" value={plan.views} />
        <MetricBadge label="点赞" value={plan.likes} />
        <MetricBadge label="评论" value={plan.comments} />
        <MetricBadge label="分享" value={plan.shares} />
        <MetricBadge label="线索" value={plan.leads} color={colors.gold} />
      </Box>
    </ContentCard>
  );
}

function MetricBadge({ label, value, color: textColor }: { label: string; value: number; color?: string }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        sx={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: textColor || colors.textPrimary,
        }}
      >
        {value.toLocaleString()}
      </Typography>
      <Typography sx={{ fontSize: '0.625rem', color: colors.textTertiary, mt: -0.25 }}>
        {label}
      </Typography>
    </Box>
  );
}
