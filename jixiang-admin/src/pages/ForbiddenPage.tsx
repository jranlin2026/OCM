import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { getDefaultPathForUser } from '@/auth/auth';
import { useAuthStore } from '@/stores/authStore';
import { colors } from '@/theme/tokens';

export default function ForbiddenPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  return (
    <Box
      sx={{
        minHeight: 420,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: 420 }}>
        <Typography sx={{ color: colors.gold, fontSize: '0.875rem', fontWeight: 700, mb: 1 }}>
          403
        </Typography>
        <Typography sx={{ color: colors.textPrimary, fontSize: '1.5rem', fontWeight: 700 }}>
          无权限访问
        </Typography>
        <Typography sx={{ color: colors.textSecondary, mt: 1.5, lineHeight: 1.7 }}>
          当前角色没有访问该页面的权限，请切换账号或返回可访问的工作台。
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate(getDefaultPathForUser(user), { replace: true })}
        >
          返回可访问页面
        </Button>
      </Box>
    </Box>
  );
}
