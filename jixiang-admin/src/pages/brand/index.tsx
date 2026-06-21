import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

export default function BrandLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
