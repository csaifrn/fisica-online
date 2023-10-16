import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppNavBar, CardAtividade } from "./components";
import dados from './data/disciplina';
/*import './css/lista01.css';*/


function App() {
  const {disciplina, topico, subtopico, idAtividade} = useParams();
  // const [atividade] = useState({
  //   titulo: 'Lista 02',
  //   disciplina: 'Física',
  //   descricao: 'Termologia - Calorimetria 01 - Lista 02',
  //   nota_de_aula: 'http://???',
  //   topico: 'termologia',
  //   subtopico: 'calorimetria',
  //   autor: {
  //     nome: 'Geraldo',
  //     data: '2023',
  //   },
  //   atividade: { proxima: null, anterior: null },
  // })
  const [atividade] = useState(dados[disciplina][topico][subtopico][idAtividade]);

  return (
    <div id="app">
      <AppNavBar />
      <CardAtividade atividade={atividade} />
    </div>
  );
}

export default App;
