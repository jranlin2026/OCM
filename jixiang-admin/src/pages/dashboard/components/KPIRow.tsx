import Grid from '@mui/material/Grid';
import StatsCard from '@/components/ui/StatsCard';
import { KPIItem } from '@/types';

interface Props {
  kpis: KPIItem[];
}

export default function KPIRow({ kpis }: Props) {
  return (
    <Grid container spacing={2}>
      {kpis.map((kpi) => (
        <Grid item xs={12} sm={6} md={3} key={kpi.label}>
          <StatsCard
            label={kpi.label}
            value={kpi.suffix ? `${kpi.value.toLocaleString()}${kpi.suffix}` : kpi.value.toLocaleString()}
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
