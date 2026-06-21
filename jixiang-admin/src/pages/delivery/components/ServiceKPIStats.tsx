import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ui/ContentCard';
import { colors } from '@/theme/tokens';

interface KPIItem {
  label: string;
  value: number;
  unit?: string;
  color: string;
  icon: string;
}

interface Props {
  items: KPIItem[];
}

export default function ServiceKPIStats({ items }: Props) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
      {items.map((item, index) => (
        <ContentCard key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                backgroundColor: `${item.color}1A`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <i className={item.icon} style={{ fontSize: '1rem', color: item.color }} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: '0.6875rem',
                  color: colors.textTertiary,
                  mb: 0.25,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.label}
              </Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.2 }}>
                {item.value.toLocaleString()}
                {item.unit && (
                  <span style={{ fontSize: '0.75rem', fontWeight: 400, color: colors.textTertiary, marginLeft: 2 }}>
                    {item.unit}
                  </span>
                )}
              </Typography>
            </Box>
          </Box>
        </ContentCard>
      ))}
    </Box>
  );
}
