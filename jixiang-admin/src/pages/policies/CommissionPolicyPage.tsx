import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import CommissionRateTable from './components/CommissionRateTable';
import { useCommissionPolicies } from '@/hooks/useMockData';

export default function CommissionPolicyPage() {
  const policies = useCommissionPolicies();

  return (
    <Box>
      <SectionHeader title="佣金政策" />
      <CommissionRateTable data={policies} />
    </Box>
  );
}
