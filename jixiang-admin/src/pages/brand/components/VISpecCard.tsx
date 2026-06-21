import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ContentCard from '@/components/ui/ContentCard';
import VISpecRuleList from './VISpecRuleList';
import type { VISpec } from '@/types';
import { colors } from '@/theme/tokens';

const CATEGORY_LABELS: Record<string, string> = {
  logo: 'Logo',
  color: '色彩',
  typography: '字体',
  icon: '图标',
  imagery: '图库',
};

const CATEGORY_COLORS: Record<string, string> = {
  logo: '#3B82F6',
  color: '#A855F7',
  typography: '#22C55E',
  icon: '#F59E0B',
  imagery: '#EC4899',
};

interface Props {
  spec: VISpec;
}

export default function VISpecCard({ spec }: Props) {
  const [expanded, setExpanded] = useState(false);
  const catColor = CATEGORY_COLORS[spec.category] || '#6B6B82';

  return (
    <ContentCard className="mb-4">
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: colors.textPrimary }}>
              {spec.title}
            </Typography>
            <Chip
              label={CATEGORY_LABELS[spec.category] || spec.category}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: '#FFFFFF',
                backgroundColor: catColor,
                borderRadius: 1,
                '& .MuiChip-label': { px: 1 },
              }}
            />
          </Box>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.5 }}>
            {spec.description}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          版本：{spec.version}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          更新：{spec.updatedAt}
        </Typography>
        <Box sx={{ flex: 1 }} />
        <IconButton
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{ color: colors.textSecondary }}
        >
          <i className={`fa-solid fa-chevron-${expanded ? 'up' : 'down'}`} style={{ fontSize: '0.75rem' }} />
        </IconButton>
      </Box>

      <Collapse in={expanded}>
        {spec.rules.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.gold, mb: 1 }}>
              规范细则
            </Typography>
            <VISpecRuleList rules={spec.rules} />
          </Box>
        )}
        {spec.examples.length > 0 && (
          <Box>
            <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.gold, mb: 1 }}>
              示例展示
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              {spec.examples.map((example, idx) => (
                <Box
                  key={idx}
                  sx={{
                    backgroundColor: colors.bgSecondary,
                    borderRadius: 2,
                    border: `1px solid ${colors.border}`,
                    px: 1.5,
                    py: 1,
                  }}
                >
                  <Typography sx={{ fontSize: '0.75rem', color: colors.textSecondary }}>
                    {example.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Collapse>
    </ContentCard>
  );
}
