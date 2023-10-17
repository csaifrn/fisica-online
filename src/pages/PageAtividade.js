import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppNavBar, CardAtividade } from "../components";
import dados from '../data/disciplina';


function App() {
  const {disciplina, topico, subtopico, idAtividade} = useParams();
  const id = parseInt(idAtividade);
  const [atividade] = useState(dados[disciplina][topico][subtopico][id]);
  const navigate = useNavigate();

  const anterior_ativ = () => {
    navigate(`../${disciplina}/${topico}/${subtopico}/${atividade.atividade.anterior}`)
  }

  const proxima_ativ = () => {
    navigate(`../${disciplina}/${topico}/${subtopico}/${atividade.atividade.proxima}`)
  }

  return (
    <div id="app">
      <AppNavBar topico={atividade.topico} />
      <CardAtividade atividade={atividade}  navigate={{previous: anterior_ativ, next: proxima_ativ}} />
    </div>
  );
}

export default App;