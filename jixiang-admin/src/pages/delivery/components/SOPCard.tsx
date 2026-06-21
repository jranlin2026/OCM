import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { DeliverySOP, SOPCategory, ContentStatus } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  sop: DeliverySOP;
  active?: boolean;
  onClick?: () => void;
}

const CATEGORY_LABELS: Record<SOPCategory, string> = {
  [SOPCategory.ONBOARDING]: '客户Onboarding',
  [SOPCategory.DIAGNOSIS]: '诊断服务',
  [SOPCategory.TRAINING]: '培训交付',
  [SOPCategory.AFTER_SALE]: '售后服务',
};

const CATEGORY_COLORS: Record<SOPCategory, string> = {
  [SOPCategory.ONBOARDING]: colors.info,
  [SOPCategory.DIAGNOSIS]: colors.warning,
  [SOPCategory.TRAINING]: colors.success,
  [SOPCategory.AFTER_SALE]: colors.danger,
};

export default function SOPCard({ sop, active = false, onClick }: Props) {
  const catColor = CATEGORY_COLORS[sop.category];
  const categoryLabel = CATEGORY_LABELS[sop.category];

  return (
    <ContentCard className={onClick ? 'cursor-pointer' : ''}>
      <Box onClick={onClick} sx={{ cursor: onClick ? 'pointer' : 'default' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary }}>
              {sop.title}
            </Typography>
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
          <StatusBadge status={sop.status === ContentStatus.PUBLISHED ? 'published' : 'draft'} />
        </Box>

        {/* Category Tag */}
        <Box
          sx={{
            display: 'inline-flex',
            px: 1.5,
            py: 0.25,
            borderRadius: 1,
            backgroundColor: `${catColor}1A`,
            color: catColor,
            fontSize: '0.6875rem',
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          {categoryLabel}
        </Box>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '0.8125rem',
            color: colors.textSecondary,
            lineHeight: 1.6,
            mb: 1.5,
          }}
        >
          {sop.description}
        </Typography>

        {/* Meta Row */}
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box>
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
              负责人
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary }}>
              {sop.responsibleRole}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
              预估天数
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary }}>
              {sop.estimatedDays}天
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
              版本
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary }}>
              {sop.version}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
              步骤数
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary }}>
              {sop.steps.length}步
            </Typography>
          </Box>
        </Box>
      </Box>
    </ContentCard>
  );
}
