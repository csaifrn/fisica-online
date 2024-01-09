import { Fragment } from 'react';
import '../../styles/exercicio.css';
import CardCorpoAtividadeExercicioQuantidade from './CardCorpoAtividadeExercicioQuantidade';
import CardCorpoAtividadeExercicioDicotomica from './CardCorpoAtividadeExercicioDicotomica';
import CardCorpoAtividadeExercicioDoisValores from './CardCorpoAtividadeExercicioDoisValores';
import { UncontrolledAlert } from 'reactstrap';
import CardCorpoAtividadeExercicioSelecionar from './CardCorpoAtividadeExercicioSelecionar';

/**
 * Renders a card for an exercise activity.
 *
 * @param {Object} content - The content of the card.
 * @returns {JSX.Element} - The rendered card component.
 */
const CardCorpoAtividadeExercicio = ({ content }) => {
    const choice = iframe => {
        if (typeof iframe.resposta === 'number') {
            return (
                <CardCorpoAtividadeExercicioQuantidade
                    id={iframe.id}
                    imagem={iframe.imagem}
                    estiloVars={iframe.estiloVars}
                    resposta={iframe.resposta}
                />
            );
        } else if (typeof iframe.resposta === 'boolean') {
            return (
                <CardCorpoAtividadeExercicioDicotomica
                    resposta={iframe.resposta}
                    comentarios={iframe.comentarios}
                />
            );
        } else if (
            typeof iframe.resposta === 'object' &&
            iframe.resposta.length === 2
        ) {
            return (
                <CardCorpoAtividadeExercicioDoisValores
                    id={iframe.id}
                    imagem={iframe.imagem}
                    estiloVars={iframe.estiloVars}
                    resposta={iframe.resposta}
                />
            );
        } else if (
            typeof iframe.resposta === 'object' &&
            iframe.resposta.length > 2
        ) {
            return (
                <CardCorpoAtividadeExercicioSelecionar
                    id={iframe.id}
                    label={iframe.label}
                    resposta={iframe.resposta}
                />
            );
        } else {
            return null;
        }
    };

    const descricao = ({ tag, inner }, index) => {
        switch (tag) {
            case 'texto':
                return (
                    <p
                        key={index}
                        className="esp10"
                        dangerouslySetInnerHTML={{ __html: inner }}
                    ></p>
                );
            case 'imagem':
                return (
                    <img
                        key={index}
                        className="imagem"
                        src={inner}
                        alt="imagem"
                    />
                );
            default:
                return (
                    <UncontrolledAlert color="danger">
                        Tag desconhecida
                    </UncontrolledAlert>
                );
        }
    };

    return (
        <div>
            <h1>{content.titulo}</h1>
            {content.descricao.map(descricao)}
            {content.questoes ? '' : choice(content)}
            {content.questoes?.map(questao => {
                return (
                    <Fragment key={questao.id}>
                        <hr />
                        {questao.descricao.map(descricao)}
                        {choice(questao)}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default CardCorpoAtividadeExercicio;
