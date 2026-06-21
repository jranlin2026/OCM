import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import KPIStatsRow from './components/KPIStatsRow';
import ChartCard from './components/ChartCard';
import { useOperationDashboards } from '@/hooks/useMockData';

const PERIOD_OPTIONS = [
  { label: '本月', value: 'month' },
  { label: '本季度', value: 'quarter' },
  { label: '本年', value: 'year' },
];

export default function DataDashboardPage() {
  const [period, setPeriod] = useState('month');
  const dashboards = useOperationDashboards();

  const dashboard = dashboards[0];

  if (!dashboard) {
    return (
      <Box>
        <SectionHeader title="运营总览" />
        <Box sx={{ textAlign: 'center', py: 8, color: '#6B6B82', fontSize: '0.875rem' }}>
          暂无运营数据
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <SectionHeader
        title="运营总览"
        action={
          <FilterChips options={PERIOD_OPTIONS} value={period} onChange={setPeriod} />
        }
      />

      {dashboard.kpis.length > 0 && <KPIStatsRow items={dashboard.kpis} />}

      {dashboard.charts.length > 0 && (
        <Grid container spacing={2}>
          {dashboard.charts.map((chart) => (
            <Grid item xs={12} md={chart.type === 'pie' ? 6 : 6} key={chart.id}>
              <ChartCard chart={chart} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
