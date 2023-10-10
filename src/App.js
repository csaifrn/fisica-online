import { useState } from 'react'
import { AppNavBar, CardAtividade } from "./components";
/*import './css/lista01.css';*/

function App() {
  const [atividade] = useState({
    titulo: 'Lista 02',
    disciplina: 'Física',
    descricao: 'Termologia - Calorimetria 01 - Lista 02',
    nota_de_aula: 'http://???',
    topico: 'termologia',
    subtopico: 'calorimetria',
    autor: {
      nome: 'Geraldo',
      data: '2023',
    },
    atividade: { proxima: null, anterior: null },
  })

  return (
    <div id="app">
      <AppNavBar />
      <CardAtividade />
    </div>
  );
}

export default App;
