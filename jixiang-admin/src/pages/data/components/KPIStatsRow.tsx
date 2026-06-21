import Grid from '@mui/material/Grid';
import StatsCard from '@/components/ui/StatsCard';
import type { KPIItem } from '@/types';

interface Props {
  items: KPIItem[];
}

export default function KPIStatsRow({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {items.map((kpi, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <StatsCard
            label={kpi.label}
            value={`${kpi.value.toLocaleString()}${kpi.suffix || ''}`}
            change={`${kpi.change > 0 ? '+' : ''}${kpi.change}%`}
            trend={kpi.trend}
            icon={kpi.icon}
            color={kpi.color}
          />
        </Grid>
      ))}
    </Grid>
  );
}
