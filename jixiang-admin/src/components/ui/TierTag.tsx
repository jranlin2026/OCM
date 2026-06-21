import Chip from '@mui/material/Chip';
import { ProductTier } from '@/types';
import { getTierColor } from '@/utils/colors';

interface Props {
  tier: ProductTier;
  size?: 'small' | 'medium';
}

export default function TierTag({ tier, size = 'small' }: Props) {
  const color = getTierColor(tier);
  const height = size === 'small' ? 20 : 24;
  const fontSize = size === 'small' ? '0.6875rem' : '0.75rem';

  const tierLabel: Record<ProductTier, string> = {
    [ProductTier.STANDARD]: '基础版',
    [ProductTier.AGENT]: '代理版',
    [ProductTier.OEM]: '贴牌版',
    [ProductTier.PARTNER]: '合伙人版',
  };

  return (
    <Chip
      label={tierLabel[tier]}
      size="small"
      sx={{
        height,
        fontSize,
        fontWeight: 600,
        color: '#FFFFFF',
        backgroundColor: color,
        borderRadius: 1,
        '& .MuiChip-label': { px: 1 },
      }}
    />
  );
}
