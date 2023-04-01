import { ArrowRight } from '@phosphor-icons/react';
import './Card.css';


interface CardProps {
  flow: string
  title: string
  description: string
  categorie1: string
  categorie2?: string
}

export function Card(props: CardProps) {
  return (
    <div className="card">
        <h4>{props.title}</h4>
      <p>
        {
          props.description.length > 68 ? props.description.substring(0, 68) + "..." : props.description
        }
      </p>
      <div className="categories">
        <span>{props.categorie1}</span>
        {props.categorie2 !== "" ? <span>{props.categorie2}</span> : ""}
      </div>
      </div>
  )
}