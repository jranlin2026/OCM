import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Product } from '@/types';
import { formatCurrency, formatCompactNumber } from '@/utils/formatters';
import { colors } from '@/theme/tokens';
import TierTag from '@/components/ui/TierTag';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={2.5}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card
            sx={{
              backgroundColor: colors.surface,
              borderRadius: 3,
              border: `1px solid ${colors.border}`,
              p: 2.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              height: '100%',
              transition: 'border-color 0.2s',
              '&:hover': {
                borderColor: colors.borderGold,
              },
            }}
          >
            {/* 等级标签 */}
            <Box>
              <TierTag tier={product.tier} size="medium" />
            </Box>

            {/* 产品名 */}
            <Typography
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: colors.textPrimary,
              }}
            >
              {product.name}
            </Typography>

            {/* 价格 */}
            <Typography
              sx={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: colors.gold,
                lineHeight: 1.2,
              }}
            >
              {formatCurrency(product.price)}
              <Typography
                component="span"
                sx={{ fontSize: '0.75rem', color: colors.textTertiary, fontWeight: 400, ml: 0.5 }}
              >
                /年
              </Typography>
            </Typography>

            {/* 简介 */}
            <Typography
              sx={{
                fontSize: '0.8125rem',
                color: colors.textSecondary,
                lineHeight: 1.5,
                flex: 1,
              }}
            >
              {product.description}
            </Typography>

            {/* 收益信息 */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pt: 1.5,
                borderTop: `1px solid ${colors.divider}`,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
                  已售
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: colors.textPrimary }}>
                  {formatCompactNumber(product.sales)}
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mb: 0.25 }}>
                  营收
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: colors.success }}>
                  {formatCurrency(product.revenue)}
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
