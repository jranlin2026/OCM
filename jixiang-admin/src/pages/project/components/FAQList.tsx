import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { FaqItem } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  items: FaqItem[];
}

export default function FAQList({ items }: Props) {
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
        暂无匹配的常见问题
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
            {/* 问题头部 — 点击展开 */}
            <Box
              onClick={() => handleToggle(item.id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 2,
                cursor: 'pointer',
                userSelect: 'none',
                '&:hover': {
                  backgroundColor: colors.surfaceHover,
                },
              }}
            >
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  backgroundColor: colors.goldSubtle,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: colors.gold,
                  }}
                >
                  ?
                </Typography>
              </Box>
              <Typography
                sx={{
                  flex: 1,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: colors.textPrimary,
                  lineHeight: 1.4,
                }}
              >
                {item.question}
              </Typography>
              <Box
                component="span"
                sx={{
                  fontSize: '0.75rem',
                  color: colors.textTertiary,
                  transition: 'transform 0.2s ease',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                }}
              >
                ▼
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
                <Typography
                  sx={{
                    fontSize: '0.8125rem',
                    color: colors.textSecondary,
                    lineHeight: 1.7,
                    mt: 1.5,
                  }}
                >
                  {item.answer}
                </Typography>
                {item.tags.length > 0 && (
                  <Box sx={{ display: 'flex', gap: 1, mt: 1.5, flexWrap: 'wrap' }}>
                    {item.tags.map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          fontSize: '0.6875rem',
                          color: colors.textTertiary,
                          backgroundColor: colors.bgSecondary,
                          px: 1,
                          py: 0.25,
                          borderRadius: 0.75,
                        }}
                      >
                        #{tag}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
}
