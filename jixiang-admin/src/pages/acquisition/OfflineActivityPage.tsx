import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import { useOfflineActivities } from '@/hooks/useMockData';
import ActivityCard from './components/ActivityCard';

export default function OfflineActivityPage() {
  const activities = useOfflineActivities();

  return (
    <Box>
      <SectionHeader title="地推活动" />
      <Grid container spacing={2}>
        {activities.map((act) => (
          <Grid item xs={12} sm={6} md={4} key={act.id}>
            <ActivityCard activity={act} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
