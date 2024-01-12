import { Fragment } from 'react';
import '../../styles/exercicio.css';
import AppCardElement from '../AppCardElement';
import CardCorpoAtividadeExercicioForm from './CardCorpoAtividadeExercicioForm';

/**
 * Renders a card for an exercise activity.
 *
 * @param {Object} content - The content of the card.
 * @returns {JSX.Element} - The rendered card component.
 */
const CardCorpoAtividadeExercicio = ({ content }) => {
    return (
        <div>
            <h1>{content.titulo}</h1>
            {content.descricao.map((element, index) => (
                <AppCardElement key={index} {...element} />
            ))}
            {content.questoes ? (
                ''
            ) : (
                <CardCorpoAtividadeExercicioForm content={content} />
            )}
            {content.questoes?.map(questao => {
                return (
                    <Fragment key={questao.id}>
                        <hr />
                        {questao.descricao.map((element, index) => (
                            <AppCardElement key={index} {...element} />
                        ))}
                        <CardCorpoAtividadeExercicioForm content={questao} />
                    </Fragment>
                );
            })}
        </div>
    );
};

export default CardCorpoAtividadeExercicio;
