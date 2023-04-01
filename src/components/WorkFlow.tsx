import './WorkFlow.css';
import { Card } from './Card';

const cardArray = [
  {
    flow: "todo",
    title: "#boraCodar um Kanban 🧑‍💻",
    description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    categorie1: "rocketseat",
    categorie2: "desafio"
  },
  {
    flow: "todo",
    title: "Manter a ofensiva 🔥",
    description: "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
    categorie1: "rocketseat",
    categorie2: ""
  },
  {
    flow: "todo",
    title: "Almoçar 🥗",
    description: "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
    categorie1: "autocuidado",
    categorie2: ""
   },
   {
    flow: "doing",
    title: "Conferir o novo desafio 🚀",
    description: "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
    categorie1: "rocketseat",
    categorie2: "desafio"
   },
   {
    flow: "doing",
    title: "Ser incrível 😎",
    description: "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    categorie1: "autocuidado",
    categorie2: ""
   },
   {
    flow: "done",
    title: "#boraCodar uma página de login 🧑‍💻",
    description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma tela de login",
    categorie1: "rocketseat",
    categorie2: "desafio"
   },
   {
    flow: "done",
    title: "#boraCodar uma página de clima 🧑‍💻",
    description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de clima.",
    categorie1: "rocketseat",
    categorie2: "desafio"
   },
   {
    flow: "done",
    title: "#boraCodar um conversor 🧑‍💻",
    description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um conversor",
    categorie1: "rocketseat",
    categorie2: "desafio"
   },
  
];

export function WorkFlow() {
  return(
    <main>
      <div className="to-do">
        <h2>A Fazer</h2>
        {
        cardArray.map(cards => {
          if (cards.flow == "todo"){
            return <Card flow={cards.flow} title={cards.title} description={cards.description} categorie1={cards.categorie1} categorie2={cards.categorie2}/>
          } 
          else {
            return "";
          }
        })
      }
      </div>
      <div className="doing">
        <h2>Fazendo</h2>
        {
        cardArray.map(cards => {
          if (cards.flow == "doing"){
            return <Card flow={cards.flow} title={cards.title} description={cards.description} categorie1={cards.categorie1} categorie2={cards.categorie2}/>
          } 
          else {
            return "";
          }
        })
      }
      </div>
      <div className="doing">
        <h2>Feito</h2>
        {
        cardArray.map(cards => {
          if (cards.flow == "done"){
            return <Card flow={cards.flow} title={cards.title} description={cards.description} categorie1={cards.categorie1} categorie2={cards.categorie2}/>
          } 
          else {
            return "";
          }
        })
      }
      </div>
    </main>
  )
}