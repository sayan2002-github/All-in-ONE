import DEVHomePage from "./DEVtools/DEVHomePage"
import DevNavbar from "./DEVtools/DevNavbar"
import './Dev.css'


function DEV() {
  return (
    <div>
      <DevNavbar></DevNavbar>
      <DEVHomePage></DEVHomePage>
    </div>
  )
}

export default DEV