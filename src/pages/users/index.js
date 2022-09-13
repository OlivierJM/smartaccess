// ** MUI Imports
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import EditIcon from '@mui/icons-material/Edit';
import useSWR from 'swr';
import { Avatar, Button } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import Dialog from 'src/views/custom-dialog';
import UserForm from 'src/views/form-layouts/UserForm';

const statusObj = {
  active: { color: 'primary' },
  inactive: { color: 'error' },
  pending: { color: 'warning' },
};

const UserList = () => {
  const { data } = useSWR(`/api/users`);
  const [open, setOpen] = useState(false);
  const [formaData, setData] = useState({});
  const [modalType, setModalType] = useState('add');

  const type = {
    add: 'Add user',
    update: 'Update User',
  };

  function handleEditUser(row, type) {
    setData(row);
    setOpen(!open);
    setModalType(type);
  }

  function handleSave(type) {
    console.log(type);
    reset();
  }

  function reset() {
    setData({});
    setOpen(!open);
    setModalType('add');
  }

  return (
    <>
      <Dialog
        title={type[modalType]}
        dialogStatus={{ open, setOpen, modalType }}
        handleSave={handleSave}
        reset={reset}
      >
        <UserForm formData={formaData} setData={setData} />
      </Dialog>
      <Button onClick={() => setOpen(true)}>Add User</Button>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Enrolled</TableCell>
              <TableCell>Action</TableCell>
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
                <TableCell sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>
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
                <TableCell>{dayjs(row.createdAt).format('DD/MM/YYYY')}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditUser(row, 'update')}>
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserList;
