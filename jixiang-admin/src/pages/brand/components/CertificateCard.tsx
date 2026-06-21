import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import type { BrandCertificate } from '@/types';
import { colors } from '@/theme/tokens';

const TYPE_LABELS: Record<string, string> = {
  trademark: '商标',
  copyright: '著作权',
  license: '许可证',
  certification: '认证',
  patent: '专利',
};

const TYPE_COLORS: Record<string, string> = {
  trademark: '#3B82F6',
  copyright: '#22C55E',
  license: '#F59E0B',
  certification: '#A855F7',
  patent: '#EC4899',
};

interface Props {
  certificate: BrandCertificate;
}

export default function CertificateCard({ certificate }: Props) {
  const typeColor = TYPE_COLORS[certificate.type] || '#6B6B82';

  return (
    <ContentCard className="mb-4">
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: colors.textPrimary }}>
              {certificate.title}
            </Typography>
            <Chip
              label={TYPE_LABELS[certificate.type] || certificate.type}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: '#FFFFFF',
                backgroundColor: typeColor,
                borderRadius: 1,
                '& .MuiChip-label': { px: 1 },
              }}
            />
            <StatusBadge status={certificate.status} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
        <Box>
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
            证书编号
          </Typography>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
            {certificate.certNumber}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
            发证机构
          </Typography>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
            {certificate.issuer}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
            发证日期
          </Typography>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
            {certificate.issueDate}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
            有效期
          </Typography>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
            {certificate.expireDate || '长期有效'}
          </Typography>
        </Box>
      </Box>

      {certificate.remark && (
        <Box
          sx={{
            mt: 1.5,
            backgroundColor: colors.goldSubtle,
            borderRadius: 1,
            px: 1.5,
            py: 0.75,
          }}
        >
          <Typography sx={{ fontSize: '0.75rem', color: colors.gold }}>
            {certificate.remark}
          </Typography>
        </Box>
      )}
    </ContentCard>
  );
}
