import { useForm } from "react-hook-form"
import { useContext, useEffect, useRef } from "react"
import { TechContext } from "../../../providers/TechContext.jsx"
import { StyledModal } from "../ModalCreateTech/StyledModal.js"
import { StyledDivButtons } from "./StyledModalEditDeleteTech.js"

export const EditDeleteForm = () => {

    const { setEditDeleTechOpen, handleTech, techList, updateTech, deleteTech } = useContext(TechContext)

    const techName = techList.filter((tech) => tech.id === handleTech)

    const { register, handleSubmit, reset } = useForm({ defaultValues: { status: techName[0].status }})

    useEffect(() => {

        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                setEditDeleTechOpen(false)
            }
        }

        window.addEventListener("keydown", handleKeyPress)

        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [])

    const submit = (formData) => {
        updateTech(handleTech, formData)
        reset()
    }

    return (
        <StyledModal>
            <form onSubmit={handleSubmit(submit)}>
                <div className="topDiv">
                    <h1>Tecnologia Detalhes</h1>
                    <button className="buttonClose" onClick={() => setEditDeleTechOpen(false)}>X</button>
                </div>
                <div className="divInputs">

                    <label htmlFor="titleNewTech">Nome</label>
                    <input type="text" id="titleNewTech" defaultValue={techName[0].title} disabled />

                    <label htmlFor="selectStatus" >Status</label>
                    <select name="selectStatus" id="selectStatus" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>

                    <StyledDivButtons>
                        <button className="buttonEditTech" type="submit">Salvar Alterações</button>
                        <button className="buttonDeleteTech" onClick={() => { deleteTech(handleTech) }}>Excluir</button>
                    </StyledDivButtons>
                </div>
            </form>
        </StyledModal>
    )
}