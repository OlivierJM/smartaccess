import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomDialog({ children, dialogStatus, title, handleSave }) {
  return (
    <Dialog open={dialogStatus.open} onClose={() => dialogStatus.setOpen(false)} maxWidth="lg">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button size='large' variant='contained'  onClick={handleSave}>Save</Button>
        <Button variant='outlined' onClick={() => dialogStatus.setOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
