import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionHeader from '@/components/ui/SectionHeader';
import SOPTimeline from './components/SOPTimeline';
import { useSOPs } from '@/hooks/useMockData';
import { colors } from '@/theme/tokens';

export default function SOPPage() {
  const sops = useSOPs();
  const [activeSOP, setActiveSOP] = useState<string>(sops[0]?.id || '');

  return (
    <Box>
      <SectionHeader title="升单SOP" />

      {/* SOP 切换标签 */}
      <Box sx={{ display: 'flex', gap: 1.5, mb: 2.5, flexWrap: 'wrap' }}>
        {sops.map((sop) => {
          const isActive = activeSOP === sop.id;
          return (
            <Box
              key={sop.id}
              onClick={() => setActiveSOP(sop.id)}
              sx={{
                px: 2,
                py: 0.75,
                borderRadius: 2,
                cursor: 'pointer',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: isActive ? colors.gold : colors.textSecondary,
                backgroundColor: isActive ? colors.goldSubtle : colors.surface,
                border: `1px solid ${isActive ? colors.gold : colors.border}`,
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: colors.gold,
                  backgroundColor: isActive ? colors.goldMuted : colors.goldSubtle,
                },
              }}
            >
              {sop.title}
            </Box>
          );
        })}
      </Box>

      {/* 活跃 SOP 详情 */}
      {sops
        .filter((s) => s.id === activeSOP)
        .map((sop) => (
          <Box key={sop.id}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.8125rem',
                  color: colors.textSecondary,
                }}
              >
                适用阶段：
              </Typography>
              <Box
                sx={{
                  px: 1.5,
                  py: 0.25,
                  borderRadius: 1,
                  backgroundColor: `${colors.info}1A`,
                  color: colors.info,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                {sop.targetStage}
              </Box>
            </Box>
            <SOPTimeline steps={sop.steps} />
          </Box>
        ))}
    </Box>
  );
}
