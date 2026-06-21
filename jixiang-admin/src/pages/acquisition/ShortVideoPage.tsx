import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useMemo } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import { useShortVideoPlans } from '@/hooks/useMockData';
import VideoPlanCard from './components/VideoPlanCard';

const PLATFORM_OPTIONS = [
  { label: '全部', value: '' },
  { label: '抖音', value: 'douyin' },
  { label: '快手', value: 'kuaishou' },
  { label: '视频号', value: 'shipinhao' },
];

export default function ShortVideoPage() {
  const plans = useShortVideoPlans();
  const [search, setSearch] = useState('');
  const [platform, setPlatform] = useState('');

  const filtered = useMemo(
    () =>
      plans.filter((p) => {
        const matchSearch = !search || p.title.includes(search);
        const matchPlatform = !platform || p.platform === platform;
        return matchSearch && matchPlatform;
      }),
    [plans, search, platform],
  );

  return (
    <Box>
      <SectionHeader
        title="短视频获客"
        action={<SearchInput placeholder="搜索视频..." value={search} onChange={setSearch} />}
      />
      <Box sx={{ mb: 2 }}>
        <FilterChips options={PLATFORM_OPTIONS} value={platform} onChange={setPlatform} />
      </Box>
      <Grid container spacing={2}>
        {filtered.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <VideoPlanCard plan={plan} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
