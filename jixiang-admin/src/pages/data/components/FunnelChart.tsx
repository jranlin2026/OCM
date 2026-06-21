import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import type { DataFunnel } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  funnel: DataFunnel;
}

export default function FunnelChart({ funnel }: Props) {
  const data = funnel.stages.map((stage) => ({
    name: stage.stage,
    count: stage.count,
    rate: stage.rate,
    color: stage.color,
  }));

  return (
    <ContentCard title={funnel.name} subtitle={`周期：${funnel.period}`}>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 20, right: 40, top: 8, bottom: 8 }}
        >
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            tick={{
              fontSize: 11,
              fill: colors.textSecondary,
            }}
            axisLine={false}
            tickLine={false}
            width={140}
          />
          <Tooltip
            formatter={(value: number) => [value.toLocaleString(), '数量']}
            contentStyle={{
              backgroundColor: colors.surfaceElevated,
              border: `1px solid ${colors.border}`,
              borderRadius: 8,
              color: colors.textPrimary,
              fontSize: '0.8125rem',
            }}
          />
          <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={32} maxBarSize={40}>
            {data.map((entry, idx) => (
              <Cell key={idx} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* 数据明细 */}
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {data.map((stage, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 1.5,
              py: 1,
              backgroundColor: colors.bgSecondary,
              borderRadius: 1.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: stage.color,
                  flexShrink: 0,
                }}
              />
              <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
                {stage.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.textPrimary }}>
                {stage.count.toLocaleString()}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: colors.gold, fontWeight: 500 }}>
                {stage.rate}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </ContentCard>
  );
}
