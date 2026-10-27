import "./App.css"
import PageOne from "./components/olaMundo"
import Header from "./components/cabecalho"
import Footer from "./components/rodape"

function App(){
    return(
        <div className="container">
            <Header></Header>
            <PageOne/>
            <Footer></Footer>
        </div>
    )
}

export default App