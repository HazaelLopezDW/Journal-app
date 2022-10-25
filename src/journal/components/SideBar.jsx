import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, 
         ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ({ drawerWith }) => {

    const {displayName} = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

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
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {
                        notes.map(({id }) => (
                            <ListItem key={id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={id}/>
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
