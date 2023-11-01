import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageContext } from '../contexts';
import { CardCorpoTopico } from '../components/PageTopico';

const PageTopico = () => {
    const { disciplina, topico } = useParams();
    const dados = useContext(PageContext);

    useEffect(() => {
        dados.page = [disciplina, topico];
    }, [disciplina, topico]);

    return <CardCorpoTopico />;
};

export default PageTopico;
