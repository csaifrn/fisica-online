import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppNavBar, CardAtividade } from "../components";
import dados from '../data/disciplina';


function App() {
  const {disciplina, topico, subtopico, idAtividade} = useParams();
  const [atividade] = useState(dados[disciplina][topico][subtopico][idAtividade]);

  return (
    <div id="app">
      <AppNavBar topico={topico} />
      <CardAtividade atividade={atividade} />
    </div>
  );
}

export default App;