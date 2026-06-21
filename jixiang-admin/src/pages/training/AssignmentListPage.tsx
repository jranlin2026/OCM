import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import { useAssignments } from '@/hooks/useMockData';
import AssignmentCard from './components/AssignmentCard';

export default function AssignmentListPage() {
  const assignments = useAssignments();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search) return assignments;
    const q = search.toLowerCase();
    return assignments.filter(
      (a) =>
        a.studentName.toLowerCase().includes(q) ||
        a.title.toLowerCase().includes(q) ||
        a.courseTitle.toLowerCase().includes(q)
    );
  }, [assignments, search]);

  return (
    <Box>
      <SectionHeader title="学员作业" />
      <Box sx={{ mb: 2.5 }}>
        <SearchInput placeholder="搜索作业、学生或课程..." value={search} onChange={setSearch} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 2.5,
        }}
      >
        {filtered.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </Box>
    </Box>
  );
}
