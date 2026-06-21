import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TrainingCamp, TrainingStatus } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  camp: TrainingCamp;
}

const STATUS_LABELS: Record<TrainingStatus, string> = {
  [TrainingStatus.NOT_STARTED]: '未开始',
  [TrainingStatus.IN_PROGRESS]: '进行中',
  [TrainingStatus.COMPLETED]: '已结束',
  [TrainingStatus.EXPIRED]: '已过期',
};

const STATUS_COLORS: Record<TrainingStatus, string> = {
  [TrainingStatus.NOT_STARTED]: '#6B6B82',
  [TrainingStatus.IN_PROGRESS]: '#22C55E',
  [TrainingStatus.COMPLETED]: '#3B82F6',
  [TrainingStatus.EXPIRED]: '#EF4444',
};

export default function CampCard({ camp }: Props) {
  const statusColor = STATUS_COLORS[camp.status];

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
      {/* Status badge */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography
          sx={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: colors.textPrimary,
            flex: 1,
            mr: 1,
          }}
        >
          {camp.title}
        </Typography>
        <Box
          sx={{
            px: 1,
            py: 0.25,
            borderRadius: 1,
            fontSize: '0.6875rem',
            fontWeight: 600,
            color: statusColor,
            backgroundColor: `${statusColor}1A`,
            whiteSpace: 'nowrap',
          }}
        >
          {STATUS_LABELS[camp.status]}
        </Box>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          fontSize: '0.75rem',
          color: colors.textSecondary,
          lineHeight: 1.5,
          mb: 1.5,
        }}
      >
        {camp.description}
      </Typography>

      {/* Date range */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
        <i className="fa-solid fa-calendar" style={{ fontSize: '0.6875rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
          {camp.startDate} ~ {camp.endDate}
        </Typography>
      </Box>

      {/* Course count */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
        <i className="fa-solid fa-book" style={{ fontSize: '0.6875rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
          {camp.courses.length} 门课程
        </Typography>
      </Box>

      {/* Enrollment */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <i className="fa-solid fa-user-group" style={{ fontSize: '0.6875rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
          报名 {camp.enrolledCount}/{camp.maxStudents} 人
        </Typography>
        <Box sx={{ flex: 1, height: 4, backgroundColor: colors.bgSecondary, borderRadius: 2, overflow: 'hidden' }}>
          <Box
            sx={{
              width: `${(camp.enrolledCount / camp.maxStudents) * 100}%`,
              height: '100%',
              backgroundColor: colors.gold,
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>

      {/* Instructor */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <i className="fa-solid fa-chalkboard-user" style={{ fontSize: '0.6875rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
          讲师：{camp.instructor}
        </Typography>
      </Box>
    </Box>
  );
}
