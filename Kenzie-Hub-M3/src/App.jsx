import { RoutesMain } from "./Routes/RoutesMain"
import { GlobalReset } from "../src/styles/Reset.js"
import { GlobalStyles } from "../src/styles/GlobalStyles.js"
import { useContext } from "react"
import { UserContext } from "./providers/UserContext"
import { StyledDivLoading, StyledLoading } from "./Pages/HomePage/StyleLoading.js"

const App = () => {

  const { isLoading } = useContext(UserContext)

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      {isLoading ? <StyledDivLoading><StyledLoading /></StyledDivLoading> :
        <>
          <RoutesMain />
        </>}
    </>
  )
}

export default App
