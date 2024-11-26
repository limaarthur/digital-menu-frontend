import "./card.css"

interface CardProps {
    price: number,
    title: string,
    imgUrl: string
}

export function Card({price, title, imgUrl} : CardProps) {
    return(
        <div className="card">
            <img src={imgUrl}/>
            <h2>{title}</h2>
            <p><b>Valor: </b>{price}</p>
        </div>
    )
}