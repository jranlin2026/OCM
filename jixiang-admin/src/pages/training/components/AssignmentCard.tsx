import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StudentAssignment } from '@/types';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import { formatDate } from '@/utils/formatters';

interface Props {
  assignment: StudentAssignment;
}

export default function AssignmentCard({ assignment }: Props) {
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
      {/* Header: Student + Course + Camp */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: colors.goldSubtle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <i className="fa-solid fa-user-graduate" style={{ fontSize: '0.875rem', color: colors.gold }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: colors.textPrimary }}>
            {assignment.studentName}
          </Typography>
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
            {assignment.courseTitle}
          </Typography>
        </Box>
        <StatusBadge status={assignment.status} size="small" />
      </Box>

      {/* Camp */}
      <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 1 }}>
        训练营：{assignment.campTitle}
      </Typography>

      {/* Title */}
      <Typography
        sx={{
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: colors.textPrimary,
          mb: 0.75,
        }}
      >
        {assignment.title}
      </Typography>

      {/* Content preview */}
      <Typography
        sx={{
          fontSize: '0.75rem',
          color: colors.textSecondary,
          lineHeight: 1.5,
          mb: 1.5,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {assignment.content}
      </Typography>

      {/* Submitted time */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
        <i className="fa-solid fa-clock" style={{ fontSize: '0.625rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
          提交于 {formatDate(assignment.submittedAt)}
        </Typography>
      </Box>

      {/* Score + Comment */}
      {assignment.score !== undefined && (
        <Box
          sx={{
            backgroundColor: colors.bgSecondary,
            borderRadius: 2,
            p: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold }}>
              评分：{assignment.score}
            </Typography>
          </Box>
          {assignment.comment && (
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, lineHeight: 1.5 }}>
              批注：{assignment.comment}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}
