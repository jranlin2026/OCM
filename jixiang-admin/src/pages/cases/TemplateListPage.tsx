import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import { useCaseTemplates } from '@/hooks/useMockData';
import TemplateCard from './components/TemplateCard';

const CATEGORY_OPTIONS = [
  { label: '全部', value: '' },
  { label: '行业案例', value: 'industry' },
  { label: '产品案例', value: 'product' },
  { label: '区域案例', value: 'region' },
  { label: '转型案例', value: 'transformation' },
];

export default function TemplateListPage() {
  const templates = useCaseTemplates();
  const [category, setCategory] = useState('');

  const filtered = useMemo(() => {
    if (!category) return templates;
    return templates.filter((t) => t.category === category);
  }, [templates, category]);

  return (
    <Box>
      <SectionHeader title="案例模板" />
      <Box sx={{ mb: 2.5 }}>
        <FilterChips options={CATEGORY_OPTIONS} value={category} onChange={setCategory} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 2.5,
        }}
      >
        {filtered.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </Box>
    </Box>
  );
}
