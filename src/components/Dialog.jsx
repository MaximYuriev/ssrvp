import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react";
import Button from "./Button";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
const DialogForm = ({children,TextOpen,Title,TextAction,Action,iconbutton}) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const actionClose = () =>{
      setOpen(false);
      Action()
    }
    return (
            <> 
                <BottomNavigationAction label={TextOpen} icon={iconbutton} onClick={handleClickOpen} showLabel/>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>
                    {Title}
                  </DialogTitle>
                  <DialogContent>
                    {children}
                  </DialogContent>
                  <Button label={TextAction} click={actionClose}/>
                </Dialog>
            </>
        )
}

export default DialogForm