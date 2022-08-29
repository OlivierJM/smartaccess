import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomDialog({ children, dialogStatus, title }) {
  const handleClose = () => {
    dialogStatus.setOpen(false);
  };
  return (
    <Dialog open={dialogStatus.open} onClose={handleClose} maxWidth="lg">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button size='large' variant='contained'  onClick={handleClose}>Save</Button>
        <Button variant='outlined' onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
