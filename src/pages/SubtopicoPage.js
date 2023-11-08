import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PageContext from '../contexts/PageContext';
import CardCorpoSubtopico from '../components/SubtopicoPage';

const PageSubtopico = () => {
    const dados = useContext(PageContext);
    const { disciplina, topico, subtopico, idTexto } = useParams();

    useEffect(() => {
        dados.page = [disciplina, topico, subtopico, idTexto];
    }, [disciplina, topico, subtopico, idTexto]);

    return <CardCorpoSubtopico />;
};

export default PageSubtopico;
