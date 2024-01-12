import CardCorpoDisciplinaItem from './CardCorpoDisciplinaItem';
import { useDocumentTitle, usePageData, useQuery } from '../../hooks';

const CardCorpoDisciplina = () => {
    const dados = usePageData();
    const query = useQuery(dados.id);
    useDocumentTitle(dados.titulo);

    const topicos = query({ relative: 'children' });

    const topicoLinks = topicos.map(topico => ({
        id: topico.id,
        link: query({ link: topico.id }),
        nome: topico.titulo
    }));

    return (
        <div className="aula-body">
            <ul className="list">
                {topicoLinks.map(topico => (
                    <CardCorpoDisciplinaItem key={topico.id} {...topico} />
                ))}
            </ul>
        </div>
    );
};

export default CardCorpoDisciplina;
