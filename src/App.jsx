
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banar from './components/banar/Banar'
import DownBanner from './components/banar/DownBanner'
import Tools from "./components/toolss/Tools"
import Step from './components/step/Step'
import Packagg from './components/packag/Packagg'
import MainFooter from './components/footer/MainFooter'
import { Suspense, useState } from 'react'

function App() {

  const fetchData = async () => {
    const response = await fetch("/data.json")
    const data = await response.json();
    return data;
  }
  const data = fetchData()

  const [cardStor,setCardStor] = useState([]);

  return (
    <>
      <Navbar cardStor={cardStor}></Navbar>
      <Banar></Banar>
      <DownBanner></DownBanner>
      <Suspense fallback={<span className="loading loading-dots loading-xl flex justify-center items-center"></span>}>
        <Tools data={data} cardStor={cardStor} setCardStor={setCardStor}></Tools>
      </Suspense>
      <Step></Step>
      <Packagg></Packagg>
      <MainFooter></MainFooter>
      <ToastContainer />
    </>
  )
}

export default App
