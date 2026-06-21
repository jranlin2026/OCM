import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { ContractTemplate } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  template: ContractTemplate;
  active?: boolean;
  onClick?: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  agency: '代理合同',
  oem: 'OEM合同',
  partner: '合伙人合同',
  service: '服务合同',
};

const CATEGORY_COLORS: Record<string, string> = {
  agency: colors.info,
  oem: '#A855F7',
  partner: colors.gold,
  service: colors.success,
};

export default function ContractCard({ template, active = false, onClick }: Props) {
  const catColor = CATEGORY_COLORS[template.category] || colors.textTertiary;
  const catLabel = CATEGORY_LABELS[template.category] || template.category;

  return (
    <ContentCard>
      <Box onClick={onClick} sx={{ cursor: onClick ? 'pointer' : 'default' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary }}>
            {template.title}
          </Typography>
          <StatusBadge status={template.status} />
        </Box>

        {/* Category Tag */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
          <Box
            sx={{
              px: 1.5,
              py: 0.25,
              borderRadius: 1,
              backgroundColor: `${catColor}1A`,
              color: catColor,
              fontSize: '0.6875rem',
              fontWeight: 600,
            }}
          >
            {catLabel}
          </Box>
          {active && (
            <Box
              sx={{
                px: 1,
                py: 0.15,
                borderRadius: 1,
                backgroundColor: colors.goldSubtle,
                color: colors.gold,
                fontSize: '0.625rem',
                fontWeight: 600,
              }}
            >
              展开中
            </Box>
          )}
        </Box>

        {/* Meta Row */}
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box>
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
              版本
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
              {template.version}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
              条款数
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
              {template.clauses.length}条
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
              更新时间
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, fontWeight: 500 }}>
              {template.updatedAt}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ContentCard>
  );
}
