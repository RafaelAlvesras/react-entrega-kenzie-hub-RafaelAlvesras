import { useForm } from "react-hook-form"
import { StyledForm } from "./StyledForm.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { addRegisterSchema } from "../../Pages/RegisterPage/addRegisterSchema.js"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const RegisterForm = () => {

    const { creat } = useContext(UserContext)


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(addRegisterSchema)
    })

    const submit = (formData) => {
        registerUser(formData)
        reset()
    }

    return (
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
    )
}