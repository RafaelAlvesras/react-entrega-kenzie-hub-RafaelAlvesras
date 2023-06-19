import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/index.jsx"
import { RegisterPage } from "../Pages/RegisterPage/index.jsx"
import { Dashboard } from "../Pages/Dashboard/index.jsx"
import { useState } from "react"

export const RoutesMain = () => {

    const [user, setUser] = useState([])

    return (
        <Routes>
            <Route path="/" element={<HomePage setUser={setUser} />}/>
            <Route path="/RegisterPage" element={<RegisterPage />}/>
            <Route path="/Dashboard" element={<Dashboard user={user}/>}/>
        </Routes>
    )
}