import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import { formatDateTime } from '@/utils/formatters';

interface ReportRecord {
  id: string;
  customerName: string;
  contactPerson: string;
  phone: string;
  source: string;
  productTier: string;
  status: string;
  reportedBy: string;
  remark: string;
  createdAt: string;
}

const mockData: ReportRecord[] = [
  { id: 'RP-001', customerName: '深圳星辰科技', contactPerson: '刘总', phone: '138****8888', source: '抖音直播间', productTier: '贴牌版', status: 'confirmed', reportedBy: '张明', remark: 'MCN机构，旗下20+主播，有OEM需求', createdAt: '2024-12-18T10:00:00' },
  { id: 'RP-002', customerName: '成都美妆达人小雪', contactPerson: '小雪', phone: '139****6666', source: '快手短视频', productTier: '代理版', status: 'pending', reportedBy: '李芳', remark: '粉丝5万+，美妆赛道，适合代理版', createdAt: '2024-12-17T14:00:00' },
  { id: 'RP-003', customerName: '杭州品尚电商', contactPerson: '王总', phone: '137****5555', source: '老客户转介绍', productTier: '合伙人', status: 'completed', reportedBy: '张明', remark: '传统电商转型，团队15人，有区域代理意向', createdAt: '2024-12-15T09:00:00' },
  { id: 'RP-004', customerName: '武汉宝妈创业群', contactPerson: '陈姐', phone: '158****3333', source: '微信群', productTier: '标准版', status: 'confirmed', reportedBy: '王芳', remark: '宝妈群体，兼职创业，预算有限适合标准版', createdAt: '2024-12-14T16:00:00' },
  { id: 'RP-005', customerName: '广州直播基地', contactPerson: '周总', phone: '186****2222', source: '地推活动', productTier: '贴牌版', status: 'pending', reportedBy: '陈晨', remark: '直播基地运营方，旗下50+直播间，有品牌化需求', createdAt: '2024-12-13T11:00:00' },
  { id: 'RP-006', customerName: '上海某教育机构', contactPerson: '孙老师', phone: '136****1111', source: '百度搜索', productTier: '代理版', status: 'rejected', reportedBy: '李芳', remark: '教育行业客户，需求匹配度不高，暂时搁置', createdAt: '2024-12-10T15:00:00' },
];

const tierColors: Record<string, string> = { '标准版': '#3B82F6', '代理版': '#22C55E', '贴牌版': '#A855F7', '合伙人': '#F59E0B' };

export default function ReportingPage() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => mockData.filter((i) => !search || i.customerName.includes(search) || i.contactPerson.includes(search) || i.source.includes(search)), [search]);

  return (
    <Box>
      <SectionHeader title="客户报备" />
      <Box sx={{ mb: 3 }}>
        <SearchInput placeholder="搜索报备记录..." value={search} onChange={setSearch} />
      </Box>
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid item xs={6} sm={3}>
          <Box sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}`, p: 2 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>总报备数</Typography>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: colors.textPrimary }}>6</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}`, p: 2 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>待确认</Typography>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: colors.warning }}>2</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}`, p: 2 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>已确认</Typography>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: colors.info }}>2</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}`, p: 2 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>已成交</Typography>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: colors.success }}>1</Typography>
          </Box>
        </Grid>
      </Grid>
      <TableContainer sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}` }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: colors.bgSecondary }}>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>客户名称</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>联系人</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>来源</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>意向等级</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>备注</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>报备人</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>状态</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((row) => (
              <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: colors.surfaceHover } }}>
                <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>{row.customerName}</TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>{row.contactPerson}<br /><span style={{ color: colors.textTertiary, fontSize: '0.6875rem' }}>{row.phone}</span></TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>{row.source}</TableCell>
                <TableCell><Chip label={row.productTier} size="small" sx={{ backgroundColor: `${tierColors[row.productTier]}1A`, color: tierColors[row.productTier], fontSize: '0.6875rem', height: 20 }} /></TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.remark}</TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>{row.reportedBy}</TableCell>
                <TableCell><StatusBadge status={row.status} size="small" /></TableCell>
                <TableCell sx={{ color: colors.textTertiary, fontSize: '0.75rem' }}>{formatDateTime(row.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
