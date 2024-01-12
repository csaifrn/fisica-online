import { UncontrolledAlert } from 'reactstrap';
const AppElement = ({ tag, inner }) => {
    switch (tag) {
        case 'texto':
            return (
                <p
                    dangerouslySetInnerHTML={{ __html: inner }}
                    className="esp10"
                ></p>
            );
        case 'imagem':
            return <img className="imagem" src={inner} alt="imagem" />;
        case 'linha':
            return <hr />;
        case 'titulo':
            return (
                <p className="esp10">
                    <b>{inner}</b>
                </p>
            );
        case 'nota':
            return (
                <p
                    className="esp10 esq20"
                    dangerouslySetInnerHTML={{ __html: inner }}
                ></p>
            );
        case 'comentario verde':
            return (
                <p
                    className="esp10 comentario1 verde round"
                    dangerouslySetInnerHTML={{ __html: inner }}
                ></p>
            );
        case 'comentario azul':
            return (
                <p
                    className="esp10 comentario2 azul round"
                    dangerouslySetInnerHTML={{ __html: inner }}
                ></p>
            );
        case 'comentario cinza':
            return (
                <p
                    className="esp10 comentario1 cinza round"
                    dangerouslySetInnerHTML={{ __html: inner }}
                ></p>
            );
        case 'comentario cinza2':
            return (
                <p
                    className="esp10 comentario1 cinza2 round"
                    dangerouslySetInnerHTML={{ __html: inner }}
                ></p>
            );
        case 'cinza2':
            return (
                <p
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
};

export default AppElement;
