import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import { useTrainingCamps } from '@/hooks/useMockData';
import CampCard from './components/CampCard';

const STATUS_OPTIONS = [
  { label: '全部', value: '' },
  { label: '未开始', value: 'not_started' },
  { label: '进行中', value: 'in_progress' },
  { label: '已结束', value: 'completed' },
  { label: '已过期', value: 'expired' },
];

export default function CampListPage() {
  const camps = useTrainingCamps();
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = useMemo(() => {
    if (!statusFilter) return camps;
    return camps.filter((camp) => camp.status === statusFilter);
  }, [camps, statusFilter]);

  return (
    <Box>
      <SectionHeader title="训练营" />
      <Box sx={{ mb: 2.5 }}>
        <FilterChips options={STATUS_OPTIONS} value={statusFilter} onChange={setStatusFilter} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 2.5,
        }}
      >
        {filtered.map((camp) => (
          <CampCard key={camp.id} camp={camp} />
        ))}
      </Box>
    </Box>
  );
}
