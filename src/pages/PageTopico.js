import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardCorpoTopico } from '../components/PageTopico';
import { PageContext } from '../contexts';

const PageTopico = () => {
    const { disciplina, topico } = useParams();
    const dados = useContext(PageContext);

    useEffect(() => {
        dados.page = [disciplina, topico];
    }, []);

    return <CardCorpoTopico />;
};

export default PageTopico;
