import { Suspense } from 'react'
import './App.css'
import Banner from './components/hompage/banner/Banner'
import Players from './components/hompage/players/Players'
import Navbar from './components/navbar/Navbar'

const fetchPlayer = async () => {
  const res = await fetch("/data.json")
  return res.json();
}
function App() {

  const playersPromise = fetchPlayer();


  return (
    <>
      <Navbar>  </Navbar>
      <Banner>  </Banner>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>

      {/* <h2 className='p-3'>hello react</h2> */}
    </>
  )
}

export default App
