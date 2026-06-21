import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import RefundPolicyCard from './components/RefundPolicyCard';
import { useRefundPolicies } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

export default function RefundPolicyPage() {
  const policies = useRefundPolicies();

  return (
    <Box>
      <SectionHeader title="退款政策" />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {policies.map((policy) => (
          <RefundPolicyCard key={policy.id} policy={policy} />
        ))}
      </Box>

      {policies.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            color: colors.textTertiary,
            fontSize: '0.875rem',
          }}
        >
          暂无退款政策
        </Box>
      )}
    </Box>
  );
}
