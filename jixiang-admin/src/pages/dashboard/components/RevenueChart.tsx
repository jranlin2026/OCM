import Box from '@mui/material/Box';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { colors } from '@/theme/tokens';
import ContentCard from '@/components/ui/ContentCard';

interface Props {
  data: { month: string; revenue: number; orders: number }[];
}

export default function RevenueChart({ data }: Props) {
  const chartData = data.map((d) => ({
    month: d.month.slice(5),
    revenue: Math.round(d.revenue / 10000),
    orders: d.orders,
  }));

  return (
    <ContentCard title="收入趋势" subtitle="2024年度（单位：万元）">
      <Box sx={{ width: '100%', height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.gold} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.gold} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.border} vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.textTertiary, fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.textTertiary, fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: colors.surfaceElevated,
                border: `1px solid ${colors.border}`,
                borderRadius: 8,
                color: colors.textPrimary,
                fontSize: '0.8125rem',
              }}
              labelStyle={{ color: colors.gold, fontWeight: 600 }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={colors.gold}
              strokeWidth={2}
              fill="url(#revenueGradient)"
              dot={{ fill: colors.gold, r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: colors.goldHover, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </ContentCard>
  );
}
