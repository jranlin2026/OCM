import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Script, ScriptCategory } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  script: Script;
}

const CATEGORY_LABELS: Record<string, string> = {
  [ScriptCategory.LIVE]: '直播',
  [ScriptCategory.CHAT]: '私信',
  [ScriptCategory.PHONE]: '电话',
  [ScriptCategory.MOMENTS]: '朋友圈',
  [ScriptCategory.OFFLINE]: '地推',
};

export default function ScriptCard({ script }: Props) {
  const [expanded, setExpanded] = useState(false);
  const previewContent = script.content.length > 100
    ? script.content.slice(0, 100) + '…'
    : script.content;

  return (
    <Box
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${expanded ? colors.borderGold : colors.border}`,
        overflow: 'hidden',
        transition: 'all 0.2s ease',
      }}
    >
      <Box sx={{ p: 2.5 }}>
        {/* 头部 */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
          <Typography
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: colors.textPrimary,
              lineHeight: 1.4,
              flex: 1,
              mr: 1,
            }}
          >
            {script.title}
          </Typography>
          <Box
            sx={{
              px: 1,
              py: 0.25,
              borderRadius: 0.75,
              backgroundColor: `${colors.gold}1A`,
              color: colors.gold,
              fontSize: '0.6875rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {CATEGORY_LABELS[script.category] || script.category}
          </Box>
        </Box>

        {/* 内容预览/全文 */}
        <Typography
          sx={{
            fontSize: '0.8125rem',
            color: colors.textSecondary,
            lineHeight: 1.6,
            mb: 1.5,
          }}
        >
          {expanded ? script.content : previewContent}
        </Typography>

        {/* 标签 */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
          {script.tags.map((tag) => (
            <Box
              key={tag}
              sx={{
                fontSize: '0.6875rem',
                color: colors.textTertiary,
                backgroundColor: colors.bgSecondary,
                px: 1,
                py: 0.25,
                borderRadius: 0.75,
              }}
            >
              #{tag}
            </Box>
          ))}
        </Box>

        {/* 底部信息 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 1,
            borderTop: `1px solid ${colors.divider}`,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <i className="fa-solid fa-eye" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
              {script.viewCount.toLocaleString()} 次阅读
            </Typography>
          </Box>
          <Box
            onClick={() => setExpanded((prev) => !prev)}
            sx={{
              fontSize: '0.75rem',
              color: colors.gold,
              cursor: 'pointer',
              fontWeight: 500,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {expanded ? '收起全文' : '查看全文'}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
