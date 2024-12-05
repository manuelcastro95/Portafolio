import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Inicio from "./pages/Inicio"
import NoPage from "./pages/NoPage"
import Layout from "./pages/Layout"
import Habilidades from "./pages/Habilidades"
import Proyectos from "./pages/Proyectos"
import Contacto from "./pages/Contacto"
import { Analytics } from "@vercel/analytics/react"

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
