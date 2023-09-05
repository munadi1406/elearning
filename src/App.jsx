import { HashRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./app/LandingPage"
import LoginRegister from "./pages/LoginRegister"
import Main from "./app/main"
import Otp from './pages/Otp'
import { QueryClientProvider, QueryClient } from "react-query"
import PdfViewer from "./utils/PdfViewer"

function App() {
  const queryClient  = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <div className="bg-base-200">
     <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<LoginRegister/>}/>
        <Route exact path="/otp" element={<Otp/>}/>
        <Route exact path="/home/*" element={<Main/>}/>
        <Route exact path="/file-view/:fileName" element={<PdfViewer />} />
      </Routes>
     </HashRouter>
    </div>
    </QueryClientProvider>
  )
}

export default App
