import { useContext, useState } from 'react';
import AppNavEnd from '../AppNavEnd';
import CardCorpoSubtopicoConteudo from './CardCorpoSubtopicoConteudo';
import PageContext from '../../contexts/PageContext';
import { Link } from 'react-router-dom';

const Descricao = (tipo, dado) => ({ tipo, dado });

const CardCorpoSubtopico = () => {
    const dados = useContext(PageContext);

    const [conteudos] = useState([
        {
            id: 1,
            titulo: '1. Caloria',
            descricao: [
                Descricao(
                    'texto',
                    'A caloria é uma unidade de energia utilizada para medir a quantidade de calor transferida de um corpo para outro.'
                ),
                Descricao(
                    'texto',
                    'A unidade de 1 caloria (1 cal) corresponde à quantidade de calor necessária para variar a temperatura de 1 g de água de 14,5 °C para 15,5 °C, a uma pressão atmosférica de 1 atm.'
                ),
                Descricao(
                    'imagem',
                    'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/01.png'
                ),
                Descricao(
                    'texto',
                    'É muito comum o uso da unidade kcal, onde 1 kcal = 1.000 cal.'
                ),
                Descricao(
                    'comentario',
                    'A quantidade de calor trocada por um corpo é aferida em calorias (cal).'
                )
            ]
        }
    ]);

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