import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { ROUTE_TITLES } from '@/utils/constants';

export function useNavigation() {
  const location = useLocation();

  const currentTitle = useMemo(() => {
    const path = location.pathname;
    // Match exact or prefix
    const exact = ROUTE_TITLES[path];
    if (exact) return exact;
    // Match by prefix
    const match = Object.entries(ROUTE_TITLES).find(([key]) => path.startsWith(key));
    return match ? match[1] : '极享AI';
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return { currentTitle, isActive, pathname: location.pathname };
}
