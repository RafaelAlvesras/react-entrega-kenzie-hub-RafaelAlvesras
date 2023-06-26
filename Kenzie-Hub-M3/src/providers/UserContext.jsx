import { createContext, useEffect, useState } from "react"
import { api } from "../services/api.js"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const currentPath = window.location.pathname
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN")

            if (token) {
                try {
                    setIsLoading(true)
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(data)
                    navigate(currentPath)
                } catch {
                    localStorage.removeItem("@TOKEN")
                    localStorage.removeItem("@USERID")
                } finally {
                    setIsLoading(false)
                }
            }
        }
        loadUser()
    }, [])

    const navigate = useNavigate()

    const loginUser = async (formData) => {
        try {
            setIsLoading(true)
            const { data } = await api.post("/sessions", formData)
            toast.success("Bem vindo !", { autoClose: 1000, className: "custom-toast" })
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)
            setUser(data.user)  
            setTimeout(() => {
                navigate("/Dashboard")
            }, 1000)
        } catch {
            toast.error("Email ou senha inválidos", { autoClose: 2850, className: "custom-toast" })
        } finally {
            setIsLoading(false)
        }
    }

    const registerUser = async (formData) => {
        try {
            setIsLoading(true)
            const response = await api.post("/users", formData)
            response
            toast.success("Conta criada com sucesso !", { autoClose: 1000, className: "custom-toast" })
            setTimeout(() => {
                navigate("/")
            }, 900)
        } catch {
            toast.error("Ops! Algo deu errado", { autoClose: 1850, className: "custom-toast" })
        } finally {
            setIsLoading(false)
        }
    }

    const logoutUser = async () => {
        setIsLoading(true)
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setTimeout(() => {
            navigate("/")
            setUser(null)
            setIsLoading(false)
            toast.warning("Logout realizado com sucesso.", { autoClose: 900, className: "custom-toast" })
        }, 1000)
    }

    return (
        <UserContext.Provider value={{ user, setUser, loginUser, isLoading, registerUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}