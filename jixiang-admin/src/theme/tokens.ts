/* ============= 极享AI 设计令牌 ============= */

/** 色彩系统 */
export const colors = {
  bgPrimary: '#0F0F1A',
  bgSecondary: '#1A1A2E',
  surface: '#1E1E32',
  surfaceHover: '#252540',
  surfaceElevated: '#2A2A3C',
  gold: '#D4A853',
  goldHover: '#E0B96A',
  goldActive: '#C49A42',
  goldMuted: 'rgba(212,168,83,0.2)',
  goldSubtle: 'rgba(212,168,83,0.08)',
  textPrimary: '#F5F5F7',
  textSecondary: '#A0A0B8',
  textTertiary: '#6B6B82',
  textOnGold: '#0F0F1A',
  border: '#2E2E44',
  borderStrong: '#3D3D58',
  borderGold: 'rgba(212,168,83,0.25)',
  divider: '#2A2A40',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
  tierBlue: '#3B82F6',
  tierGreen: '#22C55E',
  tierPurple: '#A855F7',
  tierGold: '#F59E0B',
} as const;

/** 间距系统（px） */
export const spacing: Record<string, number> = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 48,
};

/** 圆角（px） */
export const radius: Record<string, number> = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 20,
};

/** 字体 */
export const font = {
  sans: 'Inter',
  mono: 'JetBrains Mono',
  metric: 'Inter',
} as const;

/** 阴影 */
export const shadow: Record<string, string> = {
  sm: '0 1px 3px rgba(0,0,0,0.3)',
  md: '0 4px 6px rgba(0,0,0,0.3)',
  lg: '0 10px 15px rgba(0,0,0,0.3)',
  xl: '0 20px 25px rgba(0,0,0,0.4)',
  gold: '0 4px 14px rgba(212,168,83,0.2)',
};
