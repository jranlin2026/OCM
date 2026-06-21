import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@/theme/tokens';
import ContentCard from '@/components/ui/ContentCard';

export default function ProductDemo() {
  return (
    <ContentCard>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: colors.goldSubtle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i className="fa-solid fa-video" style={{ fontSize: '2rem', color: colors.gold }} />
        </Box>
        <Typography
          sx={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: colors.textPrimary,
          }}
        >
          产品演示
        </Typography>
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: colors.textTertiary,
            maxWidth: 320,
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          产品演示视频和资料正在准备中，敬请期待。您可以先查看产品列表和权益对比了解详情。
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            mt: 1,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 40,
              borderRadius: 1,
              backgroundColor: colors.surfaceHover,
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <i className="fa-solid fa-file" style={{ fontSize: '1rem', color: colors.textTertiary }} />
          </Box>
          <Box
            sx={{
              width: 60,
              height: 40,
              borderRadius: 1,
              backgroundColor: colors.surfaceHover,
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <i className="fa-solid fa-file-image" style={{ fontSize: '1rem', color: colors.textTertiary }} />
          </Box>
          <Box
            sx={{
              width: 60,
              height: 40,
              borderRadius: 1,
              backgroundColor: colors.surfaceHover,
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <i className="fa-solid fa-file-pdf" style={{ fontSize: '1rem', color: colors.textTertiary }} />
          </Box>
        </Box>
      </Box>
    </ContentCard>
  );
}
