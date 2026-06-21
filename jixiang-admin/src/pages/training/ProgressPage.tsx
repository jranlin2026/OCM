import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import { useStudentProgress } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';
import ProgressTable from './components/ProgressTable';

export default function ProgressPage() {
  const progressData = useStudentProgress();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search) return progressData;
    const q = search.toLowerCase();
    return progressData.filter(
      (p) =>
        p.studentName.toLowerCase().includes(q) ||
        p.campTitle.toLowerCase().includes(q) ||
        p.courseTitle.toLowerCase().includes(q)
    );
  }, [progressData, search]);

  return (
    <Box>
      <SectionHeader title="学习进度" />
      <Box sx={{ mb: 2.5 }}>
        <SearchInput placeholder="搜索学生、训练营或课程..." value={search} onChange={setSearch} />
      </Box>
      <Box
        sx={{
          backgroundColor: colors.surface,
          borderRadius: 3,
          border: `1px solid ${colors.border}`,
          overflow: 'hidden',
        }}
      >
        <ProgressTable data={filtered} />
      </Box>
    </Box>
  );
}
