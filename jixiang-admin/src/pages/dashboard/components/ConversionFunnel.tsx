import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { colors } from '@/theme/tokens';
import ContentCard from '@/components/ui/ContentCard';

interface Props {
  data: { stage: string; count: number; rate: string }[];
}

const BAR_COLORS = ['#3B82F6', '#22C55E', '#A855F7', '#F59E0B', '#D4A853'];

export default function ConversionFunnel({ data }: Props) {
  const chartData = [...data].reverse();

  return (
    <ContentCard title="转化漏斗">
      <Box sx={{ width: '100%', height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 50, left: 0, bottom: 0 }}>
            <XAxis type="number" hide />
            <YAxis
              dataKey="stage"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.textSecondary, fontSize: 12 }}
              width={80}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: colors.surfaceElevated,
                border: `1px solid ${colors.border}`,
                borderRadius: 8,
                color: colors.textPrimary,
                fontSize: '0.8125rem',
              }}
              formatter={(value: number) => `${value.toLocaleString()}`}
              labelStyle={{ color: colors.gold, fontWeight: 600 }}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={28}>
              {chartData.map((entry, index) => (
                <Cell key={entry.stage} fill={BAR_COLORS[index % BAR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
      {/* 转化率标注 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          mt: 1,
          px: 1,
        }}
      >
        {data.map((item, i) => (
          <Box key={item.stage} sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: '0.625rem', color: colors.textTertiary, mb: 0.25 }}>
              {item.stage}
            </Typography>
            <Box
              sx={{
                width: 3,
                height: 16,
                backgroundColor: BAR_COLORS[i],
                borderRadius: 1,
                mx: 'auto',
                mb: 0.25,
              }}
            />
            <Typography sx={{ fontSize: '0.6875rem', fontWeight: 600, color: colors.textSecondary }}>
              {item.rate}
            </Typography>
          </Box>
        ))}
      </Box>
    </ContentCard>
  );
}
