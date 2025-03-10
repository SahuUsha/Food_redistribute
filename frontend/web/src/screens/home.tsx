import { Card } from "../components/card"
import { Navbar } from "../components/navbar"
// import { GoogleMap,LoadScript,Marker } from "@react-google-maps/api"
import {Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';


export const Home=()=>{

 
    return <div className="h-screen w-full">
          <Navbar/>

          <div className="flex">
          <div className="h-9/10 flex justify-center gap-4 flex-wrap w-1/2">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>

          <div className="rounded-xl h-[900px] w-1/2 mt-8">
         
   <Map
      defaultZoom={13}
      defaultCenter={ { lat: 21.1458, lng: 79.0882 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
   </Map>


          </div>
          </div>
    </div>
}