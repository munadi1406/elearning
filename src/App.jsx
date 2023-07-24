import { HashRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginRegister from "./pages/LoginRegister"

function App() {
  

  return (
    <div className="bg-base-200">
     <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<LoginRegister/>}/>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
