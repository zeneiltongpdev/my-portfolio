import { createGlobalStyle } from "styled-components"
import { AppRoutes } from "./pages/routes"



const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  html {
    background-color: #111;
  }

  ::-webkit-scrollbar {
    width: 2px;
    background-color: #000;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dc143c;
  }
`

function App() {
  
  return (

    <>

      <GlobalStyles/>

      <AppRoutes/>

    </>

  )
}

export default App