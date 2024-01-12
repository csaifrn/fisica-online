import AppNavEnd from '../AppNavEnd';
import CardCorpoSubtopicoRodape from './CardCorpoSubtopicoRodape';
import CardCorpoSubtopicoConteudoLista from './CardCorpoSubtopicoConteudoLista';
import CardCorpoSubtopicoAtividades from './CardCorpoSubtopicoAtividades';
import textos from '../../data/textos';
import { useDocumentTitle, usePageData, useQuery } from '../../hooks';

const CardCorpoSubtopico = () => {
    const dados = usePageData();
    const query = useQuery(dados.id);
    useDocumentTitle(dados.titulo);

    const conteudos = textos.find(nota => nota.id === dados.id);

    const listas = query({ relative: 'children' });

    return (
        <div className="aula-body">
            <p className="esp10">
                <b>
                    {dados.topico} - {dados.subtopico} - {conteudos.titulo}
                </b>
            </p>
            <CardCorpoSubtopicoConteudoLista itens={conteudos.conteudos} />
            <br />
            <AppNavEnd />
            {listas.length ? (
                <CardCorpoSubtopicoAtividades itens={listas} />
            ) : null}
            <hr />
            <CardCorpoSubtopicoRodape />
        </div>
    );
};

export default CardCorpoSubtopico;
