import { describe, expect, it } from 'vitest';
import { navSections } from './navItems';
import { ROUTE_TITLES } from '@/utils/constants';

describe('navigation configuration', () => {
  const routePaths = [
    '/dashboard',
    '/products',
    '/project/overview',
    '/project/faq',
    '/project/competitive',
    '/project/guide',
    '/sales/scripts',
    '/sales/qa',
    '/sales/diagnosis',
    '/sales/quotations',
    '/sales/sop',
    '/agent/list',
    '/agent/policies',
    '/agent/agreements',
    '/agent/settlements',
    '/agent/growth',
    '/acquisition/daily',
    '/acquisition/short-video',
    '/acquisition/live',
    '/acquisition/private-domain',
    '/acquisition/offline',
    '/cases/list',
    '/cases/templates',
    '/cases/materials',
    '/cases/interviews',
    '/training/courses',
    '/training/camps',
    '/training/assignments',
    '/training/progress',
    '/delivery/sop',
    '/delivery/acceptance',
    '/delivery/diagnosis',
    '/delivery/after-sale',
    '/delivery/survey',
    '/policies/pricing',
    '/policies/commission',
    '/policies/refund',
    '/policies/compliance',
    '/policies/contracts',
    '/policies/reporting',
    '/brand/vi',
    '/brand/templates',
    '/brand/certificates',
    '/data/dashboard',
    '/data/funnel',
    '/data/ranking',
    '/data/complaint',
    '/data/reviews',
    '/materials/scripts',
    '/materials/live-scripts',
    '/materials/moments',
    '/materials/posters',
    '/materials/videos',
    '/settings/users',
    '/settings/roles',
    '/settings/recycle-bin',
    '/settings/logs',
  ];

  it('keeps every sidebar item mapped to a known route title', () => {
    const navPaths = navSections.flatMap((section) => section.items.map((item) => item.path));

    expect(navPaths.length).toBeGreaterThanOrEqual(16);
    expect(navPaths).toContain('/dashboard');
    expect(navPaths).toContain('/products');
    expect(navPaths).toContain('/settings/users');
    expect(navPaths).toContain('/settings/recycle-bin');

    for (const path of navPaths) {
      expect(ROUTE_TITLES[path], `${path} should have a topbar title`).toBeTruthy();
    }
  });

  it('keeps enabled navigation entries in the current launch phase', () => {
    const navItems = navSections.flatMap((section) => section.items);

    expect(navItems.every((item) => item.phase === '1A')).toBe(true);
    expect(new Set(navItems.map((item) => item.path)).size).toBe(navItems.length);
  });

  it('keeps every routable page mapped to a topbar title', () => {
    expect(routePaths).toHaveLength(57);

    for (const path of routePaths) {
      expect(ROUTE_TITLES[path], `${path} should have a topbar title`).toBeTruthy();
    }
  });
});
