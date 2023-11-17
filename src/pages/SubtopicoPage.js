import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PageContext from '../contexts/PageContext';
import CardCorpoSubtopico from '../components/SubtopicoPage';

const SubtopicoPage = () => {
    const dados = useContext(PageContext);
    const { disciplina, topico, subtopico, idTexto } = useParams();

    useEffect(() => {
        dados.page = [disciplina, topico, subtopico, idTexto];

        // eslint-disable-next-line
    }, [disciplina, topico, subtopico, idTexto]);

    return <CardCorpoSubtopico />;
};

export default SubtopicoPage;
