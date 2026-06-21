import Box from '@mui/material/Box';
import { colors } from '@/theme/tokens';

interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function SettingsSplitPanel({ sidebar, children }: Props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '280px minmax(0, 1fr)' },
        gap: 2,
        minHeight: 560,
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        {sidebar}
      </Box>
      <Box
        sx={{
          minWidth: 0,
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
