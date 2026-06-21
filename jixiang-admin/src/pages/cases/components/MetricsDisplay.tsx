import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@/theme/tokens';

interface Props {
  metrics: { label: string; value: string }[];
}

export default function MetricsDisplay({ metrics }: Props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1.5,
      }}
    >
      {metrics.map((metric, idx) => (
        <Box
          key={idx}
          sx={{
            backgroundColor: colors.bgSecondary,
            borderRadius: 2,
            border: `1px solid ${colors.borderGold}`,
            p: 1.5,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: colors.gold,
              lineHeight: 1.3,
            }}
          >
            {metric.value}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: colors.textSecondary,
              mt: 0.25,
            }}
          >
            {metric.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
