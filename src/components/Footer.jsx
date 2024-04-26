import BottomNavigation from '@mui/material/BottomNavigation';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import AddUser from '../features/requests/add';
import UpdateUser from '../features/requests/update';
import DeleteUser from '../features/requests/delete';

const Footer = ({len}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <BottomNavigation
            showLabels
            sx={{position: 'fixed', bottom: 0, left: 0, width: 1.0,zIndex: (theme) => theme.zIndex.drawer + 1 , borderTop: 1, backgroundColor: theme=="dark"?'black':'white'}}
        >
            <AddUser len={len}/>
            <UpdateUser/>
            <DeleteUser/>
        </BottomNavigation>
    )
}

export default Footer
//<BottomNavigationAction label="Add" icon={<AddIcon />}/>
//<BottomNavigationAction label="Edit" icon={<EditIcon />}/>
//<BottomNavigationAction label="Delete" icon={<DeleteIcon />}/>