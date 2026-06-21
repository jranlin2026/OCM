import { describe, expect, it } from 'vitest';
import { navSections } from './navItems';
import { ROUTE_TITLES } from '@/utils/constants';

describe('navigation configuration', () => {
  it('keeps every sidebar item mapped to a known route title', () => {
    const navPaths = navSections.flatMap((section) => section.items.map((item) => item.path));

    expect(navPaths.length).toBeGreaterThanOrEqual(16);
    expect(navPaths).toContain('/dashboard');
    expect(navPaths).toContain('/products');
    expect(navPaths).toContain('/settings/users');

    for (const path of navPaths) {
      expect(ROUTE_TITLES[path], `${path} should have a topbar title`).toBeTruthy();
    }
  });

  it('keeps enabled navigation entries in the current launch phase', () => {
    const navItems = navSections.flatMap((section) => section.items);

    expect(navItems.every((item) => item.phase === '1A')).toBe(true);
    expect(new Set(navItems.map((item) => item.path)).size).toBe(navItems.length);
  });
});
