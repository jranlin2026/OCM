import { beforeEach, describe, expect, it } from 'vitest';
import { listAuditLogs, recordAuditLog } from './audit';

describe('audit log storage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('stores runtime audit logs ahead of seed logs', () => {
    recordAuditLog({
      user: '刘洋',
      action: '登录系统',
      module: '认证',
      detail: '财务账号登录',
      level: 'info',
    });

    const logs = listAuditLogs();

    expect(logs[0].user).toBe('刘洋');
    expect(logs[0].action).toBe('登录系统');
    expect(logs.some((log) => log.id === 'L-001')).toBe(true);
  });

  it('dedupes identical logs within the default short window', () => {
    const first = recordAuditLog({
      user: 'tester',
      action: 'deny',
      module: 'permission',
      detail: '/settings/roles',
      level: 'warning',
    });
    const second = recordAuditLog({
      user: 'tester',
      action: 'deny',
      module: 'permission',
      detail: '/settings/roles',
      level: 'warning',
    });

    const matchingLogs = listAuditLogs().filter((log) => (
      log.user === 'tester' && log.action === 'deny'
    ));

    expect(second.id).toBe(first.id);
    expect(matchingLogs).toHaveLength(1);
  });

  it('keeps rendered log ids unique when old persisted data has duplicate ids', () => {
    window.localStorage.setItem('jixiang-audit-logs', JSON.stringify([
      {
        id: 'A-duplicate',
        user: 'tester',
        action: 'deny',
        module: 'permission',
        detail: 'first',
        ip: '127.0.0.1',
        level: 'warning',
        createdAt: '2026-06-21T13:00:00.000Z',
      },
      {
        id: 'A-duplicate',
        user: 'tester',
        action: 'deny',
        module: 'permission',
        detail: 'second',
        ip: '127.0.0.1',
        level: 'warning',
        createdAt: '2026-06-21T13:00:01.000Z',
      },
    ]));

    const ids = listAuditLogs().map((log) => log.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(ids.length);
  });
});
