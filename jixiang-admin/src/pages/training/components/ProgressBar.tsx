import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@/theme/tokens';

interface Props {
  value: number;
  showLabel?: boolean;
  height?: number;
}

export default function ProgressBar({ value, showLabel = true, height = 8 }: Props) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box
        sx={{
          flex: 1,
          height,
          backgroundColor: colors.bgSecondary,
          borderRadius: height / 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: `${clamped}%`,
            height: '100%',
            backgroundColor: colors.gold,
            borderRadius: height / 2,
            transition: 'width 0.4s ease',
          }}
        />
      </Box>
      {showLabel && (
        <Typography
          sx={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: colors.textPrimary,
            minWidth: 36,
            textAlign: 'right',
          }}
        >
          {clamped}%
        </Typography>
      )}
    </Box>
  );
}
