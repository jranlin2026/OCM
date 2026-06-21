import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { colors } from '@/theme/tokens';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchInput({ placeholder = '搜索...', value, onChange }: Props) {
  return (
    <TextField
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '0.875rem', color: colors.textTertiary }} />
          </InputAdornment>
        ),
      }}
      sx={{
        minWidth: 240,
        '& .MuiOutlinedInput-root': {
          backgroundColor: colors.bgSecondary,
          '& fieldset': { borderColor: colors.border },
          '&:hover fieldset': { borderColor: colors.borderStrong },
          '&.Mui-focused fieldset': { borderColor: colors.gold },
        },
        '& .MuiInputBase-input': {
          color: colors.textPrimary,
          fontSize: '0.8125rem',
          '&::placeholder': { color: colors.textTertiary, opacity: 1 },
        },
      }}
    />
  );
}
