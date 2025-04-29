import { useState } from 'react'
import './App.css'
import Lottery from './lottery'
import Ticketnum from "./ticketnum.jsx"
import Ticket from "./ticket.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lottery n={3} winNum={15}/>
      {/* <Ticket ticket={[0,1,2]}/> */}
      {/* <Lottery /> */}
    </>
  )
}

export default App
