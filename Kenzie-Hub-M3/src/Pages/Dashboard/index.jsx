import logo from "../../assets/Logo.png"
import { StyledHeader, StyledMain } from "./StyledDashboard"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { ToastContainer } from "react-toastify"
import { RegisterForm } from "../../Components/Form/ModalCreateTech/NewTechForm.jsx"
import { TechContext } from "../../providers/TechContext"
import { TechList } from "../../Components/TechList"
import { EditDeleteForm } from "../../Components/Form/ModalEditDeleteTech/ModalEditDeleteTech"
import { StyledTechList } from "../../Components/TechList/StyledTechList"

export const Dashboard = () => {
    
    const { user, logoutUser } = useContext(UserContext)
    const { newTechOpen, setNewTechOpen, editDeleTechOpen, techList } = useContext(TechContext)

    return (
        <>
            <ToastContainer />
            <StyledHeader>
                <nav>
                    <img src={logo} alt="Kenzie Hub" />
                    <button className="link" onClick={() => logoutUser()}>Sair</button>
                </nav>
            </StyledHeader>
            <StyledMain>
                <div className="divBorderBottom">
                    <div className="userModule">
                        <h1 className="helloUser">Olá, {user?.name} !</h1>
                        <p className="courseModuleUser">{user?.course_module}</p>
                    </div>
                </div>
                <section>
                    <div className="divCreateTechButton">
                        <h2>Tecnologias</h2>
                        <button className="createTechButton" onClick={() => setNewTechOpen(true)}>+</button>
                    </div>
                    {newTechOpen ? (<RegisterForm />) : null}
                    {techList.length === 0 ? <StyledTechList> <div className="noTechDiv"><h3>Você ainda não cadastrou nenhuma tecnologia</h3></div></StyledTechList> : <TechList />}
                    {editDeleTechOpen ? (<EditDeleteForm />) : null}
                </section>
            </StyledMain>
        </>
    )
}