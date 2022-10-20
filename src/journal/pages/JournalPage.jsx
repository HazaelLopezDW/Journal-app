import { JournalLayout } from "../";
import { NothingSelectedView } from "../";

const drawerWith = 240;

export const JournalPage = () => {
  return (
    <>
        <JournalLayout component='h1'>
          {/* NothingSelected */}
          <NothingSelectedView/>
          {/* NoteView */}
        </JournalLayout>
    </>
  )
}
