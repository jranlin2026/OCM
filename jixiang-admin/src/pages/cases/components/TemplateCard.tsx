import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CaseTemplate, CaseCategory } from '@/types';
import ContentCard from '@/components/ui/ContentCard';
import { colors } from '@/theme/tokens';

interface Props {
  template: CaseTemplate;
}

const CATEGORY_LABELS: Record<CaseCategory, string> = {
  [CaseCategory.INDUSTRY]: '行业案例',
  [CaseCategory.PRODUCT]: '产品案例',
  [CaseCategory.REGION]: '区域案例',
  [CaseCategory.TRANSFORMATION]: '转型案例',
};

export default function TemplateCard({ template }: Props) {
  return (
    <ContentCard>
      {/* Category Tag */}
      <Box
        sx={{
          display: 'inline-block',
          px: 1,
          py: 0.25,
          borderRadius: 1,
          fontSize: '0.6875rem',
          fontWeight: 600,
          color: colors.gold,
          backgroundColor: colors.goldSubtle,
          mb: 1,
        }}
      >
        {CATEGORY_LABELS[template.category]}
      </Box>

      <Typography
        sx={{
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: colors.textPrimary,
          mb: 0.5,
        }}
      >
        {template.title}
      </Typography>

      <Typography
        sx={{
          fontSize: '0.75rem',
          color: colors.textSecondary,
          lineHeight: 1.5,
          mb: 1.5,
        }}
      >
        {template.description}
      </Typography>

      {/* Section count */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <i className="fa-solid fa-layer-group" style={{ fontSize: '0.75rem', color: colors.gold }} />
        <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
          {template.sections.length} 个章节
        </Typography>
      </Box>

      {/* Section list */}
      <Box sx={{ mt: 1.5 }}>
        {template.sections.map((section) => (
          <Box
            key={section.id}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1,
              py: 0.5,
              borderBottom: `1px solid ${colors.divider}`,
              '&:last-child': { borderBottom: 'none' },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: colors.gold,
                minWidth: 20,
              }}
            >
              {section.sortOrder}.
            </Typography>
            <Box>
              <Typography sx={{ fontSize: '0.75rem', color: colors.textPrimary }}>
                {section.title}
              </Typography>
              <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary, mt: 0.25 }}>
                {section.hint}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </ContentCard>
  );
}
