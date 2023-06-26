import logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Header } from "./StyledRegisterPage.js"
import { RegisterForm } from "../../Components/Form/RegisterForm"

export const RegisterPage = () => {

    return (
        <>
            <ToastContainer />
            <Header>
                <nav>
                    <img src={logo} alt="Kenzie Hub" />
                    <Link to={"/"} className="link">Voltar</Link>
                </nav>
            </Header>
            <RegisterForm />
        </>
    )
}