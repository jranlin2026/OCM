import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '@/theme/tokens';

interface Props {
  rules: string[];
}

export default function VISpecRuleList({ rules }: Props) {
  return (
    <Box component="ol" sx={{ m: 0, pl: 2, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
      {rules.map((rule, idx) => (
        <Box
          key={idx}
          component="li"
          sx={{
            fontSize: '0.8125rem',
            color: colors.textSecondary,
            lineHeight: 1.5,
            '&::marker': {
              color: colors.gold,
              fontWeight: 600,
            },
          }}
        >
          <Typography
            component="span"
            sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.5 }}
          >
            {rule}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
