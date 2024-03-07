import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Footer = () => {
    return (
        <BottomNavigation
            showLabels
            sx={{position: 'fixed', bottom: 0, left: 0, width: 1.0}}
        >
            <BottomNavigationAction label="Add" icon={<AddIcon />} />
            <BottomNavigationAction label="Edit" icon={<EditIcon />} />
            <BottomNavigationAction label="Delete" icon={<DeleteIcon />} />
        </BottomNavigation>
    )
}

export default Footer