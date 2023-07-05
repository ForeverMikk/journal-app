import { Box } from '@mui/material';
import { Navbar } from '../components';

const drawerWith = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        {/* Navbar drawerWith */}
        <Navbar />

        {/* Sidebar */}

        <Box 
            component='main'
            sx={{flexGrow: 1, p: 3}}
        >
            {/* Toolbar */}
            {children}
        </Box>
    </Box>
  )
}
