import "../styles/cards.css";

interface ICardProps {
    title: string;
    description: string;

}

export default function Card({title, description}: ICardProps) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}