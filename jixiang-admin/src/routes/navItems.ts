export interface NavItem {
  label: string;
  path: string;
  icon: string;
  phase: '1A' | '1B' | '2';
  badge?: string;
  badgeColor?: 'error' | 'info';
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    title: '核心运营',
    items: [
      { label: '数据驾驶舱', path: '/dashboard', icon: 'fa-solid fa-gauge-high', phase: '1A' },
      { label: '产品矩阵', path: '/products', icon: 'fa-solid fa-cube', phase: '1A' },
    ],
  },
  {
    title: '认知与成交',
    items: [
      { label: '项目认知', path: '/project/overview', icon: 'fa-solid fa-book', phase: '1A' },
      { label: '销售成交', path: '/sales/scripts', icon: 'fa-solid fa-comments-dollar', phase: '1A' },
    ],
  },
  {
    title: '拓展运营',
    items: [
      { label: '招商代理', path: '/agent/list', icon: 'fa-solid fa-handshake', phase: '1A' },
      { label: '获客引流', path: '/acquisition/daily', icon: 'fa-solid fa-users', phase: '1A' },
      { label: '案例见证', path: '/cases/list', icon: 'fa-solid fa-trophy', phase: '1A' },
      { label: '培训赋能', path: '/training/courses', icon: 'fa-solid fa-graduation-cap', phase: '1A' },
      { label: '内容素材', path: '/materials/scripts', icon: 'fa-solid fa-photo-film', phase: '1A' },
    ],
  },
  {
    title: '服务与合规',
    items: [
      { label: '交付服务', path: '/delivery/sop', icon: 'fa-solid fa-circle-check', phase: '1A' },
      { label: '政策合同', path: '/policies/pricing', icon: 'fa-solid fa-file-contract', phase: '1A' },
      { label: '品牌资产', path: '/brand/vi', icon: 'fa-solid fa-palette', phase: '1A' },
      { label: '数据运营', path: '/data/dashboard', icon: 'fa-solid fa-chart-line', phase: '1A' },
    ],
  },
  {
    title: '系统管理',
    items: [
      { label: '员工 & 部门', path: '/settings/users', icon: 'fa-solid fa-sitemap', phase: '1A' },
      { label: '角色权限', path: '/settings/roles', icon: 'fa-solid fa-user-shield', phase: '1A' },
      { label: '账号回收站', path: '/settings/recycle-bin', icon: 'fa-solid fa-user-clock', phase: '1A' },
      { label: '操作日志', path: '/settings/logs', icon: 'fa-solid fa-list-check', phase: '1A' },
    ],
  },
];
