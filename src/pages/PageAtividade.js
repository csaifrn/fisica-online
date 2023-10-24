import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NavBarAtividade, CardAtividade } from '../components/PageAtividade';
import { AtividadeContext } from '../contexts';
import dados from '../data/disciplina';

const getAtividade = (disciplina, topico, subtopico, id) =>
    dados[disciplina][topico][subtopico][parseInt(id)];

function PageAtividade() {
    const { disciplina, topico, subtopico, idAtividade } = useParams();
    const [atividade, setAtividade] = useState(
        getAtividade(disciplina, topico, subtopico, idAtividade)
    );
    const navigate = useNavigate();

    const updateAtividade = novaAtividadeId => {
        setAtividade(
            getAtividade(disciplina, topico, subtopico, novaAtividadeId)
        );
        navigate(`../${disciplina}/${topico}/${subtopico}/${novaAtividadeId}`);
    };

    const previousAtividade = () => {
        updateAtividade(atividade.atividade.anterior);
    };

    const nextAtividade = () => {
        updateAtividade(atividade.atividade.proxima);
    };

    return (
        <AtividadeContext.Provider value={atividade}>
            <NavBarAtividade />
            <CardAtividade
                navigate={{ previous: previousAtividade, next: nextAtividade }}
            />
        </AtividadeContext.Provider>
    );
}

export default PageAtividade;
