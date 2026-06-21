import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MaterialCollection } from '@/types';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';

interface Props {
  materials: MaterialCollection[];
}

const TYPE_ICONS: Record<string, string> = {
  image: 'fa-solid fa-image',
  video: 'fa-solid fa-video',
  document: 'fa-solid fa-file-lines',
  audio: 'fa-solid fa-headphones',
  screenshot: 'fa-solid fa-camera',
};

const TYPE_LABELS: Record<string, string> = {
  image: '图片',
  video: '视频',
  document: '文档',
  audio: '音频',
  screenshot: '截图',
};

function formatFileSize(size: number): string {
  if (size >= 1024) return `${(size / 1024).toFixed(1)}GB`;
  return `${size}MB`;
}

export default function MaterialGrid({ materials }: Props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 2,
      }}
    >
      {materials.map((material) => (
        <Box
          key={material.id}
          sx={{
            backgroundColor: colors.surface,
            borderRadius: 3,
            border: `1px solid ${colors.border}`,
            overflow: 'hidden',
            transition: 'all 0.2s ease',
            '&:hover': { borderColor: colors.borderStrong },
          }}
        >
          {/* Type Icon Area */}
          <Box
            sx={{
              height: 100,
              backgroundColor: colors.bgSecondary,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: `1px solid ${colors.border}`,
              gap: 0.5,
            }}
          >
            <i
              className={TYPE_ICONS[material.type] || 'fa-solid fa-file'}
              style={{ fontSize: '1.5rem', color: colors.gold }}
            />
            <Typography
              sx={{
                fontSize: '0.6875rem',
                color: colors.textTertiary,
              }}
            >
              {TYPE_LABELS[material.type] || material.type}
            </Typography>
          </Box>

          <Box sx={{ p: 1.5 }}>
            <Typography
              sx={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: colors.textPrimary,
                mb: 0.75,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {material.title}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.75 }}>
              <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
                {formatFileSize(material.fileSize)}
              </Typography>
              <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
                {material.source}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <StatusBadge status={material.status} size="small" />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
