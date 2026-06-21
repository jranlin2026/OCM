import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { SalesQA } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  items: SalesQA[];
}

export default function QAList({ items }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  if (items.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 6,
          color: colors.textTertiary,
          fontSize: '0.875rem',
        }}
      >
        暂无匹配的问答内容
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <Box
            key={item.id}
            sx={{
              backgroundColor: isExpanded ? '#252540' : colors.surface,
              borderRadius: 2,
              border: `1px solid ${isExpanded ? colors.borderGold : colors.border}`,
              overflow: 'hidden',
              transition: 'all 0.2s ease',
            }}
          >
            {/* 问题头部 */}
            <Box
              onClick={() => handleToggle(item.id)}
              sx={{
                p: 2,
                cursor: 'pointer',
                userSelect: 'none',
                '&:hover': {
                  backgroundColor: colors.surfaceHover,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    backgroundColor: `${colors.info}1A`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    mt: 0.125,
                  }}
                >
                  <Typography sx={{ fontSize: '0.6875rem', fontWeight: 700, color: colors.info }}>
                    Q
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: colors.textPrimary,
                      lineHeight: 1.4,
                      mb: 0.75,
                    }}
                  >
                    {item.question}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.25,
                        borderRadius: 0.75,
                        backgroundColor: `${colors.gold}1A`,
                        color: colors.gold,
                        fontSize: '0.625rem',
                        fontWeight: 600,
                      }}
                    >
                      {item.scenario}
                    </Box>
                    {item.keywords.slice(0, 3).map((kw) => (
                      <Box
                        key={kw}
                        sx={{
                          fontSize: '0.625rem',
                          color: colors.textTertiary,
                          backgroundColor: colors.bgSecondary,
                          px: 0.75,
                          py: 0.25,
                          borderRadius: 0.75,
                        }}
                      >
                        {kw}
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 0.25,
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: colors.info,
                    }}
                  >
                    {item.helpfulCount}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.625rem',
                      color: colors.textTertiary,
                    }}
                  >
                    有帮助
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* 答案展开区 */}
            <Collapse in={isExpanded} timeout={200}>
              <Box
                sx={{
                  px: 2,
                  pb: 2,
                  pt: 0.5,
                  borderTop: `1px solid ${colors.divider}`,
                  mx: 2,
                }}
              >
                <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5 }}>
                  <Box
                    sx={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      backgroundColor: `${colors.success}1A`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Typography sx={{ fontSize: '0.6875rem', fontWeight: 700, color: colors.success }}>
                      A
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '0.8125rem',
                      color: colors.textSecondary,
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {item.answer}
                  </Typography>
                </Box>
              </Box>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
}
