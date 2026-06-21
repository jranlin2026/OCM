import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CourseChapter } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  chapters: CourseChapter[];
}

export default function ChapterList({ chapters }: Props) {
  return (
    <Box>
      {chapters.map((chapter, idx) => (
        <Box
          key={chapter.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 1,
            px: 1.5,
            borderBottom: idx < chapters.length - 1 ? `1px solid ${colors.divider}` : 'none',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                backgroundColor: chapter.isPreview ? colors.goldSubtle : colors.bgSecondary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: chapter.isPreview ? colors.gold : colors.textTertiary,
                }}
              >
                {chapter.sortOrder}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: '0.8125rem',
                color: colors.textPrimary,
              }}
            >
              {chapter.title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {chapter.isPreview && (
              <Typography
                sx={{
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  color: colors.gold,
                  backgroundColor: colors.goldSubtle,
                  px: 0.75,
                  py: 0.25,
                  borderRadius: 0.5,
                }}
              >
                试看
              </Typography>
            )}
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
              {chapter.duration}分钟
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
