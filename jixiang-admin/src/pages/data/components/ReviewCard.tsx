import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ContentCard from '@/components/ui/ContentCard';
import StatusBadge from '@/components/ui/StatusBadge';
import type { OperationReview } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  review: OperationReview;
}

export default function ReviewCard({ review }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ContentCard className="mb-4">
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: colors.textPrimary }}>
              {review.title}
            </Typography>
            <StatusBadge status={review.status} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
              周期：{review.period}
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
              作者：{review.author}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.6 }}>
            {review.summary}
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{ color: colors.textSecondary, mt: 0.5 }}
        >
          <i className={`fa-solid fa-chevron-${expanded ? 'up' : 'down'}`} style={{ fontSize: '0.75rem' }} />
        </IconButton>
      </Box>

      <Collapse in={expanded}>
        {/* 亮点 */}
        {review.highlights.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.success, mb: 0.75 }}>
              亮点 🟢
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {review.highlights.map((h, idx) => (
                <Typography
                  key={idx}
                  component="li"
                  sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.5 }}
                >
                  {h}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {/* 问题 */}
        {review.issues.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.danger, mb: 0.75 }}>
              问题 🔴
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {review.issues.map((issue, idx) => (
                <Typography
                  key={idx}
                  component="li"
                  sx={{ fontSize: '0.8125rem', color: colors.textSecondary, lineHeight: 1.5 }}
                >
                  {issue}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {/* 行动项 */}
        {review.actionItems.length > 0 && (
          <Box>
            <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.info, mb: 0.75 }}>
              行动项
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {review.actionItems.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: colors.bgSecondary,
                    borderRadius: 1.5,
                    px: 1.5,
                    py: 1,
                  }}
                >
                  <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary, flex: 1 }}>
                    {item.action}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
                    <Typography sx={{ fontSize: '0.75rem', color: colors.textTertiary }}>
                      {item.owner}
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: colors.gold }}>
                      {item.deadline}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Collapse>
    </ContentCard>
  );
}
