

import { Outlet } from "react-router-dom"
import "./App.css"
import HeaderSection from "./component/HeaderSection"
import FooterSection from "./component/FooterSection"

const App = () => {
  return (
    <>
      <HeaderSection/>
      <main className="content-container">
        <Outlet/>
      </main>
      <FooterSection/>
      </>
  )
}

export default App