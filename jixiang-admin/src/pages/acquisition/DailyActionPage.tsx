import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useMemo } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useDailyActions } from '@/hooks/useMockData';
import ActionCard from './components/ActionCard';
import KPIStatsRow from './components/KPIStatsRow';

export default function DailyActionPage() {
  const actions = useDailyActions();

  const stats = useMemo(() => {
    const total = actions.length;
    const inProgress = actions.filter((a) => a.status === 'in_progress').length;
    const completed = actions.filter((a) => a.status === 'completed').length;
    const overdue = actions.filter((a) => a.status === 'overdue').length;
    return [
      { label: '待办事项', value: String(total), change: '+0', trend: 'up' as const, icon: 'fa-solid fa-list-check', color: '#3B82F6' },
      { label: '进行中', value: String(inProgress), change: '+0', trend: 'up' as const, icon: 'fa-solid fa-spinner', color: '#F59E0B' },
      { label: '已完成', value: String(completed), change: '+0', trend: 'up' as const, icon: 'fa-solid fa-circle-check', color: '#22C55E' },
      { label: '已逾期', value: String(overdue), change: '+0', trend: 'down' as const, icon: 'fa-solid fa-circle-exclamation', color: '#EF4444' },
    ];
  }, [actions]);

  return (
    <Box>
      <SectionHeader title="每日动作" />
      <KPIStatsRow stats={stats} />
      <Grid container spacing={2}>
        {actions.map((action) => (
          <Grid item xs={12} sm={6} md={4} key={action.id}>
            <ActionCard action={action} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
