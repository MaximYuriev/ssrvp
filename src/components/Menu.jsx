import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const Menu = ({items}) => {


    const menuItems = items.map((item) => {
        if (item.id != 0){
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
        <MenuList>
            {menuItems}
        </MenuList>
    )
}

export default Menu