import Grid from '@mui/material/Grid';
import StatsCard from '@/components/ui/StatsCard';

interface StatItem {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}

interface Props {
  stats: StatItem[];
}

export default function KPIStatsRow({ stats }: Props) {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {stats.map((stat, idx) => (
        <Grid item xs={6} sm={3} key={idx}>
          <StatsCard
            label={stat.label}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
            color={stat.color}
          />
        </Grid>
      ))}
    </Grid>
  );
}
