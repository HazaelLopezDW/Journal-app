import { JournalLayout } from "../";
import { NothingSelectedView,
         NotView } from "../";

const drawerWith = 240;

export const JournalPage = () => {
  return (
    <>
        <JournalLayout component='h1'>
          {/* NothingSelected */}
          {/* <NothingSelectedView/> */}
          {/* NoteView */}
          <NotView/>
        </JournalLayout>
    </>
  )
}
