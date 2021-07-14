import './App.css';
import {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {appContext} from './context/appContext'
import Main from './components/Main/Main'
import Header from './components/Header/Header';

function App() {
  const [busqueda, setBusqueda] = useState({})

  const guardarBusqueda = (buscar)=> {
    setBusqueda(buscar)
  }
  const value={
    busqueda,
    save: guardarBusqueda
    
  }

  return (
    <div className="App">
      <BrowserRouter>
        <appContext.Provider value={value}>
          <Header/>
          <Main/>
        </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
