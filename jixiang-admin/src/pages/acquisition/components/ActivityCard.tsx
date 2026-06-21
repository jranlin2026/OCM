import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import type { OfflineActivity } from '@/types';

interface Props {
  activity: OfflineActivity;
}

function formatCurrency(val: number): string {
  return val.toLocaleString('zh-CN');
}

export default function ActivityCard({ activity }: Props) {
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
            {activity.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
            <i className="fa-solid fa-location-dot" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
            <Typography sx={{ fontSize: '0.75rem', color: colors.textSecondary }}>
              {activity.location}
            </Typography>
          </Box>
        </Box>
        <StatusBadge status={activity.status} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <i className="fa-regular fa-calendar" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
          {activity.activityDate}
        </Typography>
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
        {activity.description}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Box>
          <Typography sx={{ fontSize: '0.625rem', color: colors.textTertiary, mb: 0.25 }}>
            预算
          </Typography>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
            ¥{formatCurrency(activity.budget)}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '0.625rem', color: colors.textTertiary, mb: 0.25 }}>
            实际花费
          </Typography>
          <Typography sx={{ fontSize: '0.8125rem', color: activity.actualCost > 0 ? colors.textPrimary : colors.textTertiary, fontWeight: 500 }}>
            ¥{activity.actualCost > 0 ? formatCurrency(activity.actualCost) : '-'}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '0.625rem', color: colors.textTertiary, mb: 0.25 }}>
            联系人
          </Typography>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
            {activity.contacts}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '0.625rem', color: colors.textTertiary, mb: 0.25 }}>
            线索
          </Typography>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.gold, fontWeight: 600 }}>
            {activity.leads}
          </Typography>
        </Box>
      </Box>

      <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mt: 1 }}>
        负责人: {activity.responsiblePerson}
      </Typography>
    </ContentCard>
  );
}
