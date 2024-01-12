import AppCardElement from '../AppCardElement';

const CardCorpoSubtopicoConteudoItem = ({ content }) => (
    <div>
        <h1>
            {content.id}. {content.titulo}
        </h1>
        {content.conteudo.map((element, index) => (
            <AppCardElement key={index} {...element} />
        ))}
    </div>
);

export default CardCorpoSubtopicoConteudoItem;
