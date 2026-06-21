import { useState } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import SOPCard from './components/SOPCard';
import DeliverySOPTimeline from './components/SOPTimeline';
import { useDeliverySOPs } from '@/hooks/useMockData';
import { SOPCategory } from '@/types';
import { colors } from '@/theme/tokens';

const CATEGORY_FILTERS = [
  { label: '全部', value: 'all' },
  { label: '客户Onboarding', value: SOPCategory.ONBOARDING },
  { label: '诊断服务', value: SOPCategory.DIAGNOSIS },
  { label: '培训交付', value: SOPCategory.TRAINING },
  { label: '售后服务', value: SOPCategory.AFTER_SALE },
];

export default function SOPListPage() {
  const sops = useDeliverySOPs();
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [expandedSOP, setExpandedSOP] = useState<string | null>(null);

  const filtered = categoryFilter === 'all'
    ? sops
    : sops.filter((s) => s.category === categoryFilter);

  const toggleExpand = (id: string) => {
    setExpandedSOP((prev) => (prev === id ? null : id));
  };

  return (
    <Box>
      <SectionHeader title="SOP管理" />

      {/* Filter */}
      <Box sx={{ mb: 2.5 }}>
        <FilterChips
          options={CATEGORY_FILTERS}
          value={categoryFilter}
          onChange={setCategoryFilter}
        />
      </Box>

      {/* SOP Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filtered.map((sop) => (
          <Box key={sop.id}>
            <SOPCard
              sop={sop}
              active={expandedSOP === sop.id}
              onClick={() => toggleExpand(sop.id)}
            />
            {expandedSOP === sop.id && (
              <Box
                sx={{
                  mt: 2,
                  pl: { xs: 0, sm: 4 },
                  backgroundColor: colors.bgSecondary,
                  borderRadius: 3,
                  p: 2.5,
                }}
              >
                <DeliverySOPTimeline steps={sop.steps} />
              </Box>
            )}
          </Box>
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
          暂无匹配的SOP记录
        </Box>
      )}
    </Box>
  );
}
