import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import AfterSaleCard from './components/AfterSaleCard';
import ServiceKPIStats from './components/ServiceKPIStats';
import { useAfterSaleRecords } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

export default function AfterSaleListPage() {
  const records = useAfterSaleRecords();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return records.filter((r) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        r.customerName.includes(q) ||
        r.title.includes(q) ||
        r.assignee.includes(q) ||
        r.type.includes(q)
      );
    });
  }, [records, search]);

  const kpiItems = [
    {
      label: '总工单数',
      value: records.length,
      color: colors.info,
      icon: 'fa-solid fa-ticket',
    },
    {
      label: '已完成',
      value: records.filter((r) => r.status === 'completed').length,
      color: colors.success,
      icon: 'fa-solid fa-check-circle',
    },
    {
      label: '待处理',
      value: records.filter((r) => r.status === 'pending').length,
      color: colors.warning,
      icon: 'fa-solid fa-clock',
    },
    {
      label: '高优先级',
      value: records.filter((r) => r.priority === 'high').length,
      color: colors.danger,
      icon: 'fa-solid fa-exclamation-triangle',
    },
  ];

  return (
    <Box>
      <SectionHeader title="售后服务" />

      {/* KPI Stats */}
      <Box sx={{ mb: 3 }}>
        <ServiceKPIStats items={kpiItems} />
      </Box>

      {/* Search */}
      <Box sx={{ mb: 2.5 }}>
        <SearchInput
          placeholder="搜索客户名、工单标题..."
          value={search}
          onChange={setSearch}
        />
      </Box>

      {/* Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filtered.map((r) => (
          <AfterSaleCard key={r.id} record={r} />
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
          暂无匹配的售后服务记录
        </Box>
      )}
    </Box>
  );
}
