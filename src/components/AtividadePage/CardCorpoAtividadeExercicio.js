import CardCorpoAtividadeExercicioQuantidade from './CardCorpoAtividadeExercicioQuantidade';
import CardCorpoAtividadeExercicioDicotomica from './CardCorpoAtividadeExercicioDicotomica';
import CardCorpoAtividadeExercicioDoisValores from './CardCorpoAtividadeExercicioDoisValores';

/**
 * Renders a card for an exercise activity.
 *
 * @param {Object} content - The content of the card.
 * @returns {JSX.Element} - The rendered card component.
 */
const CardCorpoAtividadeExercicio = ({ content, tipo }) => {
    const choice = () => {
        switch (tipo) {
            case 'quantidade':
                return (
                    <CardCorpoAtividadeExercicioQuantidade
                        id={content.id}
                        imagem={content.imagem}
                        resposta={content.resposta}
                    />
                );
            case 'dicotomica':
                return (
                    <CardCorpoAtividadeExercicioDicotomica
                        resposta={content.resposta}
                        comentarios={content.comentarios}
                    />
                );
            case 'dois valores':
                return (
                    <CardCorpoAtividadeExercicioDoisValores
                        id={content.id}
                        imagem={content.imagem}
                        respostas={content.respostas}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>{content.titulo}</h1>
            {content.descricao.map(({ tipo, dado }, index) => {
                switch (tipo) {
                    case 'texto':
                        return (
                            <p key={index} className="esp10">
                                {dado}
                            </p>
                        );
                    case 'imagem':
                        return (
                            <img
                                key={index}
                                className="imagem"
                                src={dado}
                                alt="imagem"
                            />
                        );
                    default:
                        return null;
                }
            })}
            {choice()}
        </div>
    );
};

export default CardCorpoAtividadeExercicio;
