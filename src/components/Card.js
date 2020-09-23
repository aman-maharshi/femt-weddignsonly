import React from "react"

function Card({ icon, title, content }) {
    return (
        <div className="card">
            <p className="card__icon">{icon}</p>
            <p className="card__title">{title}</p>
            <p className="card__desc">{content}</p>
        </div>
    )
}

export default Card
