import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@/theme/tokens';

interface Props {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({ title, subtitle, children, className }: Props) {
  return (
    <Box
      className={className}
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
        p: 2.5,
      }}
    >
      {title && (
        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: colors.textPrimary,
              lineHeight: 1.4,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              sx={{
                fontSize: '0.8125rem',
                color: colors.textSecondary,
                mt: 0.25,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      {children}
    </Box>
  );
}
