import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import type { BrandTemplate } from '@/types';
import { colors } from '@/theme/tokens';

const CATEGORY_LABELS: Record<string, string> = {
  social_media: '社交媒体',
  presentation: '演示文稿',
  document: '文档',
  email: '邮件',
  ad: '广告',
};

const CATEGORY_COLORS: Record<string, string> = {
  social_media: '#3B82F6',
  presentation: '#22C55E',
  document: '#A855F7',
  email: '#F59E0B',
  ad: '#EC4899',
};

function formatFileSize(size: number): string {
  if (size >= 1024) return `${(size / 1024).toFixed(1)}GB`;
  if (size >= 1) return `${size.toFixed(1)}MB`;
  return `${(size * 1024).toFixed(0)}KB`;
}

interface Props {
  template: BrandTemplate;
}

export default function BrandTemplateCard({ template }: Props) {
  const catColor = CATEGORY_COLORS[template.category] || '#6B6B82';

  return (
    <ContentCard className="mb-4">
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: colors.textPrimary }}>
              {template.title}
            </Typography>
            <Chip
              label={CATEGORY_LABELS[template.category] || template.category}
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
            <StatusBadge status={template.status} />
          </Box>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.5, mb: 1 }}>
            {template.description}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          格式：{template.fileFormat.toUpperCase()}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          大小：{formatFileSize(template.fileSize)}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          用途：{template.usage}
        </Typography>
      </Box>

      {template.tags.length > 0 && (
        <Box sx={{ display: 'flex', gap: 0.5, mt: 1.5, flexWrap: 'wrap' }}>
          {template.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.6875rem',
                color: colors.textTertiary,
                backgroundColor: colors.bgSecondary,
                borderRadius: 1,
                '& .MuiChip-label': { px: 0.75 },
              }}
            />
          ))}
        </Box>
      )}
    </ContentCard>
  );
}
