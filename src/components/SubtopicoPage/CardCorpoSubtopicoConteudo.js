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
                        <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: inner }}
                            className="esp10"
                        ></p>
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
                        <p
                            key={index}
                            className="esp10 esq20"
                            dangerouslySetInnerHTML={{ __html: inner }}
                        ></p>
                    );
                case 'comentario verde':
                    return (
                        <p
                            key={index}
                            className="esp10 comentario1 verde round"
                            dangerouslySetInnerHTML={{ __html: inner }}
                        ></p>
                    );
                case 'comentario azul':
                    return (
                        <p
                            key={index}
                            className="esp10 comentario2 azul round"
                            dangerouslySetInnerHTML={{ __html: inner }}
                        ></p>
                    );
                case 'comentario cinza':
                    return (
                        <p
                            key={index}
                            className="esp10 comentario1 cinza round"
                            dangerouslySetInnerHTML={{ __html: inner }}
                        ></p>
                    );
                case 'comentario cinza2':
                    return (
                        <p
                            key={index}
                            className="esp10 comentario1 cinza2 round"
                            dangerouslySetInnerHTML={{ __html: inner }}
                        ></p>
                    );
                case 'cinza2':
                    return (
                        <p
                            key={index}
                            className="esp10 cinza2 round"
                            dangerouslySetInnerHTML={{ __html: inner }}
                        ></p>
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
