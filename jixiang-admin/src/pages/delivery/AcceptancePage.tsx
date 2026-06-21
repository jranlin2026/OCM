import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import AcceptanceTable from './components/AcceptanceTable';
import { useAcceptanceCriteria } from '@/hooks/useMockData';

export default function AcceptancePage() {
  const criteria = useAcceptanceCriteria();

  return (
    <Box>
      <SectionHeader title="验收标准" />
      <AcceptanceTable data={criteria} />
    </Box>
  );
}
