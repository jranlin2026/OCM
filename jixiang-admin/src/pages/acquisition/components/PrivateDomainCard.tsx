import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import type { PrivateDomainRecord } from '@/types';

interface Props {
  record: PrivateDomainRecord;
}

const CHANNEL_CONFIG: Record<string, { label: string; color: string }> = {
  wechat: { label: '微信', color: '#07C160' },
  group: { label: '群聊', color: '#3B82F6' },
  moments: { label: '朋友圈', color: '#A855F7' },
  official_account: { label: '公众号', color: '#F59E0B' },
};

export default function PrivateDomainCard({ record }: Props) {
  const chCfg = CHANNEL_CONFIG[record.channel] || { label: record.channel, color: '#6B6B82' };

  return (
    <ContentCard>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip
            label={chCfg.label}
            size="small"
            sx={{
              height: 22,
              fontSize: '0.6875rem',
              fontWeight: 600,
              color: '#FFF',
              backgroundColor: chCfg.color,
              borderRadius: 1,
            }}
          />
          <Typography
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: colors.textPrimary,
            }}
          >
            {record.title}
          </Typography>
        </Box>
        <StatusBadge status={record.status} />
      </Box>

      <Typography
        sx={{
          fontSize: '0.8125rem',
          color: colors.textSecondary,
          mb: 1.5,
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {record.content}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <MiniStat label="查看" value={record.views} />
        <MiniStat label="互动" value={record.interactions} />
        <MiniStat label="线索" value={record.leads} accent />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, flexWrap: 'wrap' }}>
        {record.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              height: 20,
              fontSize: '0.625rem',
              color: colors.textTertiary,
              backgroundColor: colors.bgSecondary,
              borderRadius: 1,
            }}
          />
        ))}
      </Box>

      <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mt: 1 }}>
        {record.publishDate}
      </Typography>
    </ContentCard>
  );
}

function MiniStat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        sx={{
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: accent ? colors.gold : colors.textPrimary,
        }}
      >
        {value.toLocaleString()}
      </Typography>
      <Typography sx={{ fontSize: '0.625rem', color: colors.textTertiary, mt: -0.25 }}>
        {label}
      </Typography>
    </Box>
  );
}
