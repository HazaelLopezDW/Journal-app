import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";

export const startNewNote = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/jounal/notes`));
        await setDoc(newDoc, newNote);
        
        // dispatch()
        // dispatch(newNote)
        // dispatch(activeNote)
    }
}