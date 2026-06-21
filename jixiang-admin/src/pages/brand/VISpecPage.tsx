import { useState } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import VISpecCard from './components/VISpecCard';
import { useVISpecs } from '@/hooks/useMockData';

const CATEGORY_OPTIONS = [
  { label: '全部', value: 'all' },
  { label: 'Logo', value: 'logo' },
  { label: '色彩', value: 'color' },
  { label: '字体', value: 'typography' },
  { label: '图标', value: 'icon' },
  { label: '图库', value: 'imagery' },
];

export default function VISpecPage() {
  const [filter, setFilter] = useState('all');
  const specs = useVISpecs();

  const filtered = filter === 'all'
    ? specs
    : specs.filter((s) => s.category === filter);

  return (
    <Box>
      <SectionHeader title="VI规范" />
      <Box sx={{ mb: 2.5 }}>
        <FilterChips options={CATEGORY_OPTIONS} value={filter} onChange={setFilter} />
      </Box>
      {filtered.length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            color: '#6B6B82',
            fontSize: '0.875rem',
          }}
        >
          暂无符合条件的VI规范
        </Box>
      ) : (
        filtered.map((spec) => <VISpecCard key={spec.id} spec={spec} />)
      )}
    </Box>
  );
}
