import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import ScriptCard from './components/ScriptCard';
import { useScripts } from '@/hooks/useMockData';
import { ScriptCategory } from '@/types';

const CATEGORY_LABELS: Record<ScriptCategory, string> = {
  [ScriptCategory.LIVE]: '直播',
  [ScriptCategory.CHAT]: '私信',
  [ScriptCategory.PHONE]: '电话',
  [ScriptCategory.MOMENTS]: '朋友圈',
  [ScriptCategory.OFFLINE]: '地推',
};

const SCENE_OPTIONS = [
  { label: '全部场景', value: '' },
  ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({ label, value })),
];

export default function ScriptsPage() {
  const scripts = useScripts();
  const [search, setSearch] = useState('');
  const [scene, setScene] = useState('');

  const filtered = useMemo(() => {
    return scripts.filter((item) => {
      const matchSearch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase());
      const matchScene = !scene || item.category === scene;
      return matchSearch && matchScene;
    });
  }, [scripts, search, scene]);

  return (
    <Box>
      <SectionHeader title="话术库" />
      <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap' }}>
        <SearchInput placeholder="搜索话术..." value={search} onChange={setSearch} />
        <FilterChips options={SCENE_OPTIONS} value={scene} onChange={setScene} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
        }}
      >
        {filtered.map((script) => (
          <ScriptCard key={script.id} script={script} />
        ))}
      </Box>
      {filtered.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            color: '#6B6B82',
            fontSize: '0.875rem',
          }}
        >
          暂无匹配的话术
        </Box>
      )}
    </Box>
  );
}
