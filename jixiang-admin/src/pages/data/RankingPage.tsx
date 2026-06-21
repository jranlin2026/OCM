import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeader from '@/components/ui/SectionHeader';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RankingTable from './components/RankingTable';
import { useRankings } from '@/hooks/useMockData';
import type { RankingItem } from '@/types';
import { colors } from '@/theme/tokens';

const TAB_OPTIONS = [
  { label: '销售额排行', value: 'sales' },
  { label: '佣金排行', value: 'commission' },
  { label: '引流排行', value: 'leads' },
];

export default function RankingPage() {
  const [tab, setTab] = useState(0);
  const rankings = useRankings();

  const currentKey = TAB_OPTIONS[tab]?.value || 'sales';
  const currentData: RankingItem[] = (rankings[currentKey as keyof typeof rankings] || []) as RankingItem[];

  return (
    <Box>
      <SectionHeader title="排名榜" />

      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{
          mb: 2.5,
          minHeight: 36,
          '& .MuiTabs-indicator': { backgroundColor: colors.gold },
          '& .MuiTab-root': {
            minHeight: 36,
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: colors.textTertiary,
            textTransform: 'none',
            px: 2,
            '&.Mui-selected': { color: colors.gold },
          },
        }}
      >
        {TAB_OPTIONS.map((opt) => (
          <Tab key={opt.value} label={opt.label} />
        ))}
      </Tabs>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RankingTable
            items={currentData}
            title={TAB_OPTIONS[tab]?.label}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
