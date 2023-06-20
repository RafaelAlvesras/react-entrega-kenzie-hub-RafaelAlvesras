import logo from "../../assets/Logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { api } from "../../services/api.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { addRegisterSchema } from "./addRegisterSchema"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Header } from "./StyledRegisterPage.js"
import { StyledForm } from "../../Components/Form/StyledForm"


export const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(addRegisterSchema)
    })

    const navigate = useNavigate()

    const registerUser = async (formData) => {
        try {
            const response = await api.post("/users", formData)
            response
            toast.success("Conta criada com sucesso !", { autoClose: 1000,  className: "custom-toast" })
            setTimeout(() => {
                navigate("/")
            }, 2000)
        } catch {
            toast.error("Ops! Algo deu errado", { autoClose: 1000,  className: "custom-toast" })
        }
    }

    const submit = (formData) => {
        registerUser(formData)
        reset()
    }

    return (
        <>
            <Header>
                <nav>
                    <img src={logo} alt="Kenzie Hub" />
                    <Link to={"/"} className="link">Voltar</Link>
                </nav>
            </Header>
            <main>
                <StyledForm onSubmit={handleSubmit(submit)}>
                    <div>
                        <h1>Crie sua conta</h1>
                        <p>Rápido e grátis, vamos nessa !</p>
                    </div>

                    <label htmlFor="inputRegisterName">Nome</label>
                    <input type="text" id="inputRegisterName" placeholder="Digite aqui seu nome" {...register("name")} />
                    {errors.name ? <p className="errorWarn">{errors.name.message}</p> : null}

                    <label htmlFor="inputRegisterEmail">Email</label>
                    <input type="email" id="inputRegisterEmail" placeholder="Digite aqui seu email" {...register("email")} />
                    {errors.email ? <p className="errorWarn">{errors.email.message}</p> : null}

                    <label htmlFor="inputRegisterPassword">Senha</label>
                    <input type="password" id="inputRegisterPassword" placeholder="Digite aqui sua senha" {...register("password")} />
                    {errors.password ? <p className="errorWarn">{errors.password.message}</p> : null}

                    <label htmlFor="confirm">Confirmar Senha</label>
                    <input type="password" id="confirm" placeholder="Digite novamente sua senha" {...register("confirm")} />
                    {errors.confirm ? <p className="errorWarn">{errors.confirm.message}</p> : null}

                    <label htmlFor="inputRegisterBio">Bio</label>
                    <input type="text" id="inputRegisterBio" placeholder="Fale sobre você" {...register("bio")} />
                    {errors.bio ? <p className="errorWarn">{errors.bio.message}</p> : null}

                    <label htmlFor="inputRegisterContact">Contato</label>
                    <input type="text" id="inputRegisterContact" placeholder="Opção de contato" {...register("contact")} />
                    {errors.contact ? <p className="errorWarn">{errors.contact.message}</p> : null}

                    <select name="selectModule" id="selectModule" {...register("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                    {errors.course_module ? <p className="errorWarn">{errors.course_module.message}</p> : null}
                    <button>Cadastrar</button>
                </StyledForm>
            </main>
            <ToastContainer />
        </>
    )
}