import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import { colors } from '@/theme/tokens';
import StatusBadge from '@/components/ui/StatusBadge';
import type { Agent } from '@/types';
import { AgentLevel } from '@/types';

interface Props {
  agents: Agent[];
}

const AGENT_LEVEL_CONFIG: Record<AgentLevel, { label: string; color: string }> = {
  [AgentLevel.BRONZE]: { label: '青铜', color: '#8B7355' },
  [AgentLevel.SILVER]: { label: '白银', color: '#A0A0B8' },
  [AgentLevel.GOLD]: { label: '黄金', color: '#F59E0B' },
  [AgentLevel.PLATINUM]: { label: '铂金', color: '#A855F7' },
  [AgentLevel.DIAMOND]: { label: '钻石', color: '#3B82F6' },
};

function formatCurrency(val: number): string {
  return val.toLocaleString('zh-CN');
}

export default function AgentTable({ agents }: Props) {
  return (
    <TableContainer
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {['姓名', '电话', '代理等级', '区域', '总销售额', '总佣金', '协议数', '状态'].map((h) => (
              <TableCell
                key={h}
                sx={{
                  color: colors.textSecondary,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  borderBottom: `1px solid ${colors.divider}`,
                  py: 1.5,
                }}
              >
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {agents.map((agent) => {
            const levelCfg = AGENT_LEVEL_CONFIG[agent.level];
            return (
              <TableRow
                key={agent.id}
                sx={{
                  '&:hover': { backgroundColor: colors.surfaceHover },
                  '& td': { borderBottom: `1px solid ${colors.divider}`, py: 1.25 },
                }}
              >
                <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>
                  {agent.name}
                </TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>
                  {agent.phone}
                </TableCell>
                <TableCell>
                  <Chip
                    label={levelCfg.label}
                    size="small"
                    sx={{
                      height: 22,
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      backgroundColor: levelCfg.color,
                      borderRadius: 1,
                      '& .MuiChip-label': { px: 1 },
                    }}
                  />
                </TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>
                  {agent.region}
                </TableCell>
                <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem', fontWeight: 500 }}>
                  ¥{formatCurrency(agent.totalSales)}
                </TableCell>
                <TableCell sx={{ color: colors.textPrimary, fontSize: '0.8125rem' }}>
                  ¥{formatCurrency(agent.totalCommission)}
                </TableCell>
                <TableCell sx={{ color: colors.textSecondary, fontSize: '0.8125rem' }}>
                  {agent.agreementCount}
                </TableCell>
                <TableCell>
                  <StatusBadge status={agent.status} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
