import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Course, TrainingType } from '@/types';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';

interface Props {
  course: Course;
}

const TYPE_LABELS: Record<TrainingType, string> = {
  [TrainingType.VIDEO]: '视频',
  [TrainingType.LIVE]: '直播',
  [TrainingType.DOCUMENT]: '文档',
  [TrainingType.QUIZ]: '测验',
};

const TYPE_COLORS: Record<TrainingType, string> = {
  [TrainingType.VIDEO]: '#3B82F6',
  [TrainingType.LIVE]: '#A855F7',
  [TrainingType.DOCUMENT]: '#22C55E',
  [TrainingType.QUIZ]: '#F59E0B',
};

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <i key={`full-${i}`} className="fa-solid fa-star" style={{ fontSize: '0.625rem', color: colors.gold }} />
    );
  }
  if (half) {
    stars.push(
      <i key="half" className="fa-solid fa-star-half-stroke" style={{ fontSize: '0.625rem', color: colors.gold }} />
    );
  }
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) {
    stars.push(
      <i key={`empty-${i}`} className="fa-regular fa-star" style={{ fontSize: '0.625rem', color: colors.textTertiary }} />
    );
  }
  return stars;
}

export default function CourseCard({ course }: Props) {
  const typeColor = TYPE_COLORS[course.type];

  return (
    <Box
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        '&:hover': { borderColor: colors.borderStrong },
      }}
    >
      {/* Header area */}
      <Box
        sx={{
          height: 100,
          backgroundColor: colors.bgSecondary,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: `1px solid ${colors.border}`,
          gap: 0.5,
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
            backgroundColor: `${typeColor}1A`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i
            className={
              course.type === TrainingType.VIDEO
                ? 'fa-solid fa-video'
                : course.type === TrainingType.LIVE
                ? 'fa-solid fa-broadcast-tower'
                : course.type === TrainingType.DOCUMENT
                ? 'fa-solid fa-file-lines'
                : 'fa-solid fa-question'
            }
            style={{ fontSize: '1.125rem', color: typeColor }}
          />
        </Box>
        <Chip
          label={TYPE_LABELS[course.type]}
          size="small"
          sx={{
            height: 20,
            fontSize: '0.625rem',
            fontWeight: 600,
            color: typeColor,
            backgroundColor: `${typeColor}1A`,
            borderRadius: 1,
            '& .MuiChip-label': { px: 0.75 },
          }}
        />
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: colors.textPrimary,
            mb: 0.75,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {course.title}
        </Typography>

        {/* Meta info */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <i className="fa-solid fa-user" style={{ fontSize: '0.625rem', color: colors.textTertiary }} />
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
              {course.instructor}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <i className="fa-solid fa-clock" style={{ fontSize: '0.625rem', color: colors.textTertiary }} />
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
              {course.duration}分钟
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <i className="fa-solid fa-layer-group" style={{ fontSize: '0.625rem', color: colors.textTertiary }} />
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
              {course.chapters.length}章节
            </Typography>
          </Box>
        </Box>

        {/* Enrolled + Completion + Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <i className="fa-solid fa-users" style={{ fontSize: '0.625rem', color: colors.textTertiary }} />
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
              {course.enrolledCount}人
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textSecondary }}>
            完成率 {course.completionRate}%
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.25 }}>
            {renderStars(course.rating)}
          </Box>
        </Box>

        {/* Status */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <StatusBadge status={course.status} size="small" />
        </Box>
      </Box>
    </Box>
  );
}
