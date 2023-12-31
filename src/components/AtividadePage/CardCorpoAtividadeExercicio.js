import { Fragment } from 'react';
import '../../styles/exercicio.css';
import CardCorpoAtividadeExercicioQuantidade from './CardCorpoAtividadeExercicioQuantidade';
import CardCorpoAtividadeExercicioDicotomica from './CardCorpoAtividadeExercicioDicotomica';
import CardCorpoAtividadeExercicioDoisValores from './CardCorpoAtividadeExercicioDoisValores';
import { Alert, UncontrolledAlert } from 'reactstrap';

/**
 * Renders a card for an exercise activity.
 *
 * @param {Object} content - The content of the card.
 * @returns {JSX.Element} - The rendered card component.
 */
const CardCorpoAtividadeExercicio = ({ content, tipo }) => {
    const choice = iframe => {
        switch (tipo) {
            case 'quantidade':
                return (
                    <CardCorpoAtividadeExercicioQuantidade
                        id={iframe.id}
                        imagem={iframe.imagem}
                        resposta={iframe.resposta}
                    />
                );
            case 'dicotomica':
                return (
                    <CardCorpoAtividadeExercicioDicotomica
                        resposta={iframe.resposta}
                        comentarios={iframe.comentarios}
                    />
                );
            case 'dois valores':
                return (
                    <CardCorpoAtividadeExercicioDoisValores
                        id={iframe.id}
                        imagem={iframe.imagem}
                        respostas={iframe.respostas}
                    />
                );
            default:
                return null;
        }
    };

    const descricao = ({ tag, inner }, index) => {
        switch (tag) {
            case 'texto':
                return (
                    <p key={index} className="esp10">
                        {inner}
                    </p>
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
