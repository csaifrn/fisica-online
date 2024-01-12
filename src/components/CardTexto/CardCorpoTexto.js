import AppNavEnd from '../AppNavEnd';
import CardCorpoTextoRodape from './CardCorpoTextoRodape';
import CardCorpoTextoConteudoLista from './CardCorpoTextoConteudoLista';
import CardCorpoTextoAtividades from './CardCorpoTextoAtividades';
import textos from '../../data/textos';
import { useDocumentTitle, usePageData, useQuery } from '../../hooks';

const CardCorpoTexto = () => {
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
            <CardCorpoTextoConteudoLista itens={conteudos.conteudos} />
            <br />
            <AppNavEnd />
            {listas.length ? <CardCorpoTextoAtividades itens={listas} /> : null}
            <hr />
            <CardCorpoTextoRodape />
        </div>
    );
};

export default CardCorpoTexto;
