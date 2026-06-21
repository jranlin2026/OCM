import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/stores/appStore';
import { useAuthStore } from '@/stores/authStore';
import { useNavigation } from '@/hooks/useNavigation';
import { getCurrentDate } from '@/utils/formatters';
import { colors } from '@/theme/tokens';

export default function Topbar() {
  const { toggleSidebar } = useAppStore();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const { currentTitle } = useNavigation();
  const today = getCurrentDate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 56,
        px: 2.5,
        backgroundColor: colors.bgPrimary,
        borderBottom: `1px solid ${colors.border}`,
        gap: 2,
      }}
    >
      {/* 折叠按钮 */}
      <IconButton onClick={toggleSidebar} size="small" sx={{ color: colors.textSecondary }}>
        <MenuIcon fontSize="small" />
      </IconButton>

      {/* 页面标题 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            width: 4,
            height: 20,
            backgroundColor: colors.gold,
            borderRadius: '0 2px 2px 0',
          }}
        />
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 600,
            color: colors.textPrimary,
          }}
        >
          {currentTitle}
        </Typography>
      </Box>

      {/* 中部弹性撑开 */}
      <Box sx={{ flex: 1 }} />

      {/* 右侧操作区 */}
      <Typography
        sx={{
          fontSize: '0.8125rem',
          color: colors.textTertiary,
          whiteSpace: 'nowrap',
        }}
      >
        {today}
      </Typography>

      <Tooltip title="通知" arrow>
        <IconButton size="small" aria-label="通知" sx={{ color: colors.textSecondary }}>
          <NotificationsIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="退出登录" arrow>
        <IconButton size="small" aria-label="退出登录" onClick={handleLogout} sx={{ color: colors.textSecondary }}>
          <LogoutIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Avatar
        sx={{
          width: 30,
          height: 30,
          backgroundColor: colors.gold,
          color: colors.textOnGold,
          fontSize: '0.75rem',
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        {user?.avatar}
      </Avatar>
    </Box>
  );
}
