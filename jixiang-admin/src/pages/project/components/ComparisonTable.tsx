import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CompetitorFeature } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  features: CompetitorFeature[];
}

export default function ComparisonTable({ features }: Props) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: colors.textSecondary,
                fontSize: '0.75rem',
                fontWeight: 600,
                borderBottom: `1px solid ${colors.divider}`,
                width: '25%',
              }}
            >
              特性类别
            </TableCell>
            <TableCell
              sx={{
                color: colors.textSecondary,
                fontSize: '0.75rem',
                fontWeight: 600,
                borderBottom: `1px solid ${colors.divider}`,
                width: '30%',
              }}
            >
              极享AI
            </TableCell>
            <TableCell
              sx={{
                color: colors.textSecondary,
                fontSize: '0.75rem',
                fontWeight: 600,
                borderBottom: `1px solid ${colors.divider}`,
                width: '30%',
              }}
            >
              竞品
            </TableCell>
            <TableCell
              sx={{
                color: colors.textSecondary,
                fontSize: '0.75rem',
                fontWeight: 600,
                borderBottom: `1px solid ${colors.divider}`,
                width: '15%',
              }}
            >
              优劣
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {features.map((feature) => (
            <TableRow
              key={feature.category}
              sx={{
                '&:nth-of-type(odd)': {
                  backgroundColor: 'rgba(255,255,255,0.02)',
                },
              }}
            >
              <TableCell
                sx={{
                  color: colors.textPrimary,
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  borderBottom: `1px solid ${colors.divider}`,
                  py: 1.25,
                }}
              >
                {feature.category}
              </TableCell>
              <TableCell
                sx={{
                  color: feature.isAdvantage ? colors.success : colors.textSecondary,
                  fontSize: '0.8125rem',
                  borderBottom: `1px solid ${colors.divider}`,
                  py: 1.25,
                }}
              >
                {feature.isAdvantage && (
                  <Box component="span" sx={{ mr: 0.5 }}>
                    ✓
                  </Box>
                )}
                {feature.ourValue}
              </TableCell>
              <TableCell
                sx={{
                  color: colors.textSecondary,
                  fontSize: '0.8125rem',
                  borderBottom: `1px solid ${colors.divider}`,
                  py: 1.25,
                }}
              >
                {feature.isAdvantage ? (
                  <Box component="span" sx={{ color: colors.danger, mr: 0.5 }}>
                    ✗
                  </Box>
                ) : (
                  <Box component="span" sx={{ color: colors.warning, mr: 0.5 }}>
                    ▲
                  </Box>
                )}
                {feature.competitorValue}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: `1px solid ${colors.divider}`,
                  py: 1.25,
                }}
              >
                {feature.isAdvantage ? (
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                      backgroundColor: `${colors.success}1A`,
                      color: colors.success,
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                    }}
                  >
                    ✓ 优势
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                      backgroundColor: `${colors.warning}1A`,
                      color: colors.warning,
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                    }}
                  >
                    △ 待改进
                  </Box>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
