import { createContext, useEffect, useState } from "react"
import { api } from "../services/api.js"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const [techList, setTechList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [newTechOpen, setNewTechOpen] = useState(false)

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
                setTechList(data) 
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
    }


    return (
        <TechContext.Provider value={{ isLoading, techList, createTech, newTechOpen, setNewTechOpen }}>
            {children}
        </TechContext.Provider>
    )
}