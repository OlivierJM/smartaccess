import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomDialog({ children, dialogStatus, title, handleSave, reset }) {
  return (
    <Dialog open={dialogStatus.open} onClose={reset} maxWidth="lg" disableEscapeKeyDown>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {dialogStatus.modalType === 'update' && (
          <Button
            size="large"
            color="error"
            variant="contained"
            onClick={() => handleSave('delete')}
          >
            Delete
          </Button>
        )}
        <Button size="large" variant="contained" onClick={() => handleSave('save')}>
          Save
        </Button>
        <Button variant="outlined" onClick={reset}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
