import logo from "../../assets/Logo.png"
import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import { Header } from "./StyledHome"
import { LoginForm } from "../../Components/Form/LoginForm.jsx"

export const HomePage = ({ }) => {

    return (
        <>
            <ToastContainer />
            <Header>
                <div>
                    <img src={logo} alt="Kenzie Hub" />
                </div>
            </Header>
            <LoginForm />
        </>
    )
}