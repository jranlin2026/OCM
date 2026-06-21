import { FormEvent, useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { canAccessPath, getDefaultPathForUser, mockAuthUsers } from '@/auth/auth';
import { useAuthStore } from '@/stores/authStore';
import { colors } from '@/theme/tokens';

export default function LoginPage() {
  const { user, login, loginAsDemo, loginError } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('jixiang2026');

  const redirectTo = typeof location.state === 'object' && location.state && 'from' in location.state
    ? String((location.state as { from?: string }).from || getDefaultPathForUser(user))
    : getDefaultPathForUser(user);

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (login(username, password)) {
      const sessionUser = mockAuthUsers[username.trim().toLowerCase()];
      const nextPath = canAccessPath(sessionUser, redirectTo) ? redirectTo : getDefaultPathForUser(sessionUser);
      navigate(nextPath, { replace: true });
    }
  };

  const handleDemoLogin = (demoUsername: string) => {
    if (loginAsDemo(demoUsername)) {
      const sessionUser = mockAuthUsers[demoUsername];
      const nextPath = canAccessPath(sessionUser, redirectTo) ? redirectTo : getDefaultPathForUser(sessionUser);
      navigate(nextPath, { replace: true });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: 'minmax(420px, 0.95fr) 1.05fr' },
        backgroundColor: colors.bgPrimary,
      }}
    >
      <Box
        sx={{
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: { lg: `1px solid ${colors.border}` },
        }}
      >
        <Box sx={{ maxWidth: 420 }}>
          <Typography sx={{ color: colors.gold, fontSize: '0.875rem', fontWeight: 700, mb: 1 }}>
            极享AI 控制中心
          </Typography>
          <Typography sx={{ color: colors.textPrimary, fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 }}>
            登录内部管理系统
          </Typography>
          <Typography sx={{ color: colors.textSecondary, mt: 1.5, lineHeight: 1.7 }}>
            使用演示账号进入系统，后续可平滑替换为 `/auth/login` 和 `/auth/me`。
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Stack spacing={2}>
              <TextField
                label="账号"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
              />
              <TextField
                label="密码"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
              {loginError && <Alert severity="error">{loginError}</Alert>}
              <Button type="submit" variant="contained" size="large">
                登录
              </Button>
            </Stack>
          </Box>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
            <Button variant="outlined" size="small" onClick={() => handleDemoLogin('admin')}>企业管理员</Button>
            <Button variant="outlined" size="small" onClick={() => handleDemoLogin('sales')}>销售经理</Button>
            <Button variant="outlined" size="small" onClick={() => handleDemoLogin('finance')}>财务</Button>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          p: 6,
          background: `linear-gradient(135deg, ${colors.bgSecondary}, ${colors.surface})`,
        }}
      >
        <Box sx={{ maxWidth: 520 }}>
          <Typography sx={{ color: colors.textPrimary, fontSize: '1.5rem', fontWeight: 700, mb: 2 }}>
            角色权限已接入菜单与路由
          </Typography>
          <Stack spacing={1.25}>
            {[
              '企业管理员：查看与管理全部模块',
              '销售经理：聚焦销售成交、项目认知和数据驾驶舱',
              '财务：仅查看合同、结算和经营数据',
            ].map((item) => (
              <Box key={item} sx={{ color: colors.textSecondary, backgroundColor: colors.goldSubtle, border: `1px solid ${colors.borderGold}`, borderRadius: 2, px: 2, py: 1.25 }}>
                {item}
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
