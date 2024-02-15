import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

const LoginAction = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      
    >
      <DialogTitle color={'error'}>Not Logged In</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are currently not logged in. Please log in to save your progress.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} variant='outlined' color='error'>
          Remind me later
        </Button>
        <Button autoFocus variant='outlined' color='success' onClick={() => setOpen(false)}>
          Login now
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginAction;
