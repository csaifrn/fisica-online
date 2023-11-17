const CardCorpoSubtopicoConteudo = ({ content }) => (
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
                            className="imagem"
                            key={index}
                            src={dado}
                            alt="imagem"
                        />
                    );
                case 'linha':
                    return <hr key={index} />;
                case 'titulo':
                    return (
                        <p key={index} className="esp10">
                            <b>{dado}</b>
                        </p>
                    );
                case 'nota':
                    return (
                        <p key={index} className="esp10 esq20">
                            {dado}
                        </p>
                    );
                case 'comentario verde':
                    return (
                        <p
                            key={index}
                            className="esp10 comentario2 verde round"
                        >
                            {dado}
                        </p>
                    );
                case 'comentario azul':
                    return (
                        <p key={index} className="esp10 comentario2 azul round">
                            {dado}
                        </p>
                    );
                default:
                    return null;
            }
        })}
    </div>
);

export default CardCorpoSubtopicoConteudo;
