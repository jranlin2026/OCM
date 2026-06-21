import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { CommissionPolicy, AgentLevel, ProductTier } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  data: CommissionPolicy[];
}

const AGENT_LEVEL_COLORS: Record<AgentLevel, string> = {
  [AgentLevel.BRONZE]: '#CD7F32',
  [AgentLevel.SILVER]: '#A0A0B8',
  [AgentLevel.GOLD]: '#D4A853',
  [AgentLevel.PLATINUM]: '#E5E7EB',
  [AgentLevel.DIAMOND]: '#3B82F6',
};

const AGENT_LEVEL_LABELS: Record<AgentLevel, string> = {
  [AgentLevel.BRONZE]: '青铜',
  [AgentLevel.SILVER]: '白银',
  [AgentLevel.GOLD]: '黄金',
  [AgentLevel.PLATINUM]: '铂金',
  [AgentLevel.DIAMOND]: '钻石',
};

const PRODUCT_TIER_LABELS: Record<ProductTier, string> = {
  [ProductTier.STANDARD]: '基础版',
  [ProductTier.AGENT]: '代理版',
  [ProductTier.OEM]: '贴牌版',
  [ProductTier.PARTNER]: '合伙人版',
};

export default function CommissionRateTable({ data }: Props) {
  // Build rate matrix: level -> productTier -> rate
  const allLevels = Object.values(AgentLevel);
  const allTiers = Object.values(ProductTier);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {data.map((policy) => (
        <Box key={policy.id}>
          {/* Policy Header */}
          <Box sx={{ mb: 1.5 }}>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: colors.textPrimary, mb: 0.5 }}>
              {policy.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
                结算周期: {policy.settlementCycle === 'monthly' ? '月结' : policy.settlementCycle === 'quarterly' ? '季结' : '周结'}
              </Box>
              <Box sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
                生效日期: {policy.effectiveDate}
              </Box>
            </Box>
          </Box>

          {/* Rate Table */}
          <TableContainer>
            <Table sx={{ minWidth: 600 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>代理等级</TableCell>
                  {allTiers.map((tier) => (
                    <TableCell key={tier} sx={{ textAlign: 'center', fontWeight: 600 }}>
                      {PRODUCT_TIER_LABELS[tier]}
                    </TableCell>
                  ))}
                  <TableCell sx={{ textAlign: 'center', fontWeight: 600 }}>条件</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allLevels.map((level) => {
                  // Check if this level applies to this policy
                  if (!policy.applicableLevels.includes(level)) return null;
                  const levelColor = AGENT_LEVEL_COLORS[level];
                  const rates = policy.commissionRates;
                  const conditions = policy.conditions;

                  return (
                    <TableRow key={level}>
                      <TableCell>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: levelColor,
                            fontWeight: 600,
                            fontSize: '0.8125rem',
                          }}
                        >
                          <Box
                            sx={{
                              width: 10,
                              height: 10,
                              borderRadius: '50%',
                              backgroundColor: levelColor,
                              flexShrink: 0,
                            }}
                          />
                          {AGENT_LEVEL_LABELS[level]}
                        </Box>
                      </TableCell>
                      {allTiers.map((tier) => {
                        const rateEntry = rates.find((r) => r.productTier === tier);
                        return (
                          <TableCell key={tier} sx={{ textAlign: 'center' }}>
                            {rateEntry ? (
                              <Typography
                                sx={{
                                  fontSize: '0.875rem',
                                  fontWeight: 700,
                                  color: colors.gold,
                                }}
                              >
                                {rateEntry.rate}%
                              </Typography>
                            ) : (
                              <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
                                -
                              </Typography>
                            )}
                          </TableCell>
                        );
                      })}
                      <TableCell sx={{ textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                          {conditions.map((c, i) => (
                            <Typography key={i} sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
                              {c}
                            </Typography>
                          ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
}
