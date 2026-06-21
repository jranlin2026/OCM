import Box from '@mui/material/Box';
import SectionHeader from '@/components/ui/SectionHeader';
import ReviewCard from './components/ReviewCard';
import { useOperationReviews } from '@/hooks/useMockData';

export default function ReviewListPage() {
  const reviews = useOperationReviews();

  return (
    <Box>
      <SectionHeader title="运营复盘" />
      {reviews.length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            color: '#6B6B82',
            fontSize: '0.875rem',
          }}
        >
          暂无复盘记录
        </Box>
      ) : (
        reviews.map((review) => <ReviewCard key={review.id} review={review} />)
      )}
    </Box>
  );
}
