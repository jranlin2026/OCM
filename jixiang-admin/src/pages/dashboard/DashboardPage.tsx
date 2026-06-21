import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import { useDashboardData } from '@/hooks/useMockData';
import KPIRow from './components/KPIRow';
import RevenueChart from './components/RevenueChart';
import ConversionFunnel from './components/ConversionFunnel';
import RecentOrders from './components/RecentOrders';
import TodoList from './components/TodoList';

export default function DashboardPage() {
  const data = useDashboardData();

  return (
    <Box>
      <SectionHeader title="数据驾驶舱" />

      {/* KPI 指标行 */}
      <Box sx={{ mb: 3 }}>
        <KPIRow kpis={data.kpis} />
      </Box>

      {/* 收入趋势 + 转化漏斗 */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={7}>
          <RevenueChart data={data.revenue} />
        </Grid>
        <Grid item xs={12} md={5}>
          <ConversionFunnel data={data.funnel} />
        </Grid>
      </Grid>

      {/* 最近订单 + 今日待办 */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <RecentOrders orders={data.orders} />
        </Grid>
        <Grid item xs={12} md={5}>
          <TodoList todos={data.todos} />
        </Grid>
      </Grid>
    </Box>
  );
}
