import { RoutesMain } from "./Routes/RoutesMain"
import { GlobalReset } from "../src/styles/Reset.js"
import { GlobalStyles } from "../src/styles/GlobalStyles.js"

function App() {
  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <RoutesMain />
    </>
  )
}

export default App