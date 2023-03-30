import './Header.css';
import  ProfileImage from '../assets/profile.png';
import { PencilSimple } from '@phosphor-icons/react';

export function Header() {
  return(
    <div className="header">
      <div className="board-name">
        <h1>Meu Kanban</h1>
        <PencilSimple 
          weight="bold" 
        />
      </div>
      <img src={ProfileImage} alt="Foto de perfil" />
    </div>
  )
}