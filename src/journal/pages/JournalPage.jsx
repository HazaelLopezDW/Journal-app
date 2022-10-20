import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../";
import { NothingSelectedView,
         NotView } from "../";

const drawerWith = 240;

export const JournalPage = () => {
  return (
    <>
        <JournalLayout component='h1'>
          {/* NothingSelected */}
          <NothingSelectedView/>
          {/* NoteView */}
          {/* <NotView/> */}
          <IconButton
            size="large"
            sx={{
              color: 'white',
              backgroundColor: 'error.main',
              ':hover': { backgroundColor: 'error.main', opacity: 0.9},
              position: 'fixed',
              right: 50, 
              bottom: 50
            }}
          >
            <AddOutlined sx={{ fontSize: 30}}/>
          </IconButton>
        </JournalLayout>
    </>
  )
}
