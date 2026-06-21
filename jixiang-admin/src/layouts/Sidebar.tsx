import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/stores/appStore';
import { navSections } from '@/routes/navItems';
import { colors } from '@/theme/tokens';
import NavSection from '@/components/layout/NavSection';
import NavItem from '@/components/layout/NavItem';

export default function Sidebar() {
  const { sidebarCollapsed, user } = useAppStore();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const sidebarWidth = sidebarCollapsed ? 64 : 240;

  // NavItem 内部已自行判断 active 状态，Sidebar 不需要依赖 pathname
  // 因此导航菜单只在 sidebarCollapsed 变化时才重新渲染
  // 路由变化不会导致导航菜单重渲染，滚动位置自然保持

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: sidebarWidth,
        backgroundColor: colors.bgSecondary,
        borderRight: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.2s',
        zIndex: 1200,
        overflow: 'hidden',
      }}
    >
      {/* 品牌区域 */}
      <Box
        onClick={() => navigate('/dashboard')}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 2,
          py: 2,
          cursor: 'pointer',
          minHeight: 56,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            backgroundColor: colors.gold,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.textOnGold,
            fontWeight: 700,
            fontSize: '0.875rem',
            flexShrink: 0,
          }}
        >
          极
        </Box>
        {!sidebarCollapsed && (
          <Typography
            sx={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: colors.gold,
              whiteSpace: 'nowrap',
            }}
          >
            极享AI
          </Typography>
        )}
      </Box>

      <Divider sx={{ borderColor: colors.border }} />

      {/* 导航菜单 — 路由变化时不会重新渲染，滚动位置稳定 */}
      <Box
        ref={scrollRef}
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          py: 1,
        }}
      >
        {navSections.map((section) => (
          <Box key={section.title}>
            {(section.title === '拓展运营' || section.title === '服务与合规' || section.title === '系统管理') && !sidebarCollapsed && (
              <Divider sx={{ borderColor: colors.divider, mx: 2, my: 0.5 }} />
            )}
            {!sidebarCollapsed && <NavSection title={section.title} />}
            <List dense disablePadding>
              {section.items.map((item) => (
                <NavItem
                  key={item.path}
                  icon={item.icon}
                  label={sidebarCollapsed ? '' : item.label}
                  path={item.path}
                  badge={item.badge}
                  badgeColor={item.badgeColor}
                />
              ))}
            </List>
          </Box>
        ))}
      </Box>

      {/* 底部用户信息 */}
      {!sidebarCollapsed && (
        <>
          <Divider sx={{ borderColor: colors.border }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              py: 1.5,
              flexShrink: 0,
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: colors.gold,
                color: colors.textOnGold,
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              {user.avatar}
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: colors.textPrimary,
                  lineHeight: 1.3,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {user.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.6875rem',
                  color: colors.textTertiary,
                  lineHeight: 1.3,
                }}
              >
                {user.role}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
