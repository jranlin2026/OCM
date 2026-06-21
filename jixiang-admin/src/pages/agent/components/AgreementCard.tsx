import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import type { AgentAgreement, AgentLevel } from '@/types';

interface Props {
  agreement: AgentAgreement;
}

const LEVEL_CONFIG: Record<AgentLevel, { label: string; color: string }> = {
  bronze: { label: '青铜', color: '#8B7355' },
  silver: { label: '白银', color: '#A0A0B8' },
  gold: { label: '黄金', color: '#F59E0B' },
  platinum: { label: '铂金', color: '#A855F7' },
  diamond: { label: '钻石', color: '#3B82F6' },
};

export default function AgreementCard({ agreement }: Props) {
  const levelCfg = LEVEL_CONFIG[agreement.level];

  return (
    <ContentCard>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Typography
          sx={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: colors.textPrimary,
          }}
        >
          {agreement.title}
        </Typography>
        <StatusBadge status={agreement.status} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
          代理: <span style={{ color: colors.textPrimary }}>{agreement.agentName}</span>
        </Typography>
        <Chip
          label={levelCfg.label}
          size="small"
          sx={{
            height: 20,
            fontSize: '0.6875rem',
            fontWeight: 600,
            color: '#FFF',
            backgroundColor: levelCfg.color,
            borderRadius: 1,
          }}
        />
        <Typography sx={{ fontSize: '0.75rem', color: colors.gold }}>
          佣金率: {agreement.commissionRate}%
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          开始: {agreement.startDate}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          结束: {agreement.endDate}
        </Typography>
      </Box>
    </ContentCard>
  );
}
