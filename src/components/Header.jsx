import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { DrawerContext } from '../App';
import { ThemeContext } from '../App';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';
const Header = ({text}) => {
    const {open,openDrawer} = useContext(DrawerContext)
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (

        <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton size="large" color="inherit" aria-label="menu" onClick={openDrawer}>
                        <MenuIcon/>
                </IconButton>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,display: { xl: 'block',lg: 'block',md: 'block',sm: 'none', xs: 'none' }}}>
                    {text}
                </Typography>
                <IconButton size="large" color="inherit" aria-label="menu" href="http://localhost:5173/">
                        <HomeIcon/>
                </IconButton>
                <IconButton size="large" color="inherit" aria-label="menu" href="http://localhost:5173/author">
                        <FaceIcon/>
                </IconButton>
                <IconButton size="large" color="inherit" aria-label="menu" onClick={toggleTheme}>
                        <DarkModeIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>

    )
}

export default Header