import { useMemo, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import SearchInput from '@/components/ui/SearchInput';
import SectionHeader from '@/components/ui/SectionHeader';
import StatusBadge from '@/components/ui/StatusBadge';
import { useOrganizationData } from '@/hooks/useOrganizationData';
import { colors } from '@/theme/tokens';
import { formatDateTime } from '@/utils/formatters';
import SettingsSplitPanel from './components/SettingsSplitPanel';

const actionLabels = ['创建员工', '批量导入员工', '移动', '禁用', '解禁', '办理离职'];
const avatarColors = ['#D4A853', '#3B82F6', '#22C55E', '#A855F7', '#F59E0B', '#EF4444', '#6B6B82'];

export default function UsersPage() {
  const { departments, users, roles } = useOrganizationData();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('company');
  const [search, setSearch] = useState('');

  const departmentMap = useMemo(() => new Map(departments.map((department) => [department.id, department])), [departments]);
  const roleMap = useMemo(() => new Map(roles.map((role) => [role.id, role])), [roles]);
  const selectedDepartment = departmentMap.get(selectedDepartmentId) ?? departments[0];

  const selectedDepartmentUserIds = useMemo(() => {
    if (selectedDepartmentId === 'company') return new Set(users.map((user) => user.id));
    return new Set(users.filter((user) => user.departmentId === selectedDepartmentId).map((user) => user.id));
  }, [selectedDepartmentId, users]);

  const filteredUsers = useMemo(() => {
    const normalizedSearch = search.trim();
    return users.filter((user) => {
      const departmentName = departmentMap.get(user.departmentId)?.name ?? '';
      const roleName = roleMap.get(user.roleId)?.name ?? '';
      const matchesDepartment = selectedDepartmentUserIds.has(user.id);
      const matchesSearch = !normalizedSearch
        || user.name.includes(normalizedSearch)
        || user.title.includes(normalizedSearch)
        || departmentName.includes(normalizedSearch)
        || roleName.includes(normalizedSearch)
        || user.account.includes(normalizedSearch);

      return matchesDepartment && matchesSearch;
    });
  }, [departmentMap, roleMap, search, selectedDepartmentUserIds, users]);

  const sidebarDepartments = departments.filter((department) => department.id !== 'company');
  const selectedCount = selectedDepartmentId === 'company'
    ? users.length
    : users.filter((user) => user.departmentId === selectedDepartmentId).length;

  return (
    <Box>
      <SectionHeader title="员工 & 部门" />
      <SettingsSplitPanel
        sidebar={(
          <Box>
            <Box sx={{ p: 2, borderBottom: `1px solid ${colors.border}` }}>
              <SearchInput placeholder="搜索员工、部门" value={search} onChange={setSearch} />
            </Box>
            <Stack sx={{ p: 1 }}>
              <Button
                onClick={() => setSelectedDepartmentId('company')}
                fullWidth
                sx={departmentButtonSx(selectedDepartmentId === 'company', 0)}
                startIcon={<i className="fa-solid fa-building" />}
              >
                极享AI（{users.length}人）
              </Button>
              {sidebarDepartments.map((department) => {
                const count = users.filter((user) => user.departmentId === department.id).length;
                const selected = department.id === selectedDepartmentId;
                return (
                  <Button
                    key={department.id}
                    onClick={() => setSelectedDepartmentId(department.id)}
                    fullWidth
                    sx={departmentButtonSx(selected, 2)}
                    startIcon={<i className="fa-solid fa-folder" />}
                  >
                    {department.name}（{count}人）
                  </Button>
                );
              })}
            </Stack>
          </Box>
        )}
      >
        <Box>
          <Box
            sx={{
              px: 2.5,
              py: 1.75,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              borderBottom: `1px solid ${colors.border}`,
              flexWrap: 'wrap',
            }}
          >
            <Typography sx={{ color: colors.textPrimary, fontWeight: 600 }}>
              {selectedDepartment.name}（{selectedCount}人）
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {actionLabels.map((label) => (
                <Button key={label} variant="outlined" size="small" sx={toolbarButtonSx}>
                  {label}
                </Button>
              ))}
            </Stack>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: colors.bgSecondary }}>
                  <TableCell sx={headCellSx}>姓名</TableCell>
                  <TableCell sx={headCellSx}>职务</TableCell>
                  <TableCell sx={headCellSx}>部门</TableCell>
                  <TableCell sx={headCellSx}>角色</TableCell>
                  <TableCell sx={headCellSx}>账号</TableCell>
                  <TableCell sx={headCellSx}>联系方式</TableCell>
                  <TableCell sx={headCellSx}>状态</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user, index) => (
                  <TableRow key={user.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: colors.surfaceHover } }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 32, height: 32, backgroundColor: avatarColors[index % avatarColors.length], fontSize: '0.8125rem', fontWeight: 600 }}>
                          {user.avatar}
                        </Avatar>
                        <Box>
                          <Typography sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>{user.name}</Typography>
                          <Typography sx={{ color: colors.textTertiary, fontSize: '0.6875rem' }}>{formatDateTime(user.lastLoginAt)}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={bodyCellSx}>{user.title}</TableCell>
                    <TableCell sx={bodyCellSx}>{departmentMap.get(user.departmentId)?.name}</TableCell>
                    <TableCell>
                      <Chip label={roleMap.get(user.roleId)?.name} size="small" sx={chipSx} />
                    </TableCell>
                    <TableCell sx={bodyCellSx}>{user.account}</TableCell>
                    <TableCell>
                      <Typography sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>{user.phone}</Typography>
                      <Typography sx={{ color: colors.textTertiary, fontSize: '0.6875rem' }}>{user.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={user.status === 'active' ? 'published' : 'draft'} size="small" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </SettingsSplitPanel>
    </Box>
  );
}

function departmentButtonSx(selected: boolean, pl: number) {
  return {
    justifyContent: 'flex-start',
    px: 1.5,
    pl,
    py: 1,
    borderRadius: 1,
    color: selected ? colors.gold : colors.textSecondary,
    backgroundColor: selected ? colors.goldSubtle : 'transparent',
    '&:hover': { backgroundColor: colors.surfaceHover },
    '& .MuiButton-startIcon': { color: selected ? colors.gold : colors.textTertiary },
  };
}

const toolbarButtonSx = {
  color: colors.textSecondary,
  borderColor: colors.borderStrong,
  '&:hover': { borderColor: colors.gold, color: colors.gold, backgroundColor: colors.goldSubtle },
};

const headCellSx = { color: colors.textSecondary, fontSize: '0.8125rem', borderColor: colors.border };
const bodyCellSx = { color: colors.textSecondary, fontSize: '0.8125rem', borderColor: colors.border };
const chipSx = {
  height: 22,
  fontSize: '0.6875rem',
  color: colors.gold,
  backgroundColor: colors.goldSubtle,
  border: `1px solid ${colors.borderGold}`,
};
