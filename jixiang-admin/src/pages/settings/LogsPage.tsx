import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FilterChips from '@/components/ui/FilterChips';
import SearchInput from '@/components/ui/SearchInput';
import SectionHeader from '@/components/ui/SectionHeader';
import { listAuditLogs, type AuditLevel } from '@/auth/audit';
import { colors } from '@/theme/tokens';
import { formatDateTime } from '@/utils/formatters';

const levelConfig: Record<AuditLevel, { color: string; bg: string; label: string }> = {
  info: { color: colors.info, bg: `${colors.info}1A`, label: '正常' },
  warning: { color: colors.warning, bg: `${colors.warning}1A`, label: '警告' },
  danger: { color: colors.danger, bg: `${colors.danger}1A`, label: '危险' },
};

export default function LogsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const logs = useMemo(() => listAuditLogs(), []);
  const filtered = useMemo(() => logs.filter((log) => {
    const matchesSearch = !search
      || log.user.includes(search)
      || log.action.includes(search)
      || log.module.includes(search)
      || log.detail.includes(search);
    const matchesFilter = filter === 'all' || log.level === filter;
    return matchesSearch && matchesFilter;
  }), [filter, logs, search]);

  return (
    <Box>
      <SectionHeader title={`操作日志（${filtered.length}）`} />
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
              <TableCell sx={headCellSx}>操作人</TableCell>
              <TableCell sx={headCellSx}>操作</TableCell>
              <TableCell sx={headCellSx}>模块</TableCell>
              <TableCell sx={headCellSx}>详情</TableCell>
              <TableCell sx={headCellSx}>IP地址</TableCell>
              <TableCell sx={headCellSx}>级别</TableCell>
              <TableCell sx={headCellSx}>时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((row) => {
              const level = levelConfig[row.level];
              return (
                <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: colors.surfaceHover } }}>
                  <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>{row.user}</TableCell>
                  <TableCell sx={bodyCellSx}>{row.action}</TableCell>
                  <TableCell>
                    <Chip label={row.module} size="small" sx={{ backgroundColor: colors.surfaceElevated, color: colors.textSecondary, fontSize: '0.6875rem', height: 20 }} />
                  </TableCell>
                  <TableCell sx={{ ...bodyCellSx, maxWidth: 320 }}>{row.detail}</TableCell>
                  <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem', fontFamily: 'monospace' }}>{row.ip}</TableCell>
                  <TableCell>
                    <Chip label={level.label} size="small" sx={{ backgroundColor: level.bg, color: level.color, fontSize: '0.6875rem', height: 20 }} />
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

const headCellSx = { color: colors.textSecondary, fontSize: '0.8125rem' };
const bodyCellSx = { color: colors.textSecondary, fontSize: '0.8125rem' };
