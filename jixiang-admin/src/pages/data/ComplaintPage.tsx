import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SectionHeader from '@/components/ui/SectionHeader';
import ContentCard from '@/components/ui/ContentCard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useComplaintAnalysis } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

export default function ComplaintPage() {
  const analyses = useComplaintAnalysis();

  if (analyses.length === 0) {
    return (
      <Box>
        <SectionHeader title="投诉分析" />
        <Box sx={{ textAlign: 'center', py: 8, color: '#6B6B82', fontSize: '0.875rem' }}>
          暂无投诉数据
        </Box>
      </Box>
    );
  }

  const barData = analyses.map((a) => ({
    category: a.category,
    count: a.count,
  }));

  return (
    <Box>
      <SectionHeader title="投诉分析" />

      {/* 投诉分类统计 */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {analyses.map((item) => {
          const trendColor = item.trend === 'up' ? colors.danger : item.trend === 'down' ? colors.success : colors.textTertiary;
          const trendIcon = item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→';

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <ContentCard>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: colors.textPrimary, mb: 0.5 }}>
                  {item.category}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.5 }}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: colors.textPrimary }}>
                    {item.count}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
                    占比 {item.proportion}%
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: trendColor }}>
                    {trendIcon} {item.trend === 'up' ? '上升' : item.trend === 'down' ? '下降' : '持平'}
                  </Typography>
                </Box>
              </ContentCard>
            </Grid>
          );
        })}
      </Grid>

      {/* 各分类 Top Issue 详情 */}
      <ContentCard title="各类别核心问题分布">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {analyses.map((item) => (
            <Box key={item.id}>
              <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.textPrimary, mb: 1 }}>
                {item.category}
              </Typography>
              {item.topIssues.length > 0 ? (
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  {item.topIssues.map((issue, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: colors.bgSecondary,
                        borderRadius: 1.5,
                        px: 1.5,
                        py: 0.75,
                      }}
                    >
                      <Typography sx={{ fontSize: '0.75rem', color: colors.textSecondary }}>
                        {issue.issue}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: item.trend === 'up' ? colors.danger : colors.textPrimary,
                        }}
                      >
                        {issue.count}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
                  暂无细分问题数据
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </ContentCard>

      {/* 投诉分类柱状图 */}
      <Box sx={{ mt: 3 }}>
        <ContentCard title="投诉分类统计图">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis dataKey="category" tick={{ fontSize: 11, fill: colors.textTertiary }} axisLine={false} tickLine={false} />
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
              <Bar dataKey="count" fill={colors.danger} radius={[4, 4, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </ContentCard>
      </Box>
    </Box>
  );
}
