import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import ContractCard from './components/ContractCard';
import ClauseList from './components/ClauseList';
import { useContractTemplates } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

export default function ContractTemplatePage() {
  const templates = useContractTemplates();
  const [search, setSearch] = useState('');
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        t.title.includes(q) ||
        t.category.includes(q)
      );
    });
  }, [templates, search]);

  const toggleExpand = (id: string) => {
    setExpandedTemplate((prev) => (prev === id ? null : id));
  };

  return (
    <Box>
      <SectionHeader title="合同模板" />

      {/* Search */}
      <Box sx={{ mb: 2.5 }}>
        <SearchInput
          placeholder="搜索合同模板..."
          value={search}
          onChange={setSearch}
        />
      </Box>

      {/* Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filtered.map((template) => (
          <Box key={template.id}>
            <ContractCard
              template={template}
              active={expandedTemplate === template.id}
              onClick={() => toggleExpand(template.id)}
            />
            {expandedTemplate === template.id && (
              <Box
                sx={{
                  mt: 2,
                  pl: { xs: 0, sm: 4 },
                  backgroundColor: colors.bgSecondary,
                  borderRadius: 3,
                  p: 2.5,
                }}
              >
                <ClauseList clauses={template.clauses} />
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {filtered.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            color: colors.textTertiary,
            fontSize: '0.875rem',
          }}
        >
          暂无匹配的合同模板
        </Box>
      )}
    </Box>
  );
}
