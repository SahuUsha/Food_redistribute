import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./router/approute"


function App() {
 
 return <div className="h-screen w-full">
  <BrowserRouter>
 <AppRoutes/>
  </BrowserRouter>
 </div>
}

export default App
