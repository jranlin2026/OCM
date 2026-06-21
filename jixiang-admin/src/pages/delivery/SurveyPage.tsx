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

interface SurveyRecord {
  id: string;
  customerName: string;
  tier: string;
  surveyType: string;
  status: string;
  satisfaction: number;
  keyFindings: string;
  assignee: string;
  createdAt: string;
}

const mockData: SurveyRecord[] = [
  { id: 'SV-001', customerName: '小美', tier: '代理版', surveyType: '使用体验调研', status: 'completed', satisfaction: 5, keyFindings: 'AI话术生成是最实用功能，建议增加多平台一键分发', assignee: '王芳', createdAt: '2024-12-18T10:00:00' },
  { id: 'SV-002', customerName: '广州星光MCN', tier: '贴牌版', surveyType: '交付满意度调研', status: 'completed', satisfaction: 4, keyFindings: '整体满意，培训环节可以更深入，希望增加定制化报表', assignee: '张明', createdAt: '2024-12-15T14:00:00' },
  { id: 'SV-003', customerName: '赵敏', tier: '合伙人', surveyType: '季度回访调研', status: 'in_progress', satisfaction: 0, keyFindings: '', assignee: '李芳', createdAt: '2024-12-17T09:00:00' },
  { id: 'SV-004', customerName: '杭州品尚电商', tier: '代理版', surveyType: '使用体验调研', status: 'completed', satisfaction: 5, keyFindings: '客户诊断功能帮助团队标准化跟进流程，转化率提升65%', assignee: '王芳', createdAt: '2024-12-12T16:00:00' },
  { id: 'SV-005', customerName: '贝贝母婴连锁', tier: '代理版', surveyType: '交付满意度调研', status: 'pending', satisfaction: 0, keyFindings: '', assignee: '陈晨', createdAt: '2024-12-19T11:00:00' },
];

const tierColors: Record<string, string> = { '标准版': '#3B82F6', '代理版': '#22C55E', '贴牌版': '#A855F7', '合伙人': '#F59E0B' };

export default function SurveyPage() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => mockData.filter((i) => !search || i.customerName.includes(search) || i.surveyType.includes(search)), [search]);

  return (
    <Box>
      <SectionHeader title="客户调研" />
      <Box sx={{ mb: 3 }}>
        <SearchInput placeholder="搜索调研记录..." value={search} onChange={setSearch} />
      </Box>
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}`, p: 2.5 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>已完成调研</Typography>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: 700, color: colors.gold }}>3</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}`, p: 2.5 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>进行中</Typography>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: 700, color: colors.info }}>1</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}`, p: 2.5 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>待开始</Typography>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: 700, color: colors.warning }}>1</Typography>
          </Box>
        </Grid>
      </Grid>
      <TableContainer sx={{ backgroundColor: colors.surface, borderRadius: 3, border: `1px solid ${colors.border}` }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: colors.bgSecondary }}>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>客户名称</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>产品等级</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>调研类型</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>满意度</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>关键发现</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>负责人</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>状态</TableCell>
              <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((row) => (
              <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: colors.surfaceHover } }}>
                <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem' }}>{row.customerName}</TableCell>
                <TableCell>
                  <Chip label={row.tier} size="small" sx={{ backgroundColor: `${tierColors[row.tier]}1A`, color: tierColors[row.tier], fontSize: '0.6875rem', height: 20 }} />
                </TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>{row.surveyType}</TableCell>
                <TableCell sx={{ color: colors.gold, fontSize: '0.8125rem' }}>{row.satisfaction > 0 ? '⭐'.repeat(row.satisfaction) : '—'}</TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.keyFindings || '—'}</TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>{row.assignee}</TableCell>
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
