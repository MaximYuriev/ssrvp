import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Drawer } from '@mui/material';
import { DrawerContext } from '../App';
import { ThemeContext } from '../App';
import { useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';



const Menu = ({items}) => {

    const {open,openDrawer} = useContext(DrawerContext)
    const {theme} = useContext(ThemeContext)
    const menuItems = items.map((item) => {
        if (item.id != 0 && item.id != 7.1){
            return ( 
                <a href={'http://localhost:5173/'+item.path} key={item.id}>
                    <MenuItem>
                        {item.text}
                    </MenuItem>
                </a>
            )
        }
    })

    return (

                <Drawer open={open} onClose={openDrawer} variant='persistent' PaperProps={theme=="dark"?{sx:{backgroundColor:"#23272f"}}:{sx:{backgroundColor:"white"}}} >
                <Toolbar />
                    <MenuList>
                        {menuItems}
                    </MenuList>
                </Drawer>

    )
}

export default Menu