import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import { useInterviews } from '@/hooks/useMockData';
import InterviewCard from './components/InterviewCard';

const STATUS_OPTIONS = [
  { label: '全部', value: '' },
  { label: '已发布', value: 'published' },
  { label: '草稿', value: 'draft' },
];

export default function InterviewListPage() {
  const interviews = useInterviews();
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = useMemo(() => {
    if (!statusFilter) return interviews;
    return interviews.filter((item) => item.status === statusFilter);
  }, [interviews, statusFilter]);

  return (
    <Box>
      <SectionHeader title="客户采访" />
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
        {filtered.map((interview) => (
          <InterviewCard key={interview.id} interview={interview} />
        ))}
      </Box>
    </Box>
  );
}
