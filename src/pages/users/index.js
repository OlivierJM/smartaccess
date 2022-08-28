// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import useSWR from 'swr';
import { Avatar } from '@mui/material';
import dayjs from 'dayjs';

const statusObj = {
  active: { color: 'primary' },
  deactivated: { color: 'error' },
};

const DashboardTable = () => {
  const { data } = useSWR(`/api/users`);

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Enrolled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                hover
                key={row._id}
                sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
              >
                <TableCell>
                  <Avatar
                    alt={row.name}
                    src={row.image}
                    sx={{ width: '2.5rem', height: '2.5rem' }}
                    referrerPolicy="no-referrer"
                  />
                </TableCell>
                <TableCell
                  sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}
                    >
                      {row.name}
                    </Typography>
                    <Typography variant="caption">{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 },
                    }}
                  />
                </TableCell>
                <TableCell>{dayjs(row.createdAt).format('DD/MM/YYYY') }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

// export async function getServerSideProps(context) {
//   context.res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=59'
//   );
//   return {
//     props: {},
//   };
// }

export default DashboardTable;
