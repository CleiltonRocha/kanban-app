import { Sidebar } from './components/Sidebar';
import './global.css';
import './App.css';
import { Header } from './components/Header';
import { Filter } from './components/Filter';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <Header />
        <Filter />
      </div>
    </div>
  )
}

export default App
