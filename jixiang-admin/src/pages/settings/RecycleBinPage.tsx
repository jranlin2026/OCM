import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import { useOrganizationData } from '@/hooks/useOrganizationData';
import { colors } from '@/theme/tokens';
import { formatDateTime } from '@/utils/formatters';

export default function RecycleBinPage() {
  const { recycleAccounts } = useOrganizationData();
  const [search, setSearch] = useState('');

  const filteredAccounts = useMemo(() => {
    const normalizedSearch = search.trim();
    if (!normalizedSearch) return recycleAccounts;

    return recycleAccounts.filter((account) => (
      account.name.includes(normalizedSearch)
      || account.title.includes(normalizedSearch)
      || account.departmentName.includes(normalizedSearch)
      || account.account.includes(normalizedSearch)
    ));
  }, [recycleAccounts, search]);

  return (
    <Box>
      <SectionHeader
        title={`账号回收站（${filteredAccounts.length}）`}
        action={<SearchInput placeholder="请输入搜索关键词" value={search} onChange={setSearch} />}
      />
      <Box
        sx={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ px: 2, py: 1.5, borderBottom: `1px solid ${colors.border}` }}>
          <Button variant="outlined" size="small" sx={toolbarButtonSx}>
            彻底删除
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: colors.bgSecondary }}>
                <TableCell sx={headCellSx}>姓名</TableCell>
                <TableCell sx={headCellSx}>职务</TableCell>
                <TableCell sx={headCellSx}>部门</TableCell>
                <TableCell sx={headCellSx}>账号</TableCell>
                <TableCell sx={headCellSx}>办理离职时间</TableCell>
                <TableCell sx={headCellSx}>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAccounts.map((account) => (
                <TableRow key={account.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: colors.surfaceHover } }}>
                  <TableCell>
                    <Typography sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>
                      {account.name}
                    </Typography>
                  </TableCell>
                  <TableCell sx={bodyCellSx}>{account.title}</TableCell>
                  <TableCell sx={bodyCellSx}>{account.departmentName}</TableCell>
                  <TableCell sx={bodyCellSx}>{account.account}</TableCell>
                  <TableCell sx={bodyCellSx}>{formatDateTime(account.handledAt)}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button size="small" sx={textButtonSx}>重新启用账号</Button>
                      <Button size="small" sx={dangerButtonSx}>彻底删除</Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

const toolbarButtonSx = {
  color: colors.textSecondary,
  borderColor: colors.borderStrong,
  '&:hover': { borderColor: colors.danger, color: colors.danger, backgroundColor: 'rgba(239,68,68,0.08)' },
};

const textButtonSx = { minWidth: 0, color: colors.gold, px: 0.5 };
const dangerButtonSx = { minWidth: 0, color: colors.danger, px: 0.5 };
const headCellSx = { color: colors.textSecondary, fontSize: '0.8125rem', borderColor: colors.border };
const bodyCellSx = { color: colors.textSecondary, fontSize: '0.8125rem', borderColor: colors.border };
