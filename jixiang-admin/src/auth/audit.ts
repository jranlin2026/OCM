export type AuditLevel = 'info' | 'warning' | 'danger';

export interface AuditLogRecord {
  id: string;
  user: string;
  action: string;
  module: string;
  detail: string;
  ip: string;
  level: AuditLevel;
  createdAt: string;
}

export type NewAuditLog = Omit<AuditLogRecord, 'id' | 'ip' | 'createdAt'> & {
  ip?: string;
  dedupeWindowMs?: number;
};

const AUDIT_STORAGE_KEY = 'jixiang-audit-logs';

const seedLogs: AuditLogRecord[] = [
  { id: 'L-001', user: '林恩光', action: '登录系统', module: '认证', detail: '企业管理员登录后台', ip: '192.168.1.100', level: 'info', createdAt: '2026-06-21T08:30:00' },
  { id: 'L-002', user: '张明', action: '新增话术', module: '销售成交', detail: '新增「直播间开场话术模板」', ip: '192.168.1.101', level: 'info', createdAt: '2026-06-20T09:15:00' },
  { id: 'L-003', user: '李芳', action: '修改佣金政策', module: '政策合同', detail: '调整黄金代理佣金比例', ip: '192.168.1.102', level: 'warning', createdAt: '2026-06-20T10:00:00' },
  { id: 'L-004', user: '赵敏', action: '登录失败', module: '认证', detail: '密码错误，登录被拒绝', ip: '10.0.0.55', level: 'danger', createdAt: '2026-06-19T14:30:00' },
  { id: 'L-005', user: '系统', action: '拒绝访问', module: '权限', detail: '角色权限不足，访问被拒绝', ip: '127.0.0.1', level: 'warning', createdAt: '2026-06-18T11:30:00' },
];

function readRuntimeLogs(): AuditLogRecord[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(AUDIT_STORAGE_KEY);
    return raw ? JSON.parse(raw) as AuditLogRecord[] : [];
  } catch {
    window.localStorage.removeItem(AUDIT_STORAGE_KEY);
    return [];
  }
}

function writeRuntimeLogs(logs: AuditLogRecord[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(logs.slice(0, 80)));
}

function createAuditId() {
  const randomId = typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  return `A-${randomId}`;
}

function ensureUniqueIds(logs: AuditLogRecord[]): AuditLogRecord[] {
  const seen = new Map<string, number>();

  return logs.map((log) => {
    const count = seen.get(log.id) ?? 0;
    seen.set(log.id, count + 1);

    if (count === 0) return log;
    return { ...log, id: `${log.id}-${count}` };
  });
}

export function recordAuditLog(log: NewAuditLog): AuditLogRecord {
  const createdAt = new Date().toISOString();
  const { dedupeWindowMs = 2000, ...logPayload } = log;
  const previousLogs = readRuntimeLogs();
  const duplicate = previousLogs.find((item) => (
    item.user === logPayload.user
    && item.action === logPayload.action
    && item.module === logPayload.module
    && item.detail === logPayload.detail
    && Date.now() - new Date(item.createdAt).getTime() <= dedupeWindowMs
  ));

  if (duplicate) return duplicate;

  const record: AuditLogRecord = {
    id: createAuditId(),
    ip: '127.0.0.1',
    createdAt,
    ...logPayload,
  };
  const runtimeLogs = [record, ...previousLogs];
  writeRuntimeLogs(runtimeLogs);
  return record;
}

export function listAuditLogs(): AuditLogRecord[] {
  const logs = [...readRuntimeLogs(), ...seedLogs].sort((a, b) => (
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ));

  return ensureUniqueIds(logs);
}
