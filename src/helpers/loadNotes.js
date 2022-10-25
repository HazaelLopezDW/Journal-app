import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase';

export const loadNote = async (uid = '') => {
    if(!uid) throw new Error('El UID del usuario no esta establecido');

    try {
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const notes = [];
        docs.forEach(doc => {
            notes.push({id: doc.id, ...doc.data()});
        });
        
        return notes;

    } catch (error) {
        console.log(error);
    }
}