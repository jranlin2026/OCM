import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import DiagnosisCard from './components/DiagnosisCard';
import { useServiceDiagnoses } from '@/hooks/useMockData';
import { Priority } from '@/types';
import { colors } from '@/theme/tokens';

const SEVERITY_FILTERS = [
  { label: '全部', value: 'all' },
  { label: '高严重度', value: Priority.HIGH },
  { label: '中严重度', value: Priority.MEDIUM },
  { label: '低严重度', value: Priority.LOW },
];

export default function DiagnosisListPage() {
  const diagnoses = useServiceDiagnoses();
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');

  const filtered = useMemo(() => {
    return diagnoses.filter((d) => {
      const matchSearch = !search || d.customerName.includes(search) || d.issueCategory.includes(search) || d.description.includes(search);
      const matchSeverity = severityFilter === 'all' || d.severity === severityFilter;
      return matchSearch && matchSeverity;
    });
  }, [diagnoses, search, severityFilter]);

  return (
    <Box>
      <SectionHeader title="服务诊断" />

      {/* Search + Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap', alignItems: 'center' }}>
        <SearchInput
          placeholder="搜索客户名、问题类别..."
          value={search}
          onChange={setSearch}
        />
        <FilterChips
          options={SEVERITY_FILTERS}
          value={severityFilter}
          onChange={setSeverityFilter}
        />
      </Box>

      {/* Diagnosis Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filtered.map((d) => (
          <DiagnosisCard key={d.id} diagnosis={d} />
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
          暂无匹配的服务诊断记录
        </Box>
      )}
    </Box>
  );
}
