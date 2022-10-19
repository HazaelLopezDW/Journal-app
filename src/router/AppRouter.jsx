import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth"
import { JournalRoutes } from "../journal"

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y Registro */}
        <Route path="/auth/*" element={<AuthRoutes/>} />
        {/* Journal App */}
        <Route path="/*" element={<JournalRoutes/>} />
    </Routes>
  )
}
