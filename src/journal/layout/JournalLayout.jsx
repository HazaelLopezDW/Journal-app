import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar";

const drawerWith = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box
        sx={{ display: 'flex'}}
    >
        {/* Navbar */}
        <NavBar drawerWith={drawerWith}/>
        {/* Sidebar */}
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
