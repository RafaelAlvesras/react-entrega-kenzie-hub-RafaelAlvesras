import { useForm } from "react-hook-form"
import { useContext, useEffect, useRef } from "react"
import { TechContext } from "../../../providers/TechContext.jsx"
import { StyledModal } from "./StyledModal.js"

export const RegisterForm = () => {

    const { createTech, setNewTechOpen } = useContext(TechContext)

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {

        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                setNewTechOpen(false)
            }
        }

        window.addEventListener("keydown", handleKeyPress)

        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [])

    const submit = (formData) => {
        createTech(formData)
        reset()
    }

    return (
        <StyledModal>
            <form onSubmit={handleSubmit(submit)}>
                <div className="topDiv">
                    <h1>Cadastrar Tecnologia</h1>
                    <button className="buttonClose" onClick={() => setNewTechOpen(false)}>X</button>
                </div>
                <div className="divInputs">
                    <label htmlFor="titleNewTech">Nome</label>
                    <input type="text" id="titleNewTech" placeholder="Nome da tecnologia" {...register("title")} />
                    <label htmlFor="selectStatus" >Selecionar status</label>
                    <select name="selectStatus" id="selectStatus" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button className="buttonSubmit" type="submit">Cadastrar Tecnologia</button>
                </div>
            </form>
        </StyledModal>
    )
}