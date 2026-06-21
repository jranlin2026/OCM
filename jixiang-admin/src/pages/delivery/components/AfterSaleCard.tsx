import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import TierTag from '@/components/ui/TierTag';
import StatusBadge from '@/components/ui/StatusBadge';
import { AfterSaleRecord, Priority } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  record: AfterSaleRecord;
}

const TYPE_LABELS: Record<string, string> = {
  complaint: '投诉',
  maintenance: '维修',
  renewal: '续费',
  consultation: '咨询',
};

const TYPE_COLORS: Record<string, string> = {
  complaint: colors.danger,
  maintenance: colors.warning,
  renewal: colors.success,
  consultation: colors.info,
};

const PRIORITY_LABELS: Record<Priority, string> = {
  [Priority.HIGH]: '高',
  [Priority.MEDIUM]: '中',
  [Priority.LOW]: '低',
};

const PRIORITY_COLORS: Record<Priority, string> = {
  [Priority.HIGH]: colors.danger,
  [Priority.MEDIUM]: colors.warning,
  [Priority.LOW]: colors.info,
};

export default function AfterSaleCard({ record }: Props) {
  const typeLabel = TYPE_LABELS[record.type] || record.type;
  const typeColor = TYPE_COLORS[record.type] || colors.textTertiary;
  const priColor = PRIORITY_COLORS[record.priority];
  const priLabel = PRIORITY_LABELS[record.priority];

  return (
    <ContentCard>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary }}>
            {record.customerName}
          </Typography>
          <TierTag tier={record.customerTier} />
        </Box>
        <StatusBadge status={record.status} />
      </Box>

      {/* Type + Priority */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Box
          sx={{
            px: 1.5,
            py: 0.25,
            borderRadius: 1,
            backgroundColor: `${typeColor}1A`,
            color: typeColor,
            fontSize: '0.6875rem',
            fontWeight: 600,
          }}
        >
          {typeLabel}
        </Box>
        <Box
          sx={{
            px: 1.5,
            py: 0.25,
            borderRadius: 1,
            backgroundColor: `${priColor}1A`,
            color: priColor,
            fontSize: '0.6875rem',
            fontWeight: 600,
          }}
        >
          优先级: {priLabel}
        </Box>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: colors.textPrimary,
          mb: 1,
        }}
      >
        {record.title}
      </Typography>

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

      {/* Meta Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <i className="fa-solid fa-user" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
            {record.assignee}
          </Typography>
        </Box>
        {record.responseAt && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <i className="fa-solid fa-clock" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
            <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
              响应: {record.responseAt}
            </Typography>
          </Box>
        )}
        {record.satisfaction && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`fa-solid fa-star`}
                style={{
                  fontSize: '0.75rem',
                  color: i < record.satisfaction! ? colors.warning : colors.textTertiary,
                }}
              />
            ))}
          </Box>
        )}
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary, ml: 'auto' }}>
          {record.createdAt}
        </Typography>
      </Box>
    </ContentCard>
  );
}
