import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { colors } from '@/theme/tokens';
import type { GrowthPath } from '@/types';

interface Props {
  paths: GrowthPath[];
}

export default function GrowthTimeline({ paths }: Props) {
  return (
    <Box sx={{ position: 'relative', pl: 4 }}>
      {/* 垂直线 */}
      <Box
        sx={{
          position: 'absolute',
          left: 11,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: colors.borderGold,
          opacity: 0.4,
        }}
      />
      {paths.map((path, idx) => (
        <Box key={path.id} sx={{ position: 'relative', pb: idx < paths.length - 1 ? 4 : 0 }}>
          {/* 圆点 */}
          <Box
            sx={{
              position: 'absolute',
              left: -29,
              top: 4,
              width: 14,
              height: 14,
              borderRadius: '50%',
              backgroundColor: colors.gold,
              border: `3px solid ${colors.bgPrimary}`,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              backgroundColor: colors.surface,
              borderRadius: 3,
              border: `1px solid ${colors.border}`,
              p: 2.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
              <Typography
                sx={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: colors.textPrimary,
                }}
              >
                {path.title}
              </Typography>
              <Chip
                label={path.estimatedDuration}
                size="small"
                sx={{
                  height: 20,
                  fontSize: '0.6875rem',
                  color: colors.gold,
                  backgroundColor: colors.goldSubtle,
                  borderRadius: 1,
                }}
              />
            </Box>

            <Box sx={{ mb: 1.5 }}>
              <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary, fontWeight: 600, mb: 0.5 }}>
                晋升要求
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {path.requirements.map((r, i) => (
                  <Box
                    key={i}
                    sx={{
                      fontSize: '0.75rem',
                      color: colors.textSecondary,
                      backgroundColor: colors.bgSecondary,
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                    }}
                  >
                    {r}
                  </Box>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary, fontWeight: 600, mb: 0.5 }}>
                晋升权益
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {path.benefits.map((b, i) => (
                  <Box
                    key={i}
                    sx={{
                      fontSize: '0.75rem',
                      color: colors.gold,
                      backgroundColor: colors.goldSubtle,
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                    }}
                  >
                    + {b}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
