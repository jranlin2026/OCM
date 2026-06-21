import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DeliverySOPStep } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  steps: DeliverySOPStep[];
}

export default function DeliverySOPTimeline({ steps }: Props) {
  const sortedSteps = [...steps].sort((a, b) => a.stepOrder - b.stepOrder);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (stepOrder: number) => {
    setExpanded((prev) => ({ ...prev, [stepOrder]: !prev[stepOrder] }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {sortedSteps.map((step, index) => {
        const isExpanded = expanded[step.stepOrder] ?? false;
        return (
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
                onClick={() => toggleExpand(step.stepOrder)}
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
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': { backgroundColor: colors.goldMuted },
                }}
              >
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: colors.gold }}>
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
                onClick={() => toggleExpand(step.stepOrder)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1.5,
                  mb: 1,
                  cursor: 'pointer',
                }}
              >
                <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary }}>
                  {step.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                  <i
                    className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'}`}
                    style={{ fontSize: '0.75rem', color: colors.textTertiary }}
                  />
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

              {/* 负责人 */}
              <Box sx={{ mb: 1.5 }}>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.25 }}>
                  负责人
                </Typography>
                <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
                  {step.responsibleRole}
                </Typography>
              </Box>

              {isExpanded && (
                <>
                  {/* 交付物列表 */}
                  {step.deliverables.length > 0 && (
                    <Box sx={{ mb: 1.5 }}>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.5 }}>
                        交付物：
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {step.deliverables.map((d) => (
                          <Box
                            key={d}
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
                            {d}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* 检查项 */}
                  <Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.5 }}>
                      检查项：
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      {step.checkItems.map((item, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <i
                            className="fa-solid fa-check-circle"
                            style={{ fontSize: '0.75rem', color: colors.success }}
                          />
                          <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
