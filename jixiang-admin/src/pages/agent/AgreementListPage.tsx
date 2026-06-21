import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useMemo } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import { useAgentAgreements } from '@/hooks/useMockData';
import AgreementCard from './components/AgreementCard';

export default function AgreementListPage() {
  const agreements = useAgentAgreements();
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      agreements.filter(
        (a) =>
          a.agentName.includes(search) ||
          a.title.includes(search),
      ),
    [agreements, search],
  );

  return (
    <Box>
      <SectionHeader
        title="代理协议"
        action={<SearchInput placeholder="搜索协议..." value={search} onChange={setSearch} />}
      />
      <Grid container spacing={2}>
        {filtered.map((agreement) => (
          <Grid item xs={12} sm={6} key={agreement.id}>
            <AgreementCard agreement={agreement} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
