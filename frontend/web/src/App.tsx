import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./router/approute"
import {APIProvider} from '@vis.gl/react-google-maps';

function App() {
 
 return <div className="h-screen font-poppins w-full overflow-y-none">
     <APIProvider apiKey={'AIzaSyASxn6LcICFwmL4ao9hyEgni2HZlZjkWxA'} onLoad={() => console.log('Maps API has loaded.')}>
  <BrowserRouter>
 <AppRoutes/>
  </BrowserRouter>
     </APIProvider>
 </div>
}

export default App
