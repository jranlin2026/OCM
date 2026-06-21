import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@/theme/tokens';

interface Props {
  title: string;
}

export default function NavSection({ title }: Props) {
  return (
    <Box sx={{ px: 2, pt: 2.5, pb: 1 }}>
      <Typography
        sx={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          color: colors.textTertiary,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
