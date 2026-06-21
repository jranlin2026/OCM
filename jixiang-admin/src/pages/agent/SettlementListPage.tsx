import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import { useSettlements } from '@/hooks/useMockData';
import SettlementTable from './components/SettlementTable';

export default function SettlementListPage() {
  const settlements = useSettlements();

  return (
    <Box>
      <SectionHeader title="佣金结算" />
      <SettlementTable settlements={settlements} />
    </Box>
  );
}
