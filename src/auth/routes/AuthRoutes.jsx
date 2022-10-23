import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage,
         RegisterPage } from "../"
import { CheckingAuth } from "../../ui";

export const AuthRoutes = () => {

  const {status} = useSelector(state => state.auth);

  if(status === 'checking') return <CheckingAuth/>

  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
            <Route path="/*" element={<Navigate to="/auth/login"/>}/>
        </Routes>
    </>
  )
}
