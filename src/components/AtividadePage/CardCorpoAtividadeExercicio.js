import '../../styles/exercicio.css';
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
            {content.questoes ? <hr /> : choice(content)}
            {content.questoes?.map(questao => {
                return (
                    questao.descricao.map(({ tipo, dado }, index) => {
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
                    })
                    choice(questao.iframe);
                )
            })}
        </div>
    );
};

export default CardCorpoAtividadeExercicio;
