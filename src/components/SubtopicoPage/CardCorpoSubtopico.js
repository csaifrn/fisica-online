import { Link } from 'react-router-dom';
import AppNavEnd from '../AppNavEnd';
import CardCorpoSubtopicoRodape from './CardCorpoSubtopicoRodape';
import notas_de_aula from '../../data/notas_de_aula';
import { usePageData, useQuery } from '../../hooks';
import CardCorpoSubtopicoConteudoLista from './CardCorpoSubtopicoConteudoLista';

const CardCorpoSubtopico = () => {
    const dados = usePageData();
    const query = useQuery(dados.id);

    const conteudos = notas_de_aula.find(nota => nota.id === dados.id);

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
            {listas.length !== 0 && (
                <>
                    <h1 className="topico">Atividades</h1>
                    <div className="paragrafo">
                        <ul className="list">
                            {listas.map(lista => (
                                <li key={lista.id}>
                                    <Link to={query({ link: lista.id })}>
                                        {lista.titulo}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
            <hr />
            <CardCorpoSubtopicoRodape />
        </div>
    );
};

export default CardCorpoSubtopico;
