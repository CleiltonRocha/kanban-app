import './Sidebar.css';
import Logo from '../assets/logo.svg';
import { DeviceTabletSpeaker, FileMinus, FileText, GearSix, Users } from '@phosphor-icons/react';

export function Sidebar() {
  return(
    <aside>
      <img src={Logo} alt="Logo do App Kanban" id="logo"/>
      <nav>
        <a href="#" className="active">
          <DeviceTabletSpeaker 
            weight="bold" 
          />
          Boards
        </a>
        <a href="#">
          <Users  
            weight="bold" 
          />
          Equipes
        </a>
        <a href="#">
          <FileMinus
            weight="bold"
          />
          Relatórios
        </a>
        <a href="#">
          <GearSix
            weight="bold"
          />
          Ajustes
        </a>
      </nav>
    </aside>
  )
}