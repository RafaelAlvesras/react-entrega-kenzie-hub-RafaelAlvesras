import { useForm } from "react-hook-form"
import { StyledForm } from "./StyledForm.js"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { addSchemaLogin } from "../../Pages/HomePage/addSchemaLogin.js"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"


export const LoginForm = () => {

const { loginUser } = useContext(UserContext)

const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(addSchemaLogin)
})

const submit = (formData) => {
    loginUser(formData)
    reset()
}

return (
    <main>
        <StyledForm onSubmit={handleSubmit(submit)}>
            <div>
                <h1>Login</h1>
            </div>
    
            <label htmlFor="inputLoginEmail">Email</label>
            <input type="email" id="inputLoginEmail" placeholder="Digite aqui seu email" {...register("email")} />
            {errors.email ? <p className="errorWarn">{errors.email.message}</p> : null}
    
            <label htmlFor="inputLoginPassword">Senha</label>
            <input type="password" id="inputLoginPassword" placeholder="Digite aqui sua senha" {...register("password")} />
            {errors.password ? <p className="errorWarn">{errors.password.message}</p> : null}
    
            <button>Entrar</button>
            <p>Ainda não possui uma conta ?</p>
            <Link to={"/RegisterPage"} className="link">Cadastre-se</Link>
        </StyledForm>
    </main>
    )
}
