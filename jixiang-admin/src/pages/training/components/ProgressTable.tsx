import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { StudentProgress, TrainingStatus } from '@/types';
import { colors } from '@/theme/tokens';
import { formatDate } from '@/utils/formatters';
import ProgressBar from './ProgressBar';

interface Props {
  data: StudentProgress[];
}

const STATUS_LABELS: Record<TrainingStatus, string> = {
  [TrainingStatus.NOT_STARTED]: '未开始',
  [TrainingStatus.IN_PROGRESS]: '进行中',
  [TrainingStatus.COMPLETED]: '已完成',
  [TrainingStatus.EXPIRED]: '已过期',
};

const STATUS_COLORS: Record<TrainingStatus, string> = {
  [TrainingStatus.NOT_STARTED]: '#6B6B82',
  [TrainingStatus.IN_PROGRESS]: '#F59E0B',
  [TrainingStatus.COMPLETED]: '#22C55E',
  [TrainingStatus.EXPIRED]: '#EF4444',
};

export default function ProgressTable({ data }: Props) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={thSx}>学生</TableCell>
            <TableCell sx={thSx}>训练营</TableCell>
            <TableCell sx={thSx}>课程</TableCell>
            <TableCell sx={thSx}>进度</TableCell>
            <TableCell sx={thSx}>状态</TableCell>
            <TableCell sx={thSx}>最近访问</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const statusColor = STATUS_COLORS[row.status];
            return (
              <TableRow
                key={row.id}
                sx={{
                  '&:hover': { backgroundColor: colors.surfaceHover },
                  '& td': { borderBottom: `1px solid ${colors.divider}` },
                }}
              >
                <TableCell sx={tdSx}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: colors.goldSubtle,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-user" style={{ fontSize: '0.6875rem', color: colors.gold }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.8125rem', color: colors.textPrimary }}>
                      {row.studentName}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={tdSx}>
                  <Typography sx={{ fontSize: '0.75rem', color: colors.textSecondary }}>
                    {row.campTitle}
                  </Typography>
                </TableCell>
                <TableCell sx={tdSx}>
                  <Typography sx={{ fontSize: '0.75rem', color: colors.textSecondary }}>
                    {row.courseTitle}
                  </Typography>
                </TableCell>
                <TableCell sx={{ ...tdSx, minWidth: 160 }}>
                  <ProgressBar value={row.progress} height={6} />
                </TableCell>
                <TableCell sx={tdSx}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 0.75,
                      py: 0.25,
                      borderRadius: 0.5,
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      color: statusColor,
                      backgroundColor: `${statusColor}1A`,
                    }}
                  >
                    {STATUS_LABELS[row.status]}
                  </Box>
                </TableCell>
                <TableCell sx={tdSx}>
                  <Typography sx={{ fontSize: '0.6875rem', color: colors.textTertiary }}>
                    {formatDate(row.lastAccessAt)}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const thSx = {
  fontSize: '0.75rem',
  fontWeight: 600,
  color: colors.textTertiary,
  backgroundColor: colors.bgSecondary,
  borderBottom: `1px solid ${colors.divider}`,
  py: 1.5,
};

const tdSx = {
  fontSize: '0.8125rem',
  color: colors.textPrimary,
  py: 1.5,
};
