import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider,createTheme } from '@mui/material/styles';

export default function Msg({msg,setMsg}) {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={msg.open}
        onClose={()=>setMsg({open:false,msg:""})}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Admin Message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg.msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setMsg({open:false,msg:""})}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
