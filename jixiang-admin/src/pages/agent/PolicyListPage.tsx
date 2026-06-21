import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useMemo } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import { useAgentPolicies } from '@/hooks/useMockData';
import PolicyCard from './components/PolicyCard';

const CATEGORY_OPTIONS = [
  { label: '全部', value: '' },
  { label: '等级', value: 'level' },
  { label: '佣金', value: 'commission' },
  { label: '培训', value: 'training' },
  { label: '奖励', value: 'reward' },
];

export default function PolicyListPage() {
  const policies = useAgentPolicies();
  const [category, setCategory] = useState('');

  const filtered = useMemo(
    () => (category ? policies.filter((p) => p.category === category) : policies),
    [policies, category],
  );

  return (
    <Box>
      <SectionHeader title="政策管理" />
      <Box sx={{ mb: 2 }}>
        <FilterChips options={CATEGORY_OPTIONS} value={category} onChange={setCategory} />
      </Box>
      <Grid container spacing={2}>
        {filtered.map((policy) => (
          <Grid item xs={12} sm={6} md={4} key={policy.id}>
            <PolicyCard policy={policy} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
