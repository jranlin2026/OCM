import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { ComplianceRecord } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  record: ComplianceRecord;
}

const CATEGORY_LABELS: Record<string, string> = {
  contract: '合同',
  data_privacy: '数据隐私',
  advertising: '广告',
  tax: '税务',
};

const CATEGORY_COLORS: Record<string, string> = {
  contract: colors.info,
  data_privacy: colors.danger,
  advertising: colors.warning,
  tax: colors.success,
};

export default function ComplianceCard({ record }: Props) {
  const catColor = CATEGORY_COLORS[record.category] || colors.textTertiary;
  const catLabel = CATEGORY_LABELS[record.category] || record.category;

  return (
    <ContentCard>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary }}>
          {record.title}
        </Typography>
        <StatusBadge status={record.status} />
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
        {catLabel}
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
        {record.description}
      </Typography>

      {/* Requirement */}
      <Box
        sx={{
          backgroundColor: colors.bgSecondary,
          borderRadius: 2,
          p: 1.5,
          mb: 1.5,
        }}
      >
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.5 }}>
          合规要求
        </Typography>
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
          {record.requirement}
        </Typography>
      </Box>

      {/* Meta Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <i className="fa-solid fa-calendar" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
            截止: {record.deadline}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <i className="fa-solid fa-user" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
            {record.responsiblePerson}
          </Typography>
        </Box>
        {record.remark && (
          <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary, ml: 'auto' }}>
            {record.remark}
          </Typography>
        )}
      </Box>
    </ContentCard>
  );
}
