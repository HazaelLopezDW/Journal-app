import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, 
         ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWith }) => {
    return (
        <Box
            component='nav'
            sx={{
                width: { sm: drawerWith},
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant="permanent" // temporary
                open
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith}
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap 
                        component='div'
                    >
                        Hazael López
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'Laborum dolore cupidatat magna incididunt reprehenderit eiusmod commodo ullamco consequat sunt.'}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
