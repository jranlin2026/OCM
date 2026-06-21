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
import SettingsSplitPanel from './components/SettingsSplitPanel';

const roleActions = ['编辑角色权限', '删除角色', '复制角色', '添加成员', '移除成员'];

export default function RolesPage() {
  const { departments, users, roles } = useOrganizationData();
  const [selectedRoleId, setSelectedRoleId] = useState(roles[0].id);
  const [search, setSearch] = useState('');

  const selectedRole = roles.find((role) => role.id === selectedRoleId) ?? roles[0];
  const departmentMap = useMemo(() => new Map(departments.map((department) => [department.id, department])), [departments]);
  const roleMembers = users.filter((user) => user.roleId === selectedRole.id);
  const filteredRoles = roles.filter((role) => !search || role.name.includes(search) || role.description.includes(search));

  return (
    <Box>
      <SectionHeader title="角色权限" />
      <SettingsSplitPanel
        sidebar={(
          <Box>
            <Box sx={{ p: 2, borderBottom: `1px solid ${colors.border}` }}>
              <SearchInput placeholder="搜索角色" value={search} onChange={setSearch} />
            </Box>
            <Stack sx={{ p: 1 }}>
              {filteredRoles.map((role) => {
                const count = users.filter((user) => user.roleId === role.id).length;
                const selected = role.id === selectedRoleId;
                return (
                  <Button
                    key={role.id}
                    onClick={() => setSelectedRoleId(role.id)}
                    fullWidth
                    sx={roleButtonSx(selected)}
                    startIcon={<i className="fa-solid fa-user-shield" />}
                  >
                    {role.name}（{count}人）
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
            <Box>
              <Typography sx={{ color: colors.textPrimary, fontWeight: 600 }}>
                {selectedRole.name}（{roleMembers.length}人）
              </Typography>
              <Typography sx={{ color: colors.textTertiary, fontSize: '0.75rem', mt: 0.5 }}>
                {selectedRole.description}
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {roleActions.map((label, index) => (
                <Button key={label} variant="outlined" size="small" disabled={index === 4} sx={toolbarButtonSx}>
                  {label}
                </Button>
              ))}
            </Stack>
          </Box>
          <Box sx={{ px: 2.5, py: 1.5, borderBottom: `1px solid ${colors.border}` }}>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {selectedRole.permissions.map((permission) => (
                <Chip key={permission} label={permission} size="small" sx={permissionChipSx(permission.includes('只读'))} />
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
                  <TableCell sx={headCellSx}>账号</TableCell>
                  <TableCell sx={headCellSx}>状态</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roleMembers.map((user) => (
                  <TableRow key={user.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: colors.surfaceHover } }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 30, height: 30, backgroundColor: colors.gold, color: colors.textOnGold, fontSize: '0.8125rem', fontWeight: 700 }}>
                          {user.avatar}
                        </Avatar>
                        <Typography sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>{user.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={bodyCellSx}>{user.title}</TableCell>
                    <TableCell sx={bodyCellSx}>{departmentMap.get(user.departmentId)?.name}</TableCell>
                    <TableCell sx={bodyCellSx}>{user.account}</TableCell>
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

function roleButtonSx(selected: boolean) {
  return {
    justifyContent: 'flex-start',
    px: 1.5,
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
  '&.Mui-disabled': { color: colors.textTertiary, borderColor: colors.border },
};

const headCellSx = { color: colors.textSecondary, fontSize: '0.8125rem', borderColor: colors.border };
const bodyCellSx = { color: colors.textSecondary, fontSize: '0.8125rem', borderColor: colors.border };

function permissionChipSx(readonly: boolean) {
  return {
    height: 22,
    fontSize: '0.6875rem',
    color: readonly ? colors.textTertiary : colors.gold,
    backgroundColor: readonly ? colors.surfaceElevated : colors.goldSubtle,
    border: `1px solid ${readonly ? colors.border : colors.borderGold}`,
  };
}
