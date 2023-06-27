import { createContext, useEffect, useState } from "react"
import { api } from "../services/api.js"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const [techList, setTechList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [newTechOpen, setNewTechOpen] = useState(false)
    const [editDeleTechOpen, setEditDeleTechOpen] = useState(false)
    const [handleTech, setHandleTech] = useState(null)

    useEffect(() => {
        const loadTechList = async () => {
            const token = localStorage.getItem("@TOKEN")

            try {
                setIsLoading(true)
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setTechList(data.techs)
            } catch (error) {
                toast.error("Ops! Algo deu errado", { autoClose: 1850, className: "custom-toast" })
            } finally {
                setIsLoading(false)
            }
        }
        loadTechList()
    }, [])

    const createTech = async (formData) => {
        const token = localStorage.getItem("@TOKEN")

        try {
            setIsLoading(true)
            console.log(formData)
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList((techList) => [ data, ...techList])
            toast.success("Nova Tecnologia adicionada !", { autoClose: 1000, className: "custom-toast" })
        } catch (error) {
            console.log(error)
        } finally {
            setNewTechOpen(false)
            setIsLoading(false)
        }
    }

    const updateTech = async (techID, currentStatus) => {
        try {
            const token = localStorage.getItem("@TOKEN")

            const { data } = await api.put(`/users/techs/${techID}`, currentStatus, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList((techList) =>
                techList.map((tech) =>
                    tech.id === techID ? { ...tech, ...data } : tech
                ))
            toast.success("Tecnologia atualizada com sucesso", { autoClose: 1000, className: "custom-toast" })
        } catch (error) {
            console.log(error)
        } finally {
            setEditDeleTechOpen(false)
        }
    }

    const deleteTech = async (techID) => {
        try {
            const token = localStorage.getItem("@TOKEN")

            await api.delete(`/users/techs/${techID}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList((techList) => techList.filter((tech) => tech.id !== techID))
            toast.success("Tecnologia deletada com sucesso !", { autoClose: 1000, className: "custom-toast" })
        } catch (error) {
            toast.error("Não foi possível deletar esta tecnologia", { autoClose: 1850, className: "custom-toast" })
        } finally {
            setEditDeleTechOpen(false)
        }
    }

    return (
        <TechContext.Provider value={{ isLoading, techList, createTech, newTechOpen, setNewTechOpen, editDeleTechOpen, setEditDeleTechOpen, setHandleTech, handleTech, updateTech, deleteTech}}>
            {children}
        </TechContext.Provider>
    )
}