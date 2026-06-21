import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ProductTier } from '@/types';
import { getTierColor } from '@/utils/colors';
import { colors } from '@/theme/tokens';
import ContentCard from '@/components/ui/ContentCard';
import { useComparisons } from '@/hooks/useMockData';

export default function BenefitComparison() {
  const data = useComparisons();

  return (
    <ContentCard>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {data.headers.map((header, i) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    color: i === 0 ? colors.textSecondary : '#FFFFFF',
                    backgroundColor: i === 0 ? 'transparent' : `${getTierColor(
                      [ProductTier.STANDARD, ProductTier.AGENT, ProductTier.OEM, ProductTier.PARTNER][i - 1]
                    )}33`,
                    borderBottom: `2px solid ${getTierColor(
                      [ProductTier.STANDARD, ProductTier.AGENT, ProductTier.OEM, ProductTier.PARTNER][i - 1]
                    )}`,
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.rows.map((row) => (
              <TableRow
                key={row.feature}
                sx={{
                  '&:hover': { backgroundColor: colors.surfaceHover },
                  '&:last-child td': { borderBottom: 'none' },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: colors.textPrimary,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.feature}
                </TableCell>
                {row.values.map((val, i) => (
                  <TableCell
                    key={`${row.feature}-${i}`}
                    sx={{
                      fontSize: '0.8125rem',
                      color: val.startsWith('✓') ? colors.success : val.startsWith('✕') ? colors.textTertiary : colors.textPrimary,
                      fontWeight: val.startsWith('✓') ? 600 : 400,
                    }}
                  >
                    {val}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentCard>
  );
}
