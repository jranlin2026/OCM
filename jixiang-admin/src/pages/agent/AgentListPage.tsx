import Box from '@mui/material/Box';
import { useState, useMemo } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import { useAgentList } from '@/hooks/useMockData';
import AgentTable from './components/AgentTable';

export default function AgentListPage() {
  const agents = useAgentList();
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      agents.filter(
        (a) =>
          a.name.includes(search) || a.phone.includes(search) || a.region.includes(search),
      ),
    [agents, search],
  );

  return (
    <Box>
      <SectionHeader
        title="代理商列表"
        action={<SearchInput placeholder="搜索代理商..." value={search} onChange={setSearch} />}
      />
      <AgentTable agents={filtered} />
    </Box>
  );
}
