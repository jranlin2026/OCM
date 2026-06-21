import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import { DiagnosisTemplate } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  template: DiagnosisTemplate;
}

export default function DiagnosisForm({ template }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface,
        borderRadius: 3,
        border: `1px solid ${colors.border}`,
        p: 2.5,
      }}
    >
      {/* 模板标题 */}
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 600,
          color: colors.textPrimary,
          mb: 2.5,
          pb: 1.5,
          borderBottom: `1px solid ${colors.divider}`,
        }}
      >
        {template.title}
      </Typography>

      {/* 问题列表 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {template.questions.map((question) => (
          <Box key={question.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
              <Typography
                sx={{
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: colors.textPrimary,
                }}
              >
                {question.label}
              </Typography>
              {question.required && (
                <Typography sx={{ fontSize: '0.75rem', color: colors.danger }}>*</Typography>
              )}
            </Box>

            {question.type === 'text' && (
              <TextField
                size="small"
                disabled
                fullWidth
                placeholder="请输入..."
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: colors.bgSecondary,
                    '& fieldset': { borderColor: colors.border },
                  },
                  '& .MuiInputBase-input': {
                    color: colors.textSecondary,
                    fontSize: '0.8125rem',
                  },
                  '& .Mui-disabled': {
                    WebkitTextFillColor: `${colors.textTertiary} !important`,
                  },
                }}
              />
            )}

            {question.type === 'select' && (
              <FormControl fullWidth size="small">
                <Select
                  disabled
                  value=""
                  displayEmpty
                  sx={{
                    backgroundColor: colors.bgSecondary,
                    color: colors.textTertiary,
                    fontSize: '0.8125rem',
                    '& fieldset': { borderColor: colors.border },
                    '&.Mui-disabled': {
                      WebkitTextFillColor: `${colors.textTertiary} !important`,
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    请选择
                  </MenuItem>
                  {question.options?.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            {question.type === 'radio' && (
              <RadioGroup row>
                {question.options?.map((opt) => (
                  <FormControlLabel
                    key={opt}
                    value={opt}
                    control={
                      <Radio
                        disabled
                        size="small"
                        sx={{
                          color: colors.borderStrong,
                          '&.Mui-disabled': { color: colors.borderStrong },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
                        {opt}
                      </Typography>
                    }
                    disabled
                  />
                ))}
              </RadioGroup>
            )}

            {question.type === 'checkbox' && (
              <FormGroup row>
                {question.options?.map((opt) => (
                  <FormControlLabel
                    key={opt}
                    value={opt}
                    control={
                      <Checkbox
                        disabled
                        size="small"
                        sx={{
                          color: colors.borderStrong,
                          '&.Mui-disabled': { color: colors.borderStrong },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
                        {opt}
                      </Typography>
                    }
                    disabled
                  />
                ))}
              </FormGroup>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
