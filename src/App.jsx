import Map from "./component/map"
import Searchbar from "./component/searchbar"
import './App.css'
import { BeyondSoftLOGO } from "./img"

function App() {

  return (
    <div className="mainContainer">
      <div className="header">
        <img width={48} height={48} src={BeyondSoftLOGO} />
        <Searchbar />
      </div>
      <Map />
    </div>
  )
}

export default App
