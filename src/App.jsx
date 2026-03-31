
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banar from './components/banar/Banar'
import DownBanner from './components/banar/DownBanner'
import Tools from "./components/toolss/Tools"
import Step from './components/step/Step'
import Packagg from './components/packag/Packagg'
import MainFooter from './components/footer/MainFooter'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banar></Banar>
      <DownBanner></DownBanner>
      <Tools></Tools>
      <Step></Step>
      <Packagg></Packagg>
      <MainFooter></MainFooter>
      <ToastContainer />
    </>
  )
}

export default App
