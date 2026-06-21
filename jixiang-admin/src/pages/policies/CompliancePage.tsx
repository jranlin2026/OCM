import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import ComplianceCard from './components/ComplianceCard';
import { useComplianceRecords } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

const CATEGORY_FILTERS = [
  { label: '全部', value: 'all' },
  { label: '合同', value: 'contract' },
  { label: '数据隐私', value: 'data_privacy' },
  { label: '广告', value: 'advertising' },
  { label: '税务', value: 'tax' },
];

export default function CompliancePage() {
  const records = useComplianceRecords();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filtered = useMemo(() => {
    return records.filter((r) => {
      const matchSearch = !search || r.title.includes(search) || r.description.includes(search) || r.responsiblePerson.includes(search);
      const matchCategory = categoryFilter === 'all' || r.category === categoryFilter;
      return matchSearch && matchCategory;
    });
  }, [records, search, categoryFilter]);

  return (
    <Box>
      <SectionHeader title="合规管理" />

      {/* Search + Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap', alignItems: 'center' }}>
        <SearchInput
          placeholder="搜索标题、责任人..."
          value={search}
          onChange={setSearch}
        />
        <FilterChips
          options={CATEGORY_FILTERS}
          value={categoryFilter}
          onChange={setCategoryFilter}
        />
      </Box>

      {/* Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filtered.map((r) => (
          <ComplianceCard key={r.id} record={r} />
        ))}
      </Box>

      {filtered.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            color: colors.textTertiary,
            fontSize: '0.875rem',
          }}
        >
          暂无匹配的合规记录
        </Box>
      )}
    </Box>
  );
}
