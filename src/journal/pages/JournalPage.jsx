import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { JournalLayout } from "../";
import { NothingSelectedView,
         NotView } from "../";
import { startNewNote } from "../../store/journal";

const drawerWith = 240;

export const JournalPage = () => {

  const dispatch = useDispatch();
  const {isSaving, active} = useSelector(state => state.journal);

  const onClickNewNote = (ev) => {
    ev.preventDefault();
    dispatch(startNewNote());
  }

  return (
    <>
        <JournalLayout component='h1'>
          {
            (!!active)
            ? <NotView/> 
            : <NothingSelectedView/>
          }
          <IconButton
            disabled={isSaving}
            onClick={onClickNewNote}
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
