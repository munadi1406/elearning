import { HashRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./app/LandingPage"
import LoginRegister from "./pages/LoginRegister"
import Main from "./app/main"

function App() {
  
  return (
    <div className="bg-base-200">
     <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<LoginRegister/>}/>
        <Route exact path="/home/*" element={<Main/>}/>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
