import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { AcceptanceCriteria } from '@/types';
import { colors } from '@/theme/tokens';

interface Props {
  data: AcceptanceCriteria[];
}

export default function AcceptanceTable({ data }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {data.map((criteria) => (
        <Box key={criteria.id}>
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: colors.textPrimary,
              mb: 1.5,
            }}
          >
            {criteria.title}
          </Typography>
          <TableContainer>
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: 100 }}>分类</TableCell>
                  <TableCell sx={{ width: 140 }}>标准项</TableCell>
                  <TableCell>描述</TableCell>
                  <TableCell sx={{ width: 200 }}>验收标准</TableCell>
                  <TableCell sx={{ width: 80, textAlign: 'center' }}>是否必选</TableCell>
                  <TableCell sx={{ width: 130 }}>验收方式</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {criteria.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
                        {criteria.title}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: colors.textPrimary }}>
                        {item.required && <span style={{ color: colors.danger, marginRight: 2 }}>*</span>}
                        {item.label}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
                        {item.description}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '0.8125rem', color: colors.textSecondary }}>
                        {item.standard}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {item.required ? (
                        <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: colors.danger }}>
                          必选
                        </Typography>
                      ) : (
                        <Typography sx={{ fontSize: '0.8125rem', color: colors.textTertiary }}>
                          可选
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          px: 1,
                          py: 0.25,
                          borderRadius: 0.75,
                          backgroundColor: `${colors.info}1A`,
                          color: colors.info,
                          fontSize: '0.6875rem',
                          fontWeight: 500,
                        }}
                      >
                        {item.method}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
}
