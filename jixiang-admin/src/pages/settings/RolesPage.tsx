import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchInput from '@/components/ui/SearchInput';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { colors } from '@/theme/tokens';
import { formatDate } from '@/utils/formatters';

interface RoleRecord {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
  status: string;
  createdAt: string;
}

const mockData: RoleRecord[] = [
  { id: 'R-001', name: '超级管理员', description: '拥有系统全部权限，可管理所有模块和用户', permissions: ['全部模块', '用户管理', '角色管理', '系统设置', '数据查看', '数据导出'], userCount: 1, status: 'active', createdAt: '2024-01-01' },
  { id: 'R-002', name: '销售经理', description: '管理销售成交模块，可查看和编辑话术、诊断、报价等', permissions: ['销售成交', '项目认知', '数据驾驶舱', '客户报备'], userCount: 3, status: 'active', createdAt: '2024-02-01' },
  { id: 'R-003', name: '招商专员', description: '管理招商代理模块，可查看代理商和佣金数据', permissions: ['招商代理', '获客引流', '案例见证'], userCount: 2, status: 'active', createdAt: '2024-03-01' },
  { id: 'R-004', name: '运营专员', description: '管理运营相关模块，含获客、内容、数据等', permissions: ['获客引流', '内容素材', '数据运营', '培训赋能'], userCount: 4, status: 'active', createdAt: '2024-03-10' },
  { id: 'R-005', name: '内容编辑', description: '管理内容素材和案例模块', permissions: ['内容素材', '案例见证', '品牌资产'], userCount: 2, status: 'active', createdAt: '2024-04-20' },
  { id: 'R-006', name: '财务', description: '查看佣金结算和定价策略，不可编辑', permissions: ['佣金结算(只读)', '定价策略(只读)', '数据驾驶舱(只读)'], userCount: 1, status: 'inactive', createdAt: '2024-06-01' },
  { id: 'R-007', name: '代理商', description: '外部代理商角色，仅可查看自己的数据和素材', permissions: ['内容素材(只读)', '培训赋能', '个人佣金'], userCount: 6, status: 'active', createdAt: '2024-05-15' },
];

export default function RolesPage() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => mockData.filter((i) => !search || i.name.includes(search) || i.description.includes(search)), [search]);

  return (
    <Box>
      <SectionHeader title="角色管理" />
      <Box sx={{ mb: 3 }}>
        <SearchInput placeholder="搜索角色..." value={search} onChange={setSearch} />
      </Box>
      <Grid container spacing={2.5}>
        {filtered.map((role) => (
          <Grid item xs={12} sm={6} md={4} key={role.id}>
            <ContentCard>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: colors.textPrimary }}>{role.name}</Typography>
                <StatusBadge status={role.status === 'active' ? 'published' : 'draft'} size="small" />
              </Box>
              <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.6, mb: 2 }}>
                {role.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                {role.permissions.map((perm) => (
                  <Chip
                    key={perm}
                    label={perm}
                    size="small"
                    sx={{
                      fontSize: '0.6875rem',
                      height: 22,
                      backgroundColor: perm.includes('只读') ? colors.surfaceElevated : colors.goldSubtle,
                      color: perm.includes('只读') ? colors.textTertiary : colors.gold,
                      border: `1px solid ${perm.includes('只读') ? colors.border : colors.borderGold}`,
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 1.5, borderTop: `1px solid ${colors.border}` }}>
                <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
                  <i className="fa-solid fa-users" style={{ marginRight: 6 }} />
                  {role.userCount} 位用户
                </Typography>
                <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
                  创建于 {formatDate(role.createdAt)}
                </Typography>
              </Box>
            </ContentCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
