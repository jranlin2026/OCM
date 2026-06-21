import { describe, expect, it } from 'vitest';
import {
  authenticateMockUser,
  canAccessPath,
  filterNavSectionsForUser,
  mockAuthUsers,
} from './auth';
import { navSections } from '@/routes/navItems';

describe('auth and permission rules', () => {
  it('authenticates demo users with the shared mock password', () => {
    const session = authenticateMockUser('finance', 'jixiang2026');

    expect(session?.token).toBe('mock-token-finance');
    expect(session?.user.roleName).toBe('财务');
  });

  it('filters sidebar navigation by current user permissions', () => {
    const financeUser = mockAuthUsers.finance;
    const visiblePaths = filterNavSectionsForUser(navSections, financeUser)
      .flatMap((section) => section.items.map((item) => item.path));

    expect(visiblePaths).toContain('/policies/pricing');
    expect(visiblePaths).toContain('/data/dashboard');
    expect(visiblePaths).not.toContain('/settings/users');
    expect(visiblePaths).not.toContain('/sales/scripts');
  });

  it('checks direct route access against wildcard permission paths', () => {
    expect(canAccessPath(mockAuthUsers.admin, '/settings/roles')).toBe(true);
    expect(canAccessPath(mockAuthUsers.sales, '/sales/diagnosis')).toBe(true);
    expect(canAccessPath(mockAuthUsers.sales, '/settings/roles')).toBe(false);
    expect(canAccessPath(mockAuthUsers.finance, '/policies/pricing')).toBe(true);
    expect(canAccessPath(mockAuthUsers.finance, '/agent/settlements')).toBe(true);
    expect(canAccessPath(mockAuthUsers.finance, '/products')).toBe(false);
  });
});
