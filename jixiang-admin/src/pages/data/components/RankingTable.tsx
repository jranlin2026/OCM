import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import type { RankingItem } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  items: RankingItem[];
  title?: string;
}

const RANK_COLORS: Record<number, string> = {
  1: '#D4A853',
  2: '#C0C0C0',
  3: '#CD7F32',
};

const RANK_BG_COLORS: Record<number, string> = {
  1: 'rgba(212,168,83,0.12)',
  2: 'rgba(192,192,192,0.1)',
  3: 'rgba(205,127,50,0.1)',
};

function TrendArrow({ trend }: { trend: 'up' | 'down' | 'flat' }) {
  const color = trend === 'up' ? colors.success : trend === 'down' ? colors.danger : colors.textTertiary;
  const icon = trend === 'up' ? 'fa-solid fa-arrow-up' : trend === 'down' ? 'fa-solid fa-arrow-down' : 'fa-solid fa-minus';
  return <i className={icon} style={{ color, fontSize: '0.75rem' }} />;
}

export default function RankingTable({ items, title }: Props) {
  return (
    <Box>
      {title && (
        <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary, mb: 1.5 }}>
          {title}
        </Typography>
      )}
      <TableContainer
        sx={{
          backgroundColor: colors.surface,
          borderRadius: 3,
          border: `1px solid ${colors.border}`,
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem', fontWeight: 600, borderBottom: `1px solid ${colors.border}` }}>
                排名
              </TableCell>
              <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem', fontWeight: 600, borderBottom: `1px solid ${colors.border}` }}>
                名称
              </TableCell>
              <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem', fontWeight: 600, borderBottom: `1px solid ${colors.border}` }} align="right">
                指标值
              </TableCell>
              <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem', fontWeight: 600, borderBottom: `1px solid ${colors.border}` }} align="right">
                变化率
              </TableCell>
              <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem', fontWeight: 600, borderBottom: `1px solid ${colors.border}` }} align="center">
                趋势
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              const rankColor = RANK_COLORS[item.rank];
              const rankBg = RANK_BG_COLORS[item.rank];
              const changeColor = item.change >= 0 ? colors.success : colors.danger;

              return (
                <TableRow
                  key={item.id}
                  sx={{
                    '&:hover': { backgroundColor: colors.surfaceHover },
                    '&:last-child td': { borderBottom: 'none' },
                  }}
                >
                  <TableCell
                    sx={{
                      borderBottom: `1px solid ${colors.border}`,
                      py: 1.25,
                    }}
                  >
                    {rankColor ? (
                      <Box
                        sx={{
                          width: 26,
                          height: 26,
                          borderRadius: '50%',
                          backgroundColor: rankBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: rankColor,
                          }}
                        >
                          {item.rank}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: colors.textTertiary,
                          pl: 0.5,
                        }}
                      >
                        {item.rank}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: `1px solid ${colors.border}`,
                      py: 1.25,
                    }}
                  >
                    <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, color: colors.textPrimary }}>
                      {item.name}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      borderBottom: `1px solid ${colors.border}`,
                      py: 1.25,
                    }}
                  >
                    <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.textPrimary }}>
                      {item.metric.toLocaleString()}
                    </Typography>
                    <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
                      {item.metricLabel}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      borderBottom: `1px solid ${colors.border}`,
                      py: 1.25,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: changeColor,
                      }}
                    >
                      {item.change >= 0 ? '+' : ''}{item.change}%
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: `1px solid ${colors.border}`,
                      py: 1.25,
                    }}
                  >
                    <TrendArrow trend={item.trend} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
