import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { StyledTechLi, StyledTechList } from "./StyledTechList"


export const TechList = () => {

    const { techList } = useContext(TechContext)

    return (
        <StyledTechList>
            {techList.map((tech) => (
                <StyledTechLi key={tech.id}>
                    <h3>{tech.title}</h3>
                    <p>{tech.status}</p>
                </StyledTechLi>
            ))}
        </StyledTechList>
    )
}