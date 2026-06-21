import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import type { CommissionSettlement } from '@/types';

interface Props {
  settlements: CommissionSettlement[];
}

function formatCurrency(val: number): string {
  return val.toLocaleString('zh-CN');
}

export default function SettlementTable({ settlements }: Props) {
  return (
    <TableContainer
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {['结算周期', '代理商', '总金额', '佣金', '费率', '订单数', '状态', '打款时间'].map((h) => (
              <TableCell
                key={h}
                sx={{
                  color: colors.textSecondary,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  borderBottom: `1px solid ${colors.divider}`,
                  py: 1.5,
                }}
              >
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {settlements.map((s) => (
            <TableRow
              key={s.id}
              sx={{
                '&:hover': { backgroundColor: colors.surfaceHover },
                '& td': { borderBottom: `1px solid ${colors.divider}`, py: 1.25 },
              }}
            >
              <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>
                {s.period}
              </TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>
                {s.agentName}
              </TableCell>
              <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem' }}>
                ¥{formatCurrency(s.totalAmount)}
              </TableCell>
              <TableCell sx={{ color: colors.gold, fontSize: '0.8125rem', fontWeight: 600 }}>
                ¥{formatCurrency(s.commissionAmount)}
              </TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>
                {s.rate}%
              </TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>
                {s.orderCount}
              </TableCell>
              <TableCell>
                <StatusBadge status={s.status} />
              </TableCell>
              <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem' }}>
                {s.paidAt || '-'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
