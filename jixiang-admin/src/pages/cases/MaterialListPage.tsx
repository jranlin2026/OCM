import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import { useMaterials } from '@/hooks/useMockData';
import MaterialGrid from './components/MaterialGrid';

const TYPE_OPTIONS = [
  { label: '全部类型', value: '' },
  { label: '图片', value: 'image' },
  { label: '视频', value: 'video' },
  { label: '文档', value: 'document' },
  { label: '音频', value: 'audio' },
  { label: '截图', value: 'screenshot' },
];

export default function MaterialListPage() {
  const materials = useMaterials();
  const [typeFilter, setTypeFilter] = useState('');

  const filtered = useMemo(() => {
    if (!typeFilter) return materials;
    return materials.filter((m) => m.type === typeFilter);
  }, [materials, typeFilter]);

  return (
    <Box>
      <SectionHeader title="素材收集" />
      <Box sx={{ mb: 2.5 }}>
        <FilterChips options={TYPE_OPTIONS} value={typeFilter} onChange={setTypeFilter} />
      </Box>
      <MaterialGrid materials={filtered} />
    </Box>
  );
}
