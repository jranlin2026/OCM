import { create } from 'zustand';
import type { AuthSession, AuthUser } from '@/auth/auth';
import { authenticateMockUser } from '@/auth/auth';
import { recordAuditLog } from '@/auth/audit';

const AUTH_STORAGE_KEY = 'jixiang-auth-session';

interface AuthState {
  token: string | null;
  user: AuthUser | null;
  loginError: string | null;
  login: (username: string, password: string) => boolean;
  loginAsDemo: (username: string) => boolean;
  logout: () => void;
}

function readStoredSession(): AuthSession | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) as AuthSession : null;
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

function writeStoredSession(session: AuthSession | null) {
  if (typeof window === 'undefined') return;

  if (session) {
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  } else {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

const initialSession = readStoredSession();

export const useAuthStore = create<AuthState>((set) => ({
  token: initialSession?.token ?? null,
  user: initialSession?.user ?? null,
  loginError: null,
  login: (username, password) => {
    const session = authenticateMockUser(username, password);
    if (!session) {
      recordAuditLog({
        user: username || '未知账号',
        action: '登录失败',
        module: '认证',
        detail: '账号或密码不正确',
        level: 'danger',
      });
      set({ loginError: '账号或密码不正确' });
      return false;
    }

    writeStoredSession(session);
    recordAuditLog({
      user: session.user.name,
      action: '登录系统',
      module: '认证',
      detail: `${session.user.roleName}登录后台`,
      level: 'info',
    });
    set({ token: session.token, user: session.user, loginError: null });
    return true;
  },
  loginAsDemo: (username) => {
    const session = authenticateMockUser(username, 'jixiang2026');
    if (!session) return false;

    writeStoredSession(session);
    recordAuditLog({
      user: session.user.name,
      action: '登录系统',
      module: '认证',
      detail: `${session.user.roleName}演示账号登录`,
      level: 'info',
    });
    set({ token: session.token, user: session.user, loginError: null });
    return true;
  },
  logout: () => {
    const currentUser = useAuthStore.getState().user;
    if (currentUser) {
      recordAuditLog({
        user: currentUser.name,
        action: '退出登录',
        module: '认证',
        detail: `${currentUser.roleName}退出系统`,
        level: 'info',
      });
    }
    writeStoredSession(null);
    set({ token: null, user: null, loginError: null });
  },
}));
