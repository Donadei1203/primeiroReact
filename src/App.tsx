import "./App.css"
// import PageOne from "./components/olaMundo"
import Header from "./components/cabecalho"
import Footer from "./components/rodape"
// import Banner from "./components/banner"
import { Outlet } from "react-router-dom"

function App(){
    return(
        <div className="container">
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default App