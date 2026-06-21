import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionHeader from '@/components/ui/SectionHeader';
import ContentCard from '@/components/ui/ContentCard';
import { colors } from '@/theme/tokens';

/* ============= 项目总览静态内容 ============= */

const brandStory = `极享AI成立于2023年，是国内领先的AI直播带货赋能平台。我们致力于通过人工智能技术，为中小企业和个人创业者提供从话术生成到客户成交的全链路智能解决方案。平台累计服务超过700家企业客户，覆盖直播带货、私域运营、品牌招商等多个业务场景。`;

const founderIntro = `张明远 — 极享AI创始人兼CEO
连续创业者，前某头部电商平台副总裁。拥有15年电商与AI行业经验，曾主导多个千万级AI项目的研发与交付。坚信"AI不是取代人，而是让人更强大"的理念，致力于打造人人可用的AI销售赋能工具。`;

const strategicPosition = `极享AI定位为"AI直播带货一站式赋能平台"，聚焦"AI+销售"赛道，以"让每场直播都有AI军师"为使命。通过AI话术生成、客户智能诊断、自动报价方案三大核心能力，帮助用户实现从获客到成交的全流程提效。我们的愿景是三年内服务10万家企业客户，成为AI直播带货领域的第一品牌。`;

const businessChain = [
  { label: '直播获客', description: 'AI话术引流，精准捕获意向客户' },
  { label: '899入门锁客', description: '标准版低价锁定，快速建立信任' },
  { label: '诊断筛选', description: 'AI智能诊断，挖掘客户真实需求' },
  { label: '高客单升单', description: '阶梯式升单，推动代理版/贴牌版转化' },
  { label: '交付服务', description: '全程陪跑，确保客户成功' },
];

export default function OverviewPage() {
  return (
    <Box>
      <SectionHeader title="极享AI项目总览" />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {/* 品牌故事 */}
        <ContentCard title="品牌故事">
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: colors.textSecondary,
              lineHeight: 1.7,
              whiteSpace: 'pre-wrap',
            }}
          >
            {brandStory}
          </Typography>
        </ContentCard>

        {/* 创始人介绍 */}
        <ContentCard title="创始人介绍">
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: colors.textSecondary,
              lineHeight: 1.7,
              whiteSpace: 'pre-wrap',
            }}
          >
            {founderIntro}
          </Typography>
        </ContentCard>

        {/* 战略定位 */}
        <ContentCard title="战略定位">
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: colors.textSecondary,
              lineHeight: 1.7,
              whiteSpace: 'pre-wrap',
            }}
          >
            {strategicPosition}
          </Typography>
        </ContentCard>

        {/* 业务链路图 */}
        <ContentCard title="业务链路图">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {businessChain.map((step, index) => (
              <Box
                key={step.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  flex: 1,
                  minWidth: 120,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: colors.goldSubtle,
                      border: `2px solid ${colors.gold}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 0.75,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: colors.gold,
                      }}
                    >
                      {index + 1}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: colors.textPrimary,
                      mb: 0.25,
                    }}
                  >
                    {step.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.6875rem',
                      color: colors.textTertiary,
                      lineHeight: 1.4,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
                {index < businessChain.length - 1 && (
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      color: colors.gold,
                      opacity: 0.6,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </ContentCard>
      </Box>
    </Box>
  );
}
