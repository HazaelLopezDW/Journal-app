import { loginWithEmailAndPassword, 
         registerUserWithEmailPassword, 
         signInWithGoogle } from "../../firebase";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(login({uid, displayName, email, photoURL}));
    } 
}

export const startLoginWitEmailAndPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailAndPassword({email, password});
        if(!result.ok) return dispatch(logout(result));
        console.log(result)
        const {user} = result.resp;
        dispatch(login(user));
    }
}