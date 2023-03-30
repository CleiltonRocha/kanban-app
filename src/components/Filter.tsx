import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import './Filter.css';

export function Filter() {
  return(
    <div className="filter">
        <button type="button">
        <FunnelSimple 
          weight="bold" 
        />
          Filtrar
        </button>
        <div className="input-wrapper">
          <MagnifyingGlass 
            weight="bold" 
          />
          <input type="text" placeholder="Busque por cards, assuntos ou responsáveis..." />
        </div>
    </div>
  )
}