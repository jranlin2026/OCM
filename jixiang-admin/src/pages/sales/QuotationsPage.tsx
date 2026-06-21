import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import SectionHeader from '@/components/ui/SectionHeader';
import ContentCard from '@/components/ui/ContentCard';
import TierTag from '@/components/ui/TierTag';
import { useQuotations } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

export default function QuotationsPage() {
  const quotations = useQuotations();

  const formatAmount = (amount: number) => {
    if (amount >= 10000) {
      return `¥${(amount / 10000).toFixed(1)}万`;
    }
    return `¥${amount.toLocaleString()}`;
  };

  return (
    <Box>
      <SectionHeader title="报价方案" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {quotations.map((quotation) => (
          <ContentCard key={quotation.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <TierTag tier={quotation.targetTier} size="medium" />
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: colors.textPrimary,
                }}
              >
                {quotation.title}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: '0.8125rem',
                color: colors.textSecondary,
                mb: 2,
                lineHeight: 1.5,
              }}
            >
              {quotation.description}
            </Typography>

            <TableContainer>
              <Table size="small">
                <TableBody>
                  {quotation.items.map((item) => (
                    <TableRow
                      key={item.name}
                      sx={{
                        '&:last-child td': { borderBottom: 'none' },
                      }}
                    >
                      <TableCell
                        sx={{
                          color: colors.textPrimary,
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          borderBottom: `1px solid ${colors.divider}`,
                          py: 1,
                          width: '25%',
                        }}
                      >
                        {item.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: colors.textSecondary,
                          fontSize: '0.75rem',
                          borderBottom: `1px solid ${colors.divider}`,
                          py: 1,
                          width: '45%',
                        }}
                      >
                        {item.description}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: colors.textPrimary,
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          borderBottom: `1px solid ${colors.divider}`,
                          py: 1,
                          textAlign: 'right',
                          width: '30%',
                        }}
                      >
                        {item.amount === 0 ? (
                          <Box
                            component="span"
                            sx={{
                              color: colors.success,
                              fontSize: '0.75rem',
                              fontWeight: 600,
                            }}
                          >
                            免费赠送
                          </Box>
                        ) : (
                          `${formatAmount(item.amount)}`
                        )}
                        {item.amount > 0 && (
                          <Typography
                            component="span"
                            sx={{
                              fontSize: '0.6875rem',
                              color: colors.textTertiary,
                              ml: 0.5,
                            }}
                          >
                            {item.unit}
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 1,
                mt: 1.5,
                pt: 1.5,
                borderTop: `1px solid ${colors.divider}`,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.8125rem',
                  color: colors.textTertiary,
                }}
              >
                合计：
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: colors.gold,
                }}
              >
                {formatAmount(quotation.totalAmount)}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  color: colors.textTertiary,
                }}
              >
                /年
              </Typography>
            </Box>
          </ContentCard>
        ))}
      </Box>
    </Box>
  );
}
