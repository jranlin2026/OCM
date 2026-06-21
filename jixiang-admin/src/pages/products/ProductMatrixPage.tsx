import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import { useProducts } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';
import ProductList from './components/ProductList';
import BenefitComparison from './components/BenefitComparison';
import ProductDemo from './components/ProductDemo';
import DeliveryChecklist from './components/DeliveryChecklist';

const TAB_LABELS = ['产品列表', '权益对比', '产品演示', '交付清单'];

export default function ProductMatrixPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const [search, setSearch] = useState('');
  const products = useProducts();

  const filteredProducts = products.filter(
    (p) => !search || p.name.includes(search) || p.description.includes(search)
  );

  return (
    <Box>
      <SectionHeader
        title="产品矩阵中心"
        action={
          tabIndex === 0 && (
            <SearchInput
              placeholder="搜索产品..."
              value={search}
              onChange={setSearch}
            />
          )
        }
      />

      {/* Tabs */}
      <Box
        sx={{
          borderBottom: `1px solid ${colors.border}`,
          mb: 3,
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={(_, v) => setTabIndex(v)}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              color: colors.textSecondary,
              px: 3,
              minHeight: 44,
              '&.Mui-selected': {
                color: colors.gold,
                fontWeight: 600,
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: colors.gold,
              height: 2,
            },
          }}
        >
          {TAB_LABELS.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Box>

      {/* Tab 内容 */}
      {tabIndex === 0 && <ProductList products={filteredProducts} />}
      {tabIndex === 1 && <BenefitComparison />}
      {tabIndex === 2 && <ProductDemo />}
      {tabIndex === 3 && <DeliveryChecklist />}
    </Box>
  );
}
