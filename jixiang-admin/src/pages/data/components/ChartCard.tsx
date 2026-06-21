import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { ChartData } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  chart: ChartData;
}

export default function ChartCard({ chart }: Props) {
  const data = chart.labels.map((label, i) => {
    const point: Record<string, string | number> = { name: label };
    chart.datasets.forEach((ds) => {
      point[ds.name] = ds.values[i] ?? 0;
    });
    return point;
  });

  const renderChart = () => {
    switch (chart.type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: colors.textTertiary }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: colors.textTertiary }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: colors.surfaceElevated,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 8,
                  color: colors.textPrimary,
                  fontSize: '0.8125rem',
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: '0.75rem', color: colors.textSecondary }}
              />
              {chart.datasets.map((ds) => (
                <Line
                  key={ds.name}
                  type="monotone"
                  dataKey={ds.name}
                  stroke={ds.color}
                  strokeWidth={2}
                  dot={{ r: 3, fill: ds.color }}
                  activeDot={{ r: 5 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: colors.textTertiary }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: colors.textTertiary }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: colors.surfaceElevated,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 8,
                  color: colors.textPrimary,
                  fontSize: '0.8125rem',
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: '0.75rem', color: colors.textSecondary }}
              />
              {chart.datasets.map((ds) => (
                <Bar key={ds.name} dataKey={ds.name} fill={ds.color} radius={[4, 4, 0, 0]} barSize={24} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );

      case 'funnel':
        return (
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: colors.textTertiary }} axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: colors.textSecondary }} axisLine={false} tickLine={false} width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: colors.surfaceElevated,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 8,
                  color: colors.textPrimary,
                  fontSize: '0.8125rem',
                }}
              />
              {chart.datasets.map((ds) => (
                <Bar key={ds.name} dataKey={ds.name} fill={ds.color} radius={[0, 4, 4, 0]} barSize={28} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <Typography sx={{ color: colors.textTertiary, fontSize: '0.8125rem', textAlign: 'center', py: 6 }}>
            暂不支持此图表类型
          </Typography>
        );
    }
  };

  return (
    <ContentCard title={chart.title}>
      {renderChart()}
    </ContentCard>
  );
}
