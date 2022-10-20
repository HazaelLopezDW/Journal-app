import { Box } from "@mui/system"
import { NavBar, 
         SideBar } from "../";

const drawerWith = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box
        sx={{ display: 'flex'}}
    >
        {/* Navbar */}
        <NavBar drawerWith={drawerWith}/>
        {/* Sidebar */}
        <SideBar drawerWith={drawerWith}/>
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            {/* ToolBar */}
            {children}
        </Box>
    </Box>
  )
}
