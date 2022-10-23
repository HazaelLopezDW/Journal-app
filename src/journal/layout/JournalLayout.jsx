import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, 
         SideBar } from "../";

const drawerWith = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box
        sx={{ display: 'flex'}} className="animate__animated animate__fadeIn animate__faster"
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
            <Toolbar/>
            {children}
        </Box>
    </Box>
  )
}
