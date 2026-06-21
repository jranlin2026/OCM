import { beforeEach, describe, expect, it } from 'vitest';
import { useAuthStore } from './authStore';

describe('auth store', () => {
  beforeEach(() => {
    window.localStorage.clear();
    useAuthStore.setState({ token: null, user: null, loginError: null });
  });

  it('logs in with mock credentials and persists the session', () => {
    const ok = useAuthStore.getState().login('admin', 'jixiang2026');

    expect(ok).toBe(true);
    expect(useAuthStore.getState().user?.roleName).toBe('企业管理员');
    expect(window.localStorage.getItem('jixiang-auth-session')).toContain('mock-token-admin');
  });

  it('stores a login error for invalid credentials', () => {
    const ok = useAuthStore.getState().login('admin', 'wrong-password');

    expect(ok).toBe(false);
    expect(useAuthStore.getState().token).toBeNull();
    expect(useAuthStore.getState().loginError).toBe('账号或密码不正确');
    expect(window.localStorage.getItem('jixiang-auth-session')).toBeNull();
  });

  it('clears the persisted session on logout', () => {
    useAuthStore.getState().loginAsDemo('finance');

    expect(useAuthStore.getState().user?.roleName).toBe('财务');

    useAuthStore.getState().logout();

    expect(useAuthStore.getState().user).toBeNull();
    expect(useAuthStore.getState().token).toBeNull();
    expect(window.localStorage.getItem('jixiang-auth-session')).toBeNull();
  });
});
