import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import { useGrowthPaths } from '@/hooks/useMockData';
import GrowthTimeline from './components/GrowthTimeline';

export default function GrowthPathPage() {
  const paths = useGrowthPaths();

  return (
    <Box>
      <SectionHeader title="成长路径" />
      <GrowthTimeline paths={paths} />
    </Box>
  );
}
