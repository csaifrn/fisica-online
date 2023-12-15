import { UncontrolledAlert } from 'reactstrap';

const CardCorpoSubtopicoConteudo = ({ content }) => (
    <div>
        <h1>
            {content.id}. {content.titulo}
        </h1>
        {content.conteudo.map(({ tag, inner }, index) => {
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
                            className="imagem"
                            key={index}
                            src={inner}
                            alt="imagem"
                        />
                    );
                case 'linha':
                    return <hr key={index} />;
                case 'titulo':
                    return (
                        <p key={index} className="esp10">
                            <b>{inner}</b>
                        </p>
                    );
                case 'nota':
                    return (
                        <p key={index} className="esp10 esq20">
                            {inner}
                        </p>
                    );
                case 'comentario verde':
                    return (
                        <p
                            key={index}
                            className="esp10 comentario1 verde round"
                        >
                            {inner}
                        </p>
                    );
                case 'comentario azul':
                    return (
                        <p key={index} className="esp10 comentario2 azul round">
                            {inner}
                        </p>
                    );
                case 'comentario cinza':
                    return (
                        <p
                            key={index}
                            className="esp10 comentario1 cinza round"
                        >
                            {inner}
                        </p>
                    );
                case 'comentario cinza2':
                    return (
                        <p
                            key={index}
                            className="esp10 comentario1 cinza2 round"
                        >
                            {inner}
                        </p>
                    );
                case 'cinza2':
                    return (
                        <p key={index} className="esp10 cinza2 round">
                            {inner}
                        </p>
                    );
                default:
                    return (
                        <UncontrolledAlert color="danger">
                            Tag desconhecida
                        </UncontrolledAlert>
                    );
            }
        })}
    </div>
);

export default CardCorpoSubtopicoConteudo;
