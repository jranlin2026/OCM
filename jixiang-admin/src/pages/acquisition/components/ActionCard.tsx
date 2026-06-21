import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCard from '@/components/ui/ContentCard';
import { colors } from '@/theme/tokens';
import type { DailyAction, TaskStatus } from '@/types';

interface Props {
  action: DailyAction;
}

const CHANNEL_LABELS: Record<string, string> = {
  short_video: '短视频',
  live: '直播',
  private_domain: '私域',
  offline: '地推',
};

const STATUS_CONFIG: Record<TaskStatus, { label: string; color: string }> = {
  not_started: { label: '未开始', color: '#6B6B82' },
  in_progress: { label: '进行中', color: '#3B82F6' },
  completed: { label: '已完成', color: '#22C55E' },
  overdue: { label: '已逾期', color: '#EF4444' },
};

export default function ActionCard({ action }: Props) {
  const stCfg = STATUS_CONFIG[action.status];

  return (
    <ContentCard>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap' }}>
        <Chip
          label={CHANNEL_LABELS[action.channel] || action.channel}
          size="small"
          sx={{
            height: 22,
            fontSize: '0.6875rem',
            fontWeight: 600,
            color: colors.gold,
            backgroundColor: colors.goldSubtle,
            borderRadius: 1,
          }}
        />
        <Chip
          label={stCfg.label}
          size="small"
          sx={{
            height: 22,
            fontSize: '0.6875rem',
            fontWeight: 600,
            color: '#FFF',
            backgroundColor: stCfg.color,
            borderRadius: 1,
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: colors.textPrimary,
          mb: 0.5,
        }}
      >
        {action.title}
      </Typography>
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
        {action.description}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          负责人: {action.assignee}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          截止: {action.deadline}
        </Typography>
      </Box>
      {action.result && (
        <Typography
          sx={{
            mt: 1,
            fontSize: '0.75rem',
            color: colors.success,
            backgroundColor: `${colors.success}1A`,
            px: 1,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          结果: {action.result}
        </Typography>
      )}
    </ContentCard>
  );
}
