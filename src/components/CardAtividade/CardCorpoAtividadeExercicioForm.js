import { Fragment } from 'react';
import CardCorpoAtividadeExercicioDicotomica from './CardCorpoAtividadeExercicioDicotomica';
import CardCorpoAtividadeExercicioDoisValores from './CardCorpoAtividadeExercicioDoisValores';
import CardCorpoAtividadeExercicioQuantidade from './CardCorpoAtividadeExercicioQuantidade';
import CardCorpoAtividadeExercicioSelecionar from './CardCorpoAtividadeExercicioSelecionar';

const CardCorpoAtividadeExercicioForm = ({ content }) => {
    const components = {
        dicotomica: CardCorpoAtividadeExercicioDicotomica,
        quantidade: CardCorpoAtividadeExercicioQuantidade,
        doisValores: CardCorpoAtividadeExercicioDoisValores,
        selecionar: CardCorpoAtividadeExercicioSelecionar
    };

    let Component = Fragment;

    if (typeof content.resposta === 'number') {
        Component = components.quantidade;
    }
    if (typeof content.resposta === 'boolean') {
        Component = components.dicotomica;
    }
    if (typeof content.resposta === 'object' && content.resposta.length === 2) {
        Component = components.doisValores;
    }
    if (typeof content.resposta === 'object' && content.resposta.length > 2) {
        Component = components.selecionar;
    }

    return <Component {...content} />;
};

export default CardCorpoAtividadeExercicioForm;
