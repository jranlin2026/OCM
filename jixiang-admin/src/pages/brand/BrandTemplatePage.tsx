import { useState } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import BrandTemplateCard from './components/BrandTemplateCard';
import { useBrandTemplates } from '@/hooks/useMockData';

const CATEGORY_OPTIONS = [
  { label: '全部', value: 'all' },
  { label: '社交媒体', value: 'social_media' },
  { label: '演示文稿', value: 'presentation' },
  { label: '文档', value: 'document' },
  { label: '邮件', value: 'email' },
  { label: '广告', value: 'ad' },
];

export default function BrandTemplatePage() {
  const [filter, setFilter] = useState('all');
  const templates = useBrandTemplates();

  const filtered = filter === 'all'
    ? templates
    : templates.filter((t) => t.category === filter);

  return (
    <Box>
      <SectionHeader title="品牌模板" />
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
          暂无符合条件的品牌模板
        </Box>
      ) : (
        filtered.map((template) => (
          <BrandTemplateCard key={template.id} template={template} />
        ))
      )}
    </Box>
  );
}
