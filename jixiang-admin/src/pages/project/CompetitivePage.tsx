import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import ContentCard from '@/components/ui/ContentCard';
import ComparisonTable from './components/ComparisonTable';
import { useCompetitors } from '@/hooks/useMockData';

export default function CompetitivePage() {
  const competitors = useCompetitors();

  return (
    <Box>
      <SectionHeader title="竞品对比分析" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {competitors.map((competitor) => (
          <ContentCard key={competitor.id} title={competitor.name} subtitle={competitor.description}>
            <ComparisonTable features={competitor.features} />
          </ContentCard>
        ))}
      </Box>
    </Box>
  );
}
