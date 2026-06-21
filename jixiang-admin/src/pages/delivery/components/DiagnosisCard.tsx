import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import TierTag from '@/components/ui/TierTag';
import StatusBadge from '@/components/ui/StatusBadge';
import { ServiceDiagnosis, Priority } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  diagnosis: ServiceDiagnosis;
}

const SEVERITY_LABELS: Record<Priority, string> = {
  [Priority.HIGH]: '高',
  [Priority.MEDIUM]: '中',
  [Priority.LOW]: '低',
};

const SEVERITY_COLORS: Record<Priority, string> = {
  [Priority.HIGH]: colors.danger,
  [Priority.MEDIUM]: colors.warning,
  [Priority.LOW]: colors.info,
};

export default function DiagnosisCard({ diagnosis }: Props) {
  const sevColor = SEVERITY_COLORS[diagnosis.severity];
  const sevLabel = SEVERITY_LABELS[diagnosis.severity];

  return (
    <ContentCard>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.textPrimary }}>
            {diagnosis.customerName}
          </Typography>
          <TierTag tier={diagnosis.customerTier} />
        </Box>
        <StatusBadge status={diagnosis.status} />
      </Box>

      {/* Issue Category + Severity */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Box
          sx={{
            px: 1.5,
            py: 0.25,
            borderRadius: 1,
            backgroundColor: `${colors.info}1A`,
            color: colors.info,
            fontSize: '0.6875rem',
            fontWeight: 600,
          }}
        >
          {diagnosis.issueCategory}
        </Box>
        <Box
          sx={{
            px: 1.5,
            py: 0.25,
            borderRadius: 1,
            backgroundColor: `${sevColor}1A`,
            color: sevColor,
            fontSize: '0.6875rem',
            fontWeight: 600,
          }}
        >
          严重度: {sevLabel}
        </Box>
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
        {diagnosis.description}
      </Typography>

      {/* Diagnosis + Solution */}
      <Box
        sx={{
          backgroundColor: colors.bgSecondary,
          borderRadius: 2,
          p: 1.5,
          mb: 1.5,
        }}
      >
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.5 }}>
          诊断结论
        </Typography>
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary, mb: 1 }}>
          {diagnosis.diagnosis}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: colors.gold, mb: 0.5 }}>
          解决方案
        </Typography>
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
          {diagnosis.solution}
        </Typography>
      </Box>

      {/* Service Person */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <i className="fa-solid fa-user" style={{ fontSize: '0.75rem', color: colors.textTertiary }} />
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
          服务人: {diagnosis.servicePerson}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary, ml: 'auto' }}>
          {diagnosis.createdAt}
        </Typography>
      </Box>
    </ContentCard>
  );
}
