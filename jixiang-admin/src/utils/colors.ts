import { ProductTier } from '@/types';

export const TIER_COLORS: Record<ProductTier, string> = {
  [ProductTier.STANDARD]: '#3B82F6',
  [ProductTier.AGENT]: '#22C55E',
  [ProductTier.OEM]: '#A855F7',
  [ProductTier.PARTNER]: '#F59E0B',
};

export const TIER_LABELS: Record<ProductTier, string> = {
  [ProductTier.STANDARD]: '基础版',
  [ProductTier.AGENT]: '代理版',
  [ProductTier.OEM]: '贴牌版',
  [ProductTier.PARTNER]: '合伙人版',
};

export function getTierColor(tier: ProductTier): string {
  return TIER_COLORS[tier];
}

export function getTierBgColor(tier: ProductTier): string {
  const color = TIER_COLORS[tier];
  return `${color}1A`; // 10% alpha
}

export const STATUS_COLORS: Record<string, string> = {
  draft: '#6B6B82',
  published: '#22C55E',
  pending: '#F59E0B',
  confirmed: '#3B82F6',
  delivered: '#A855F7',
  completed: '#22C55E',
};
