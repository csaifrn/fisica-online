import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppNavEnd from '../AppNavEnd';
import CardCorpoSubtopicoConteudo from './CardCorpoSubtopicoConteudo';
import PageContext from '../../contexts/PageContext';
import notas_de_aula from '../../data/notas_de_aula';

const CardCorpoSubtopico = () => {
    const dados = useContext(PageContext);

    const [conteudos] = useState(notas_de_aula['calorimetria'][0].conteudos);

    const renderConteudo = conteudo => (
        <CardCorpoSubtopicoConteudo key={conteudo.id} content={conteudo} />
    );

    return (
        <div className="aula-body">
            <p className="esp10">
                <b>
                    {dados.page.topico} - {dados.page.subtopico} - Aula{' '}
                    {dados.page.titulo}
                </b>
            </p>
            {conteudos.map(renderConteudo)}
            <br />
            <h1>Listas</h1>
            <ul className="list">
                <li key={0}>
                    <Link to="/fisica/termologia/calorimetria/0/0">
                        Lista 01
                    </Link>
                </li>
                <li key={1}>
                    <Link to="/fisica/termologia/calorimetria/0/1">
                        Lista 02
                    </Link>
                </li>
            </ul>
            <AppNavEnd />
        </div>
    );
};

export default CardCorpoSubtopico;
