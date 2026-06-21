import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import PricingCard from './components/PricingCard';
import { usePricingStrategies } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

export default function PricingListPage() {
  const pricings = usePricingStrategies();

  return (
    <Box>
      <SectionHeader title="定价策略" />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2 }}>
        {pricings.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </Box>

      {pricings.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            color: colors.textTertiary,
            fontSize: '0.875rem',
          }}
        >
          暂无定价策略
        </Box>
      )}
    </Box>
  );
}
