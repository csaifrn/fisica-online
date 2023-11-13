import { useState, useContext } from 'react';
import CardCorpoAtividadeExercicio from './CardCorpoAtividadeExercicio';
import CardCorpoAtividadeRodape from './CardCorpoAtividadeRodape';
import AppNavEnd from '../AppNavEnd';
import { PageContext } from '../../contexts';
import atividades from '../../data/atividades';

const CardCorpoAtividade = ({ linkNotaDeAula }) => {
    const dados = useContext(PageContext);

    const [exercicios] = useState(atividades['calorimetria'][0].exercicios);

    const renderExercicio = exercicio => (
        <CardCorpoAtividadeExercicio key={exercicio.id} content={exercicio} />
    );

    return (
        <div className="aula-body">
            <button className="btnImprimir" onClick={linkNotaDeAula}>
                Nota de Aula
            </button>
            <p className="esp10">
                <b>
                    {dados.page.topico} - {dados.page.subtopico}{' '}
                    {dados.page.texto} - {dados.page.titulo}
                </b>
            </p>
            {exercicios.map(renderExercicio)}
            <br />
            <AppNavEnd />
            <hr />
            <CardCorpoAtividadeRodape />
        </div>
    );
};

export default CardCorpoAtividade;
