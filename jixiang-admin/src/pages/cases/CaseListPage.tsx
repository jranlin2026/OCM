import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import { useCaseStudies } from '@/hooks/useMockData';
import { CaseStudy } from '@/types';
import CaseCard from './components/CaseCard';
import CaseDetailModal from './components/CaseDetailModal';

const CATEGORY_OPTIONS = [
  { label: '全部', value: '' },
  { label: '行业案例', value: 'industry' },
  { label: '产品案例', value: 'product' },
  { label: '区域案例', value: 'region' },
  { label: '转型案例', value: 'transformation' },
];

export default function CaseListPage() {
  const caseStudies = useCaseStudies();
  const [category, setCategory] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!category) return caseStudies;
    return caseStudies.filter((item) => item.category === category);
  }, [caseStudies, category]);

  const handleOpenDetail = (caseItem: CaseStudy) => {
    setSelectedCase(caseItem);
    setDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
    setSelectedCase(null);
  };

  return (
    <Box>
      <SectionHeader title="案例库" />
      <Box sx={{ mb: 2.5 }}>
        <FilterChips options={CATEGORY_OPTIONS} value={category} onChange={setCategory} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 2.5,
        }}
      >
        {filtered.map((caseItem) => (
          <CaseCard
            key={caseItem.id}
            caseItem={caseItem}
            onClick={() => handleOpenDetail(caseItem)}
          />
        ))}
      </Box>
      <CaseDetailModal
        caseItem={selectedCase}
        open={detailOpen}
        onClose={handleCloseDetail}
      />
    </Box>
  );
}
