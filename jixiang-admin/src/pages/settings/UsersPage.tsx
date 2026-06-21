import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import { formatDateTime } from '@/utils/formatters';

interface UserRecord {
  id: string;
  name: string;
  avatar: string;
  role: string;
  department: string;
  phone: string;
  email: string;
  status: string;
  lastLogin: string;
  createdAt: string;
}

const mockData: UserRecord[] = [
  { id: 'U-001', name: '林恩光', avatar: '林', role: '超级管理员', department: '管理层', phone: '138****0001', email: 'admin@jixiang.ai', status: 'active', lastLogin: '2024-12-19T08:30:00', createdAt: '2024-01-01T00:00:00' },
  { id: 'U-002', name: '张明', avatar: '张', role: '销售经理', department: '销售部', phone: '138****0002', email: 'zhangming@jixiang.ai', status: 'active', lastLogin: '2024-12-19T09:00:00', createdAt: '2024-02-15T00:00:00' },
  { id: 'U-003', name: '李芳', avatar: '李', role: '招商专员', department: '招商部', phone: '138****0003', email: 'lifang@jixiang.ai', status: 'active', lastLogin: '2024-12-18T17:30:00', createdAt: '2024-03-01T00:00:00' },
  { id: 'U-004', name: '王芳', avatar: '王', role: '运营专员', department: '运营部', phone: '138****0004', email: 'wangfang@jixiang.ai', status: 'active', lastLogin: '2024-12-19T08:45:00', createdAt: '2024-03-10T00:00:00' },
  { id: 'U-005', name: '陈晨', avatar: '陈', role: '内容编辑', department: '内容部', phone: '138****0005', email: 'chenchen@jixiang.ai', status: 'active', lastLogin: '2024-12-18T16:00:00', createdAt: '2024-04-20T00:00:00' },
  { id: 'U-006', name: '赵敏', avatar: '赵', role: '代理商', department: '外部', phone: '138****0006', email: 'zhaomin@agent.com', status: 'active', lastLogin: '2024-12-17T20:00:00', createdAt: '2024-05-15T00:00:00' },
  { id: 'U-007', name: '刘洋', avatar: '刘', role: '财务', department: '财务部', phone: '138****0007', email: 'liuyang@jixiang.ai', status: 'inactive', lastLogin: '2024-12-10T14:00:00', createdAt: '2024-06-01T00:00:00' },
];

const avatarColors = ['#D4A853', '#3B82F6', '#22C55E', '#A855F7', '#F59E0B', '#EF4444', '#6B6B82'];

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => mockData.filter((i) => !search || i.name.includes(search) || i.role.includes(search) || i.department.includes(search)), [search]);

  return (
    <Box>
      <SectionHeader title="用户管理" />
      <Box sx={{ mb: 3 }}>
        <SearchInput placeholder="搜索用户..." value={search} onChange={setSearch} />
      </Box>
      <TableContainer sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}` }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: colors.bgSecondary }}>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>用户</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>角色</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>部门</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>联系方式</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>最后登录</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>状态</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((row, idx) => (
              <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: colors.surfaceHover } }}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ width: 32, height: 32, backgroundColor: avatarColors[idx % avatarColors.length], fontSize: '0.8125rem', fontWeight: 600 }}>{row.avatar}</Avatar>
                    <Box>
                      <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, color: colors.textPrimary }}>{row.name}</Typography>
                      <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>{row.id}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip label={row.role} size="small" sx={{
                    backgroundColor: row.role === '超级管理员' ? colors.goldSubtle : colors.surfaceElevated,
                    color: row.role === '超级管理员' ? colors.gold : colors.textSecondary,
                    fontSize: '0.6875rem', height: 22,
                    border: `1px solid ${row.role === '超级管理员' ? colors.borderGold : colors.border}`,
                  }} />
                </TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>{row.department}</TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>{row.phone}</Typography>
                  <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>{row.email}</Typography>
                </TableCell>
                <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem' }}>{formatDateTime(row.lastLogin)}</TableCell>
                <TableCell><StatusBadge status={row.status === 'active' ? 'published' : 'draft'} size="small" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
