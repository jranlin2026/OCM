import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import QAList from './components/QAList';
import { useQAList } from '@/hooks/useMockData';

const SCENARIO_OPTIONS = [
  { label: '全部场景', value: '' },
  { label: '产品对比', value: '产品对比' },
  { label: '购买决策', value: '购买决策' },
  { label: '使用门槛', value: '使用门槛' },
  { label: '售后服务', value: '售后服务' },
  { label: '安全合规', value: '安全合规' },
  { label: '法律合规', value: '法律合规' },
  { label: '产品升级', value: '产品升级' },
];

export default function QAPage() {
  const qaList = useQAList();
  const [search, setSearch] = useState('');
  const [scenario, setScenario] = useState('');

  const filtered = useMemo(() => {
    return qaList.filter((item) => {
      const matchSearch =
        !search ||
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase());
      const matchScenario = !scenario || item.scenario === scenario;
      return matchSearch && matchScenario;
    });
  }, [qaList, search, scenario]);

  return (
    <Box>
      <SectionHeader title="百问百答" />
      <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap' }}>
        <SearchInput placeholder="搜索问题..." value={search} onChange={setSearch} />
        <FilterChips options={SCENARIO_OPTIONS} value={scenario} onChange={setScenario} />
      </Box>
      <QAList items={filtered} />
    </Box>
  );
}
