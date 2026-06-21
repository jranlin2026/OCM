import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

export default function DataLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
