import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageContext } from '../contexts';
import { CardCorpoAtividade } from '../components/AtividadePage';

function AtividadePage() {
    const { disciplina, topico, subtopico, idTexto, idAtividade } = useParams();
    const dados = useContext(PageContext);

    useEffect(() => {
        dados.page = [disciplina, topico, subtopico, idTexto, idAtividade];
    }, [disciplina, topico, subtopico, idTexto, idAtividade]);

    return <CardCorpoAtividade />;
}

export default AtividadePage;
