import type { NavSection } from '@/routes/navItems';

export interface AuthUser {
  id: string;
  username: string;
  name: string;
  roleId: string;
  roleName: string;
  avatar: string;
  permissionPaths: string[];
}

export interface AuthSession {
  token: string;
  user: AuthUser;
}

export const MOCK_PASSWORD = 'jixiang2026';

export const mockAuthUsers: Record<string, AuthUser> = {
  admin: {
    id: 'U-001',
    username: 'admin',
    name: '林恩光',
    roleId: 'admin',
    roleName: '企业管理员',
    avatar: '林',
    permissionPaths: ['*'],
  },
  sales: {
    id: 'U-002',
    username: 'sales',
    name: '张明',
    roleId: 'sales-manager',
    roleName: '销售经理',
    avatar: '张',
    permissionPaths: ['/dashboard', '/project/*', '/sales/*', '/products', '/data/dashboard'],
  },
  finance: {
    id: 'U-007',
    username: 'finance',
    name: '刘洋',
    roleId: 'finance',
    roleName: '财务',
    avatar: '刘',
    permissionPaths: ['/dashboard', '/agent/settlements', '/policies/*', '/data/dashboard'],
  },
};

export function authenticateMockUser(username: string, password: string): AuthSession | null {
  const normalizedUsername = username.trim().toLowerCase();
  const user = mockAuthUsers[normalizedUsername];

  if (!user || password !== MOCK_PASSWORD) return null;

  return {
    token: `mock-token-${user.username}`,
    user,
  };
}

export function canAccessPath(user: AuthUser | null | undefined, path: string): boolean {
  if (!user) return false;
  if (user.permissionPaths.includes('*')) return true;

  return user.permissionPaths.some((permissionPath) => {
    if (permissionPath.endsWith('/*')) {
      const prefix = permissionPath.slice(0, -1);
      return path.startsWith(prefix);
    }

    return path === permissionPath;
  });
}

export function filterNavSectionsForUser(navSections: NavSection[], user: AuthUser | null | undefined): NavSection[] {
  if (!user) return [];

  return navSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => canAccessPath(user, item.path)),
    }))
    .filter((section) => section.items.length > 0);
}

export function getDefaultPathForUser(user: AuthUser | null | undefined): string {
  if (!user) return '/login';
  if (canAccessPath(user, '/dashboard')) return '/dashboard';

  const firstPermission = user.permissionPaths.find((permissionPath) => permissionPath !== '*');
  if (!firstPermission) return '/dashboard';

  return firstPermission.replace('/*', '');
}
