import Box from '@mui/material/Box';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useAppStore } from '@/stores/appStore';
import { colors } from '@/theme/tokens';

interface Props {
  children?: ReactNode;
}

export default function AppLayout({ children }: Props) {
  const { sidebarCollapsed } = useAppStore();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: colors.bgPrimary }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: sidebarCollapsed ? '64px' : '240px',
          transition: 'margin-left 0.2s',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Topbar />
        <Box sx={{ p: 3, flex: 1 }}>
          {children ?? <Outlet />}
        </Box>
      </Box>
    </Box>
  );
}
