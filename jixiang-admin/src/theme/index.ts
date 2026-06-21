import { createTheme } from '@mui/material/styles';
import { colors, font, radius, shadow } from './tokens';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.gold,
      light: colors.goldHover,
      dark: colors.goldActive,
      contrastText: colors.textOnGold,
    },
    background: {
      default: colors.bgPrimary,
      paper: colors.surface,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    divider: colors.border,
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.danger },
    info: { main: colors.info },
  },
  typography: {
    fontFamily: font.sans,
    allVariants: {
      fontFamily: font.sans,
    },
    h1: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 },
    h2: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.35 },
    h3: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 },
    h4: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.45 },
    body1: { fontSize: '0.875rem', lineHeight: 1.5 },
    body2: { fontSize: '0.8125rem', lineHeight: 1.5 },
    caption: { fontSize: '0.75rem', lineHeight: 1.4, color: colors.textTertiary },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.bgPrimary,
          fontFamily: font.sans,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.surface,
          borderRadius: radius.lg,
          boxShadow: shadow.md,
          border: `1px solid ${colors.border}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: radius.md,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '8px 20px',
        },
        containedPrimary: {
          backgroundColor: colors.gold,
          color: colors.textOnGold,
          '&:hover': {
            backgroundColor: colors.goldHover,
          },
        },
        outlinedPrimary: {
          borderColor: colors.gold,
          color: colors.gold,
          '&:hover': {
            borderColor: colors.goldHover,
            backgroundColor: colors.goldSubtle,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: colors.textSecondary,
          '&.Mui-selected': {
            color: colors.gold,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: colors.gold,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.bgSecondary,
            '& fieldset': {
              borderColor: colors.border,
            },
            '&:hover fieldset': {
              borderColor: colors.borderStrong,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.gold,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.textTertiary,
            '&.Mui-focused': {
              color: colors.gold,
            },
          },
          '& .MuiInputBase-input': {
            color: colors.textPrimary,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: radius.sm,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root:nth-of-type(even)': {
            backgroundColor: '#252540',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgSecondary,
          '& .MuiTableCell-head': {
            color: colors.textSecondary,
            fontWeight: 600,
            fontSize: '0.8125rem',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.border}`,
          color: colors.textPrimary,
          fontSize: '0.875rem',
          padding: '12px 16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: `1px solid ${colors.border}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&:hover': {
            backgroundColor: colors.goldSubtle,
          },
        },
      },
    },
  },
});

export default theme;
