import { createContext, useEffect, useState } from "react"
import { api } from "../services/api.js"

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
                console.log(error)
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
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList((techList) => [ data, ...techList])
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

            const response = await api.put(`/users/techs/${techID}`, currentStatus, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // setTechList((techList) =>
            //     techList.map((tech) =>
            //         tech.id === techID ? { ...tech, ...formData } : tech
            //     ))
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            console.log(techList)
        }
    }



    return (
        <TechContext.Provider value={{ isLoading, techList, createTech, newTechOpen, setNewTechOpen, editDeleTechOpen, setEditDeleTechOpen, setHandleTech, handleTech, updateTech }}>
            {children}
        </TechContext.Provider>
    )
}