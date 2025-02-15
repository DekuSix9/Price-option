
import './App.css'
import LineCharts from './Components/LineCharts/LineCharts';
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from "./Components/PriceOptions/PriceOptions";


// import NavbarDaisy from './Components/NavbarDaisy/NavbarDaisy'


function App() {


  return (
    <>
      <div>
   {/* <NavbarDaisy></NavbarDaisy> */}
   <Navbar></Navbar>
   <PriceOptions></PriceOptions>
   <LineCharts></LineCharts>
 
       
      </div>
      
    </>
  )
}

export default App
