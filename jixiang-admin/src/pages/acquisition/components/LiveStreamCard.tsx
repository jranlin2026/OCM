import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import type { LiveStreamPlan } from '@/types';

interface Props {
  plan: LiveStreamPlan;
}

export default function LiveStreamCard({ plan }: Props) {
  return (
    <ContentCard>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
        <Box>
          <Typography
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: colors.textPrimary,
            }}
          >
            {plan.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
            <Chip
              label={plan.platform}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: colors.gold,
                backgroundColor: colors.goldSubtle,
                borderRadius: 1,
              }}
            />
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
              {plan.host}
            </Typography>
          </Box>
        </Box>
        <StatusBadge status={plan.status} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <i className="fa-regular fa-calendar" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
          {plan.scheduledAt} · {plan.duration}分钟
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, flexWrap: 'wrap' }}>
        <Metric label="峰值观众" value={plan.peakViewers} />
        <Metric label="总观众" value={plan.totalViewers} />
        <Metric label="新增粉丝" value={plan.newFollowers} />
        <Metric label="线索" value={plan.leads} accent />
      </Box>

      {plan.remark && (
        <Typography
          sx={{
            mt: 1,
            fontSize: '0.75rem',
            color: colors.textTertiary,
            fontStyle: 'italic',
          }}
        >
          {plan.remark}
        </Typography>
      )}
    </ContentCard>
  );
}

function Metric({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        sx={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: accent ? colors.gold : colors.textPrimary,
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
