import { useContext } from 'react';
import { PageContext } from '../../contexts';
import CardCorpoDisciplinaItem from './CardCorpoDisciplinaItem';

const CardCorpoDisciplina = () => {
    const dados = useContext(PageContext);

    const topicos = dados.children();
    const subtopicos = topicos.map(subtopico => {
        return dados.children(subtopico.id);
    });

    const topicoLinks = topicos.map(topico => ({
        id: topico.id,
        link: dados.getLink(topico.id),
        nome: topico.titulo
    }));

    console.log(topicoLinks[0]);

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
