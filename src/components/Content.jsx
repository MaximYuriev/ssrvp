import { Box } from '@mui/system'
import { useContext } from 'react'
import { DrawerContext } from '../App'



const Content = ({children}) => {
    const {open} = useContext(DrawerContext)
    return (
            <Box marginTop="80px" height="50%" /*paddingLeft={open?"160px":"25px"}*/> 
                {children}
            </Box>
        )
}

export default Content