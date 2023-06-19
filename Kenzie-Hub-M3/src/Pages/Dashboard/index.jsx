import logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"
import { StyledHeader, StyledMain } from "./StyledDashboard"

export const Dashboard = ({ user }) => {

    return (
        <>
            <StyledHeader>
                <nav>
                    <img src={logo} alt="Kenzie Hub" />
                    <Link to={"/"} className="link" onClick={() => localStorage.clear()}>Sair</Link>
                </nav>
            </StyledHeader>
            <StyledMain>
                <div className="divBorderBottom">
                    <div className="userModule">
                        <h1 className="helloUser">Olá, {user.name}</h1>
                        <p className="courseModuleUser">{user.course_module}</p>
                    </div>
                </div>
                <section>
                    <h2>Que pena! Estamos em desenvolvimento :(</h2>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
            </StyledMain>
        </>
    )
}