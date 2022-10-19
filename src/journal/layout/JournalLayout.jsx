import { Box } from "@mui/system"

export const JournalLayout = ({children}) => {
  return (
    <Box
        sx={{ display: 'flex'}}
    >
        {/* Navbar */}
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
