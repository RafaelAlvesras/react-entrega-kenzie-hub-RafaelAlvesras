import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/index.jsx"
import { RegisterPage } from "../Pages/RegisterPage/index.jsx"
import { Dashboard } from "../Pages/Dashboard/index.jsx"
import { ProtectedRoute } from "../Components/ProtectedRoute/index.jsx"
import { PublicRoutes } from "../Components/PublicRoutes/index.jsx"
import { TechProvider } from "../providers/TechContext.jsx"

export const RoutesMain = () => {

    return (
        <Routes>
            <Route element={<PublicRoutes />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/RegisterPage" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoute />} >
                <Route path="/Dashboard" element={
                    <TechProvider>
                        <Dashboard />
                    </TechProvider> }/>
            </Route>
        </Routes>
    )
}