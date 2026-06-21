import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SOPStep } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  steps: SOPStep[];
}

export default function SOPTimeline({ steps }: Props) {
  const sortedSteps = [...steps].sort((a, b) => a.stepOrder - b.stepOrder);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {sortedSteps.map((step, index) => (
        <Box
          key={step.stepOrder}
          sx={{
            display: 'flex',
            gap: 2.5,
            position: 'relative',
            pb: index < sortedSteps.length - 1 ? 3 : 0,
          }}
        >
          {/* 左侧步骤编号圆点 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 40,
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: colors.goldSubtle,
                border: `2px solid ${colors.gold}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: colors.gold,
                }}
              >
                {step.stepOrder}
              </Typography>
            </Box>
            {index < sortedSteps.length - 1 && (
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
            }}
          >
            {/* 标题 + 时长 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1.5,
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: colors.textPrimary,
                }}
              >
                {step.title}
              </Typography>
              <Box
                sx={{
                  px: 1.5,
                  py: 0.25,
                  borderRadius: 1,
                  backgroundColor: `${colors.info}1A`,
                  color: colors.info,
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                ⏱ {step.duration}
              </Box>
            </Box>

            {/* 描述 */}
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

            {/* 资源列表 */}
            {step.resources.length > 0 && (
              <Box sx={{ mb: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: colors.gold,
                    mb: 0.5,
                  }}
                >
                  使用资源：
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {step.resources.map((resource) => (
                    <Box
                      key={resource}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1,
                        py: 0.25,
                        borderRadius: 0.75,
                        backgroundColor: colors.bgSecondary,
                        fontSize: '0.6875rem',
                        color: colors.textTertiary,
                      }}
                    >
                      <i className="fa-solid fa-file-lines" style={{ fontSize: '0.625rem' }} />
                      {resource}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* 检查项 */}
            <Box>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: colors.gold,
                  mb: 0.5,
                }}
              >
                检查项：
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {step.checkItems.map((item, i) => (
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
        </Box>
      ))}
    </Box>
  );
}
