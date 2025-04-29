import Ticketnum from './ticketnum.jsx'

export default function Ticket({ ticket }) {
    return (
        <div className="ticket-container">
            <h2 className="ticket-title">Your Lucky Numbers</h2>
            <div className="ticket-numbers">
                {ticket.map((num, index) => (
                    <Ticketnum num={num} key={index}/>
                ))}
            </div>
        </div>
    )
}