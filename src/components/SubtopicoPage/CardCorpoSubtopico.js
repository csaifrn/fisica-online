import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppNavEnd from '../AppNavEnd';
import CardCorpoSubtopicoConteudo from './CardCorpoSubtopicoConteudo';
import CardCorpoSubtopicoRodape from './CardCorpoSubtopicoRodape';
import { PageContext } from '../../contexts';
import notas_de_aula from '../../data/notas_de_aula';

const CardCorpoSubtopico = () => {
    const dados = useContext(PageContext);

    const conteudos = notas_de_aula.find(nota => nota.id === dados.page.id);

    const listas = dados.children();

    const renderConteudo = conteudo => (
        <CardCorpoSubtopicoConteudo key={conteudo.id} content={conteudo} />
    );

    return (
        <div className="aula-body">
            <p className="esp10">
                <b>
                    {dados.page.topico} - {dados.page.subtopico} -{' '}
                    {conteudos?.titulo}
                </b>
            </p>
            {conteudos?.conteudos.map(renderConteudo)}
            <br />
            <AppNavEnd />
            {listas.length !== 0 && (
                <>
                    <h1>Atividades</h1>
                    <ul className="list">
                        {listas.map(lista => (
                            <li key={lista.id}>
                                <Link to={dados.getLink(lista.id)}>
                                    {lista.titulo}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <hr />
            <CardCorpoSubtopicoRodape />
        </div>
    );
};

export default CardCorpoSubtopico;
