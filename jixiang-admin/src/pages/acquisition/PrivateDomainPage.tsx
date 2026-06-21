import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useMemo } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import { usePrivateDomainRecords } from '@/hooks/useMockData';
import PrivateDomainCard from './components/PrivateDomainCard';

const CHANNEL_OPTIONS = [
  { label: '全部', value: '' },
  { label: '微信', value: 'wechat' },
  { label: '群聊', value: 'group' },
  { label: '朋友圈', value: 'moments' },
  { label: '公众号', value: 'official_account' },
];

export default function PrivateDomainPage() {
  const records = usePrivateDomainRecords();
  const [channel, setChannel] = useState('');

  const filtered = useMemo(
    () => (channel ? records.filter((r) => r.channel === channel) : records),
    [records, channel],
  );

  return (
    <Box>
      <SectionHeader title="私域运营" />
      <Box sx={{ mb: 2 }}>
        <FilterChips options={CHANNEL_OPTIONS} value={channel} onChange={setChannel} />
      </Box>
      <Grid container spacing={2}>
        {filtered.map((record) => (
          <Grid item xs={12} sm={6} md={4} key={record.id}>
            <PrivateDomainCard record={record} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
