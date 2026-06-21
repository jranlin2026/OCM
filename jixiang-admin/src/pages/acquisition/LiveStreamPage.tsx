import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useMemo } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import { useLiveStreamPlans } from '@/hooks/useMockData';
import LiveStreamCard from './components/LiveStreamCard';

export default function LiveStreamPage() {
  const plans = useLiveStreamPlans();
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      plans.filter(
        (p) =>
          p.title.includes(search) || p.host.includes(search) || p.platform.includes(search),
      ),
    [plans, search],
  );

  return (
    <Box>
      <SectionHeader
        title="直播管理"
        action={<SearchInput placeholder="搜索直播..." value={search} onChange={setSearch} />}
      />
      <Grid container spacing={2}>
        {filtered.map((plan) => (
          <Grid item xs={12} sm={6} key={plan.id}>
            <LiveStreamCard plan={plan} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
