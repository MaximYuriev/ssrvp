import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = ({text}) => {
    return (
        <AppBar position="static" className='header'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {text}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header