import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppNavBar, CardAtividade } from "../components";
import { AtividadeContext } from '../contexts';
import dados from '../data/disciplina';


function PageAtividade() {
  const {disciplina, topico, subtopico, idAtividade} = useParams();
  const id = parseInt(idAtividade);
  const [atividade, setAtividade] = useState(dados[disciplina][topico][subtopico][id]);
  const navigate = useNavigate();

  const atualizarAtividade = (novaAtividadeId) => {
    setAtividade(dados[disciplina][topico][subtopico][novaAtividadeId]);
    navigate(`../${disciplina}/${topico}/${subtopico}/${novaAtividadeId}`);
  };
  
  const anterior_ativ = () => {
    atualizarAtividade(atividade.atividade.anterior);
  };
  
  const proxima_ativ = () => {
    atualizarAtividade(atividade.atividade.proxima);
  };

  return (
    <AtividadeContext.Provider value={atividade}>
      <AppNavBar />
      <CardAtividade navigate={{previous: anterior_ativ, next: proxima_ativ}} />
    </AtividadeContext.Provider>
  );
}

export default PageAtividade;