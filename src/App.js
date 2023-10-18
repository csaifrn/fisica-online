import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageAtividade } from './pages'
/*import './css/lista01.css';*/


function App() {
  return (
    <div id="app">
      <BrowserRouter basename="/atividade">
        <Routes>
          <Route path='/' element={<App />} />
          <Route path="/:disciplina/:topico/" element={<App/>}/>
          <Route path="/:disciplina/:topico/:subtopico/:idAtividade" element={<PageAtividade/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
