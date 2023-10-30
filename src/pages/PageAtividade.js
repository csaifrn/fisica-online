import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardCorpoAtividade } from '../components/PageAtividade';
import { PageContext } from '../contexts';

function PageAtividade() {
    const { disciplina, topico, subtopico, idTexto, idAtividade } = useParams();
    const dados = useContext(PageContext);

    useEffect(() => {
        dados.page = [
            disciplina,
            topico,
            subtopico,
            parseInt(idTexto),
            parseInt(idAtividade)
        ];
    }, []);

    return <CardCorpoAtividade />;
}

export default PageAtividade;
