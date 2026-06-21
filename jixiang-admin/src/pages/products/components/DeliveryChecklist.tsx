import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { colors } from '@/theme/tokens';
import ContentCard from '@/components/ui/ContentCard';
import TierTag from '@/components/ui/TierTag';
import { useProducts } from '@/hooks/useMockData';

export default function DeliveryChecklist() {
  const products = useProducts();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {products.map((product) => (
        <ContentCard key={product.id}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <TierTag tier={product.tier} size="medium" />
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: colors.textPrimary }}>
              {product.name} — 交付清单
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: '0.8125rem',
              color: colors.textSecondary,
              mb: 1.5,
              lineHeight: 1.5,
            }}
          >
            {product.description}
          </Typography>

          <List dense disablePadding>
            {product.deliveryItems.map((item, i) => (
              <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      backgroundColor: colors.goldSubtle,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i className="fa-solid fa-check" style={{ fontSize: '0.625rem', color: colors.gold }} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: '0.8125rem',
                    color: colors.textPrimary,
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* 权益列表 */}
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: colors.textSecondary,
              mt: 1,
              mb: 0.5,
            }}
          >
            涵盖功能权益
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {product.benefits.map((benefit) => (
              <Box
                key={benefit}
                sx={{
                  px: 1,
                  py: 0.25,
                  borderRadius: 0.5,
                  fontSize: '0.6875rem',
                  color: colors.textSecondary,
                  backgroundColor: colors.surfaceHover,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {benefit}
              </Box>
            ))}
          </Box>
        </ContentCard>
      ))}
    </Box>
  );
}
