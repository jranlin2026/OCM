import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@/theme/tokens';

interface Props {
  title: string;
  action?: React.ReactNode;
  showDivider?: boolean;
}

export default function SectionHeader({ title, action, showDivider = true }: Props) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 4,
              height: 20,
              backgroundColor: colors.gold,
              borderRadius: '0 2px 2px 0',
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: colors.textPrimary,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>
        </Box>
        {action && <Box>{action}</Box>}
      </Box>
      {showDivider && (
        <Box
          sx={{
            mt: 1.5,
            height: 1,
            backgroundColor: colors.borderGold,
            opacity: 0.4,
          }}
        />
      )}
    </Box>
  );
}
