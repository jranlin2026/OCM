import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import FunnelChart from './components/FunnelChart';
import { useDataFunnels } from '@/hooks/useMockData';

const FUNNEL_OPTIONS = [
  { label: '全部漏斗', value: 'all' },
];

export default function FunnelPage() {
  const [filter, setFilter] = useState('all');
  const funnels = useDataFunnels();

  const filtered = filter === 'all'
    ? funnels
    : funnels.filter((f) => f.id === filter);

  return (
    <Box>
      <SectionHeader
        title="转化漏斗分析"
        action={
          <FilterChips options={FUNNEL_OPTIONS} value={filter} onChange={setFilter} />
        }
      />

      {filtered.length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            color: '#6B6B82',
            fontSize: '0.875rem',
          }}
        >
          暂无漏斗数据
        </Box>
      ) : (
        <Grid container spacing={2}>
          {filtered.map((funnel) => (
            <Grid item xs={12} md={6} key={funnel.id}>
              <FunnelChart funnel={funnel} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
