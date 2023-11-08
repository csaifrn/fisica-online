import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContext } from '../contexts';
import { CardCorpoAtividade } from '../components/AtividadePage';

function AtividadePage() {
    const { disciplina, topico, subtopico, idTexto, idAtividade } = useParams();
    const dados = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        dados.page = [
            disciplina,
            topico,
            subtopico,
            parseInt(idTexto),
            parseInt(idAtividade)
        ];
    }, [disciplina, topico, subtopico, idTexto, idAtividade]);

    const linkNotaDeAula = () => {
        navigate(`/${disciplina}/${topico}/${subtopico}/${idTexto}`);
    };

    return <CardCorpoAtividade linkNotaDeAula={linkNotaDeAula} />;
}

export default AtividadePage;
