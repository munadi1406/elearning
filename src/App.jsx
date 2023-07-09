import { HashRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"

function App() {
  

  return (
    <div className="bg-base-200">
     <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
