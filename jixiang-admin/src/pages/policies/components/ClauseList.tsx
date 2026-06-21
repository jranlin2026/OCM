import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ContractClause } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  clauses: ContractClause[];
}

export default function ClauseList({ clauses }: Props) {
  const sorted = [...clauses].sort((a, b) => a.sortOrder - b.sortOrder);
  const [expandedClause, setExpandedClause] = useState<string | null>(null);

  const toggleClause = (id: string) => {
    setExpandedClause((prev) => (prev === id ? null : id));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {sorted.map((clause) => {
        const isExpanded = expandedClause === clause.id;
        return (
          <Box
            key={clause.id}
            sx={{
              backgroundColor: colors.bgSecondary,
              borderRadius: 2,
              border: `1px solid ${isExpanded ? colors.gold : colors.border}`,
              overflow: 'hidden',
              transition: 'border-color 0.2s ease',
            }}
          >
            {/* Clause Header */}
            <Box
              onClick={() => toggleClause(clause.id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                py: 1.25,
                cursor: 'pointer',
                '&:hover': { backgroundColor: colors.surfaceHover },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: colors.textPrimary,
                  }}
                >
                  第{clause.sortOrder}条
                </Typography>
                <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary }}>
                  {clause.title}
                </Typography>
                {clause.isRequired && (
                  <Box
                    sx={{
                      px: 1,
                      py: 0.15,
                      borderRadius: 0.75,
                      backgroundColor: `${colors.danger}1A`,
                      color: colors.danger,
                      fontSize: '0.625rem',
                      fontWeight: 600,
                    }}
                  >
                    必选
                  </Box>
                )}
              </Box>
              <i
                className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'}`}
                style={{ fontSize: '0.75rem', color: colors.textTertiary }}
              />
            </Box>

            {/* Clause Content */}
            {isExpanded && (
              <Box sx={{ px: 2, pb: 1.5 }}>
                <Box
                  sx={{
                    backgroundColor: colors.surface,
                    borderRadius: 1.5,
                    p: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.8125rem',
                      color: colors.textSecondary,
                      lineHeight: 1.7,
                    }}
                  >
                    {clause.content}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
