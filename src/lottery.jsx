import { useState } from "react"
import { genTicket, sum } from './helper.js'
import Ticket from "./ticket.jsx";
import './lottery.css'

export default function Lottery({n, winNum}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWin = sum(ticket) === winNum;
    console.log(isWin)
    
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    
    return (
        <div className="lottery-container">
            <h1 className="lottery-title">Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <button className="buy-button" onClick={buyTicket}>Buy New Ticket</button>
            {isWin && <h3 className="win-message">Congratulations You Won! 🎉</h3>}
        </div>
    )
}