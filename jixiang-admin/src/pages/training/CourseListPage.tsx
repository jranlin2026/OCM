import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import { useCourses } from '@/hooks/useMockData';
import CourseCard from './components/CourseCard';

const TYPE_OPTIONS = [
  { label: '全部类型', value: '' },
  { label: '视频', value: 'video' },
  { label: '直播', value: 'live' },
  { label: '文档', value: 'document' },
  { label: '测验', value: 'quiz' },
];

export default function CourseListPage() {
  const courses = useCourses();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchSearch =
        !search ||
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase());
      const matchType = !typeFilter || course.type === typeFilter;
      return matchSearch && matchType;
    });
  }, [courses, search, typeFilter]);

  return (
    <Box>
      <SectionHeader title="课程中心" />
      <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap' }}>
        <SearchInput placeholder="搜索课程或讲师..." value={search} onChange={setSearch} />
        <FilterChips options={TYPE_OPTIONS} value={typeFilter} onChange={setTypeFilter} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 2.5,
        }}
      >
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Box>
    </Box>
  );
}
