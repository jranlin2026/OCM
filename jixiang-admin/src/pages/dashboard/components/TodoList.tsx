import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { TodoItem } from '@/types';
import { colors } from '@/theme/tokens';
import ContentCard from '@/components/ui/ContentCard';

interface Props {
  todos: TodoItem[];
}

const PRIORITY_COLORS: Record<string, string> = {
  high: '#EF4444',
  medium: '#F59E0B',
  low: '#6B6B82',
};

const PRIORITY_LABELS: Record<string, string> = {
  high: '高',
  medium: '中',
  low: '低',
};

export default function TodoList({ todos }: Props) {
  return (
    <ContentCard title="今日待办">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {todos.map((todo) => {
          const priorityColor = PRIORITY_COLORS[todo.priority];
          return (
            <Box
              key={todo.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                py: 1,
                borderBottom: `1px solid ${colors.divider}`,
                '&:last-child': { borderBottom: 'none' },
                opacity: todo.completed ? 0.5 : 1,
              }}
            >
              <Checkbox
                checked={todo.completed}
                size="small"
                sx={{
                  color: colors.borderStrong,
                  '&.Mui-checked': { color: colors.success },
                  p: 0.5,
                }}
              />
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: priorityColor,
                  flexShrink: 0,
                }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: '0.8125rem',
                    color: todo.completed ? colors.textTertiary : colors.textPrimary,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    fontWeight: todo.completed ? 400 : 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {todo.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.25 }}>
                  <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
                    {todo.module}
                  </Typography>
                  <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
                    {todo.deadline}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  color: priorityColor,
                  backgroundColor: `${priorityColor}1A`,
                  px: 0.75,
                  py: 0.25,
                  borderRadius: 0.5,
                  flexShrink: 0,
                }}
              >
                {PRIORITY_LABELS[todo.priority]}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </ContentCard>
  );
}
