import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { recordAuditLog } from '@/auth/audit';
import { canAccessPath } from '@/auth/auth';
import AppLayout from '@/layouts/AppLayout';
import ForbiddenPage from '@/pages/ForbiddenPage';
import { useAuthStore } from '@/stores/authStore';

export default function ProtectedLayout() {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const isRootRedirect = location.pathname === '/';
  const isForbidden = Boolean(user) && !isRootRedirect && !canAccessPath(user, location.pathname);

  useEffect(() => {
    if (!isForbidden || !user) return;

    recordAuditLog({
      user: user.name,
      action: '拒绝访问',
      module: '权限',
      detail: `${user.roleName}访问 ${location.pathname} 被拒绝`,
      level: 'warning',
    });
  }, [isForbidden, location.pathname, user]);

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (isForbidden) {
    return (
      <AppLayout>
        <ForbiddenPage />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
