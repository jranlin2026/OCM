import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { colors } from '@/theme/tokens';

interface Props {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterChips({ options, value, onChange }: Props) {
  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <Chip
            key={option.value}
            label={option.label}
            onClick={() => onChange(option.value)}
            sx={{
              height: 28,
              fontSize: '0.75rem',
              fontWeight: 500,
              borderRadius: 2,
              color: isActive ? colors.gold : colors.textSecondary,
              backgroundColor: isActive ? colors.goldSubtle : 'transparent',
              border: `1px solid ${isActive ? colors.gold : colors.border}`,
              '&:hover': {
                backgroundColor: isActive ? colors.goldMuted : colors.goldSubtle,
                borderColor: colors.gold,
              },
            }}
          />
        );
      })}
    </Box>
  );
}
