import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import FAQList from './components/FAQList';
import { useFAQs } from '@/hooks/useMockData';

const CATEGORY_OPTIONS = [
  { label: '全部', value: '' },
  { label: '平台支持', value: '平台支持' },
  { label: '产品对比', value: '产品对比' },
  { label: '代理政策', value: '代理政策' },
  { label: '合作相关', value: '合作相关' },
];

export default function FAQPage() {
  const faqs = useFAQs();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = useMemo(() => {
    return faqs.filter((item) => {
      const matchSearch =
        !search ||
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !category || item.category === category;
      return matchSearch && matchCategory;
    });
  }, [faqs, search, category]);

  return (
    <Box>
      <SectionHeader title="常见问题管理" />
      <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap' }}>
        <SearchInput placeholder="搜索问题..." value={search} onChange={setSearch} />
        <FilterChips options={CATEGORY_OPTIONS} value={category} onChange={setCategory} />
      </Box>
      <FAQList items={filtered} />
    </Box>
  );
}
