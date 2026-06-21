import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { colors } from '@/theme/tokens';

interface Props {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}

export default function StatsCard({ label, value, change, trend, icon, color }: Props) {
  const isUp = trend === 'up';

  return (
    <Card
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
        p: 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* 左侧文本区 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography
          sx={{
            fontSize: '0.8125rem',
            color: colors.textSecondary,
            fontWeight: 500,
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.625rem',
            fontWeight: 700,
            color: colors.textPrimary,
            lineHeight: 1.2,
          }}
        >
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: isUp ? colors.success : colors.danger,
            }}
          >
            {isUp ? '↑' : '↓'} {change}
          </Typography>
          <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
            较上月
          </Typography>
        </Box>
      </Box>

      {/* 右侧图标 */}
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `${color}1A`,
          flexShrink: 0,
        }}
      >
        <i className={icon} style={{ fontSize: '1.25rem', color }} />
      </Box>
    </Card>
  );
}
