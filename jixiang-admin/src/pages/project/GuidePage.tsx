import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionHeader from '@/components/ui/SectionHeader';
import { useGuides } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

export default function GuidePage() {
  const guides = useGuides();

  return (
    <Box>
      <SectionHeader title="新人启动指南" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {guides
          .sort((a, b) => a.stepOrder - b.stepOrder)
          .map((step, index) => (
          <Box
            key={step.id}
            sx={{
              display: 'flex',
              gap: 2.5,
              position: 'relative',
              pb: index < guides.length - 1 ? 3 : 0,
            }}
          >
            {/* 左侧时间线 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 48,
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: colors.goldSubtle,
                  border: `2px solid ${colors.gold}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}
              >
                <i className={step.icon} style={{ fontSize: '1.125rem', color: colors.gold }} />
              </Box>
              {index < guides.length - 1 && (
                <Box
                  sx={{
                    width: 2,
                    flex: 1,
                    backgroundColor: colors.border,
                    minHeight: 24,
                    mt: 0.5,
                  }}
                />
              )}
            </Box>

            {/* 右侧内容 */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: colors.surface,
                borderRadius: 3,
                border: `1px solid ${colors.border}`,
                p: 2.5,
                mb: 0,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: colors.gold,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: colors.textOnGold,
                    }}
                  >
                    {step.stepOrder}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: colors.textPrimary,
                  }}
                >
                  {step.title}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: '0.8125rem',
                  color: colors.textSecondary,
                  lineHeight: 1.6,
                  mb: 1.5,
                }}
              >
                {step.description}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: colors.gold,
                    mb: 0.25,
                  }}
                >
                  行动项：
                </Typography>
                {step.actionItems.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <i
                      className="fa-solid fa-check-circle"
                      style={{ fontSize: '0.75rem', color: colors.success }}
                    />
                    <Typography
                      sx={{
                        fontSize: '0.8125rem',
                        color: colors.textSecondary,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
