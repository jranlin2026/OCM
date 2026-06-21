import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { OrderRecord } from '@/types';
import { formatCurrency, formatDate } from '@/utils/formatters';
import { STATUS_COLORS } from '@/utils/colors';
import { colors } from '@/theme/tokens';
import ContentCard from '@/components/ui/ContentCard';

interface Props {
  orders: OrderRecord[];
}

const STATUS_LABELS: Record<string, string> = {
  pending: '待处理',
  confirmed: '已确认',
  delivered: '已交付',
  completed: '已完成',
};

export default function RecentOrders({ orders }: Props) {
  return (
    <ContentCard title="最近订单">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem' }}>订单号</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem' }}>客户</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem' }}>产品</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem' }}>金额</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem' }}>状态</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem' }}>时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const statusColor = STATUS_COLORS[order.status] || '#6B6B82';
              return (
                <TableRow key={order.id} sx={{ '&:hover': { backgroundColor: colors.surfaceHover } }}>
                  <TableCell sx={{ fontSize: '0.75rem', color: colors.textSecondary }}>{order.id}</TableCell>
                  <TableCell sx={{ fontSize: '0.8125rem', fontWeight: 500 }}>{order.customerName}</TableCell>
                  <TableCell sx={{ fontSize: '0.8125rem' }}>{order.productName}</TableCell>
                  <TableCell sx={{ fontSize: '0.8125rem', fontWeight: 600 }}>{formatCurrency(order.amount)}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1,
                        py: 0.25,
                        borderRadius: 0.5,
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        color: statusColor,
                        backgroundColor: `${statusColor}1A`,
                      }}
                    >
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: statusColor }} />
                      {STATUS_LABELS[order.status] || order.status}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
                    {formatDate(order.createdAt, 'MM-DD')}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentCard>
  );
}
