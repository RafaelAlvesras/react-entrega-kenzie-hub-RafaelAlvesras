import logo from "../../assets/Logo.png"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { StyledDivLoading, StyledLoading } from "./StyleLoading.js"
import { api } from "../../services/api.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { addSchemaLogin } from "./addSchemaLogin.js"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css";
import { StyledForm } from "../../Components/Form/StyledForm";
import { Header } from "./StyledHome";


export const HomePage = ({ setUser }) => {

    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(addSchemaLogin)
    })

    const navigate = useNavigate()

    const loginUser = async (formData) => {
        try {
            setIsLoading(true)
            const { data } = await api.post("/sessions", formData)
            toast.success("Bem vindo !", { autoClose: 1000, className: "custom-toast" })
            localStorage.setItem("@TOKEN", JSON.stringify(data.token))
            localStorage.setItem("@USERID", JSON.stringify(data.user.id))
            setUser(data.user)
            setTimeout(() => {
                navigate("/Dashboard")
            }, 2000)
        } catch {
            toast.error("Email ou senha inválidos", { autoClose: 1000, className: "custom-toast" })
        } finally {
            setIsLoading(false)
        }
    }

    const submit = (formData) => {
        loginUser(formData)
        reset()
    }

    return (
        <>
            <ToastContainer />
            {isLoading ? (<StyledDivLoading><StyledLoading /></StyledDivLoading>) :
                (<>
                    <Header>
                        <div>
                            <img src={logo} alt="Kenzie Hub" />
                        </div>
                    </Header>
                    <main>
                        <StyledForm onSubmit={handleSubmit(submit)}>
                            <div>
                                <h1>Login</h1>
                            </div>

                            <label htmlFor="inputLoginEmail">Email</label>
                            <input type="email" id="inputLoginEmail" placeholder="Digite aqui seu email" {...register("email")} />
                            {errors.email ? <p>{errors.email.message}</p> : null}

                            <label htmlFor="inputLoginPassword">Senha</label>
                            <input type="password" id="inputLoginPassword" placeholder="Digite aqui sua senha" {...register("password")} />
                            {errors.password ? <p>{errors.password.message}</p> : null}

                            <button>Entrar</button>
                            <p>Ainda não possui uma conta ?</p>
                            <Link to={"/RegisterPage"} className="link">cadastre-se</Link>
                        </StyledForm>
                    </main>
                </>)}
        </>
    )
}