import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import FilterChips from '@/components/ui/FilterChips';
import { colors } from '@/theme/tokens';
import { formatDateTime } from '@/utils/formatters';

interface LogRecord {
  id: string;
  user: string;
  action: string;
  module: string;
  detail: string;
  ip: string;
  level: 'info' | 'warning' | 'danger';
  createdAt: string;
}

const mockData: LogRecord[] = [
  { id: 'L-001', user: '林恩光', action: '登录系统', module: '系统', detail: '从 192.168.1.100 登录', ip: '192.168.1.100', level: 'info', createdAt: '2024-12-19T08:30:00' },
  { id: 'L-002', user: '张明', action: '新增话术', module: '销售成交', detail: '新增话术「直播间开场话术模板」', ip: '192.168.1.101', level: 'info', createdAt: '2024-12-19T09:15:00' },
  { id: 'L-003', user: '李芳', action: '修改佣金政策', module: '政策合同', detail: '修改了黄金代理佣金比例从15%到18%', ip: '192.168.1.102', level: 'warning', createdAt: '2024-12-19T10:00:00' },
  { id: 'L-004', user: '王芳', action: '删除案例', module: '案例见证', detail: '删除了草稿案例「测试案例001」', ip: '192.168.1.103', level: 'danger', createdAt: '2024-12-19T10:30:00' },
  { id: 'L-005', user: '陈晨', action: '上传素材', module: '内容素材', detail: '上传了3张海报素材到品牌资产', ip: '192.168.1.104', level: 'info', createdAt: '2024-12-19T11:00:00' },
  { id: 'L-006', user: '林恩光', action: '修改用户角色', module: '系统设置', detail: '将用户「刘洋」角色从「财务」改为「财务(停用)」', ip: '192.168.1.100', level: 'warning', createdAt: '2024-12-19T11:30:00' },
  { id: 'L-007', user: '张明', action: '导出数据', module: '数据运营', detail: '导出了12月运营看板数据Excel', ip: '192.168.1.101', level: 'info', createdAt: '2024-12-19T14:00:00' },
  { id: 'L-008', user: '赵敏', action: '登录失败', module: '系统', detail: '密码错误3次，账号已临时锁定', ip: '10.0.0.55', level: 'danger', createdAt: '2024-12-19T14:30:00' },
  { id: 'L-009', user: '李芳', action: '新增代理商', module: '招商代理', detail: '新增青铜代理「陈刚」', ip: '192.168.1.102', level: 'info', createdAt: '2024-12-19T15:00:00' },
  { id: 'L-010', user: '王芳', action: '发布朋友圈素材', module: '内容素材', detail: '发布了「早安语录——创业励志系列」', ip: '192.168.1.103', level: 'info', createdAt: '2024-12-19T15:30:00' },
];

const levelConfig: Record<string, { color: string; bg: string; label: string }> = {
  info: { color: colors.info, bg: `${colors.info}1A`, label: '正常' },
  warning: { color: colors.warning, bg: `${colors.warning}1A`, label: '警告' },
  danger: { color: colors.danger, bg: `${colors.danger}1A`, label: '危险' },
};

export default function LogsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const filtered = useMemo(() => mockData.filter((i) => {
    const ms = !search || i.user.includes(search) || i.action.includes(search) || i.detail.includes(search);
    const mf = filter === 'all' || i.level === filter;
    return ms && mf;
  }), [search, filter]);

  return (
    <Box>
      <SectionHeader title="操作日志" />
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <SearchInput placeholder="搜索日志..." value={search} onChange={setSearch} />
        <FilterChips
          options={[
            { label: '全部', value: 'all' },
            { label: '正常', value: 'info' },
            { label: '警告', value: 'warning' },
            { label: '危险', value: 'danger' },
          ]}
          value={filter}
          onChange={setFilter}
        />
      </Box>
      <TableContainer sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}` }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: colors.bgSecondary }}>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>操作人</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>操作</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>模块</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>详情</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>IP地址</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>级别</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((row) => {
              const lc = levelConfig[row.level];
              return (
                <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: colors.surfaceHover } }}>
                  <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>{row.user}</TableCell>
                  <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>{row.action}</TableCell>
                  <TableCell>
                    <Chip label={row.module} size="small" sx={{ backgroundColor: colors.surfaceElevated, color: colors.textSecondary, fontSize: '0.6875rem', height: 20 }} />
                  </TableCell>
                  <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem', maxWidth: 300 }}>{row.detail}</TableCell>
                  <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem', fontFamily: 'monospace' }}>{row.ip}</TableCell>
                  <TableCell>
                    <Chip label={lc.label} size="small" sx={{ backgroundColor: lc.bg, color: lc.color, fontSize: '0.6875rem', height: 20 }} />
                  </TableCell>
                  <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem' }}>{formatDateTime(row.createdAt)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
