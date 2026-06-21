import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { colors } from '@/theme/tokens';

interface Props {
  icon: string;
  label: string;
  path: string;
  disabled?: boolean;
  badge?: string;
  badgeColor?: 'error' | 'info';
}

export default function NavItem({ icon, label, path, disabled = false, badge, badgeColor }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 在组件内部自行判断 active 状态，无需父组件传入
  const active = useMemo(() => {
    if (path === '/dashboard') return pathname === path;
    return pathname.startsWith(path);
  }, [pathname, path]);

  const handleClick = () => {
    if (!disabled) {
      navigate(path);
    }
  };

  return (
    <Box sx={{ position: 'relative', px: 1, py: 0.25 }}>
      {active && (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 3,
            height: 24,
            backgroundColor: colors.gold,
            borderRadius: '0 2px 2px 0',
          }}
        />
      )}
      <ListItemButton
        onClick={handleClick}
        disabled={disabled}
        sx={{
          borderRadius: 1.5,
          py: 0.75,
          px: 1.5,
          minHeight: 40,
          backgroundColor: active ? colors.goldSubtle : 'transparent',
          '&:hover': {
            backgroundColor: disabled ? 'transparent' : colors.goldSubtle,
          },
          '&.Mui-disabled': {
            opacity: 0.4,
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 36,
            color: active ? colors.gold : colors.textSecondary,
            fontSize: '1rem',
            '& .nav-icon': {
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 20,
              height: 20,
            },
          }}
        >
          <span className="nav-icon">
            <i className={icon} />
          </span>
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{
            '& .MuiListItemText-primary': {
              fontSize: '0.875rem',
              fontWeight: active ? 600 : 400,
              color: active ? colors.gold : colors.textPrimary,
            },
          }}
        />
        {badge && (
          <Chip
            label={badge}
            size="small"
            color={badgeColor || 'info'}
            sx={{ height: 20, fontSize: '0.625rem', fontWeight: 600 }}
          />
        )}
      </ListItemButton>
    </Box>
  );
}
