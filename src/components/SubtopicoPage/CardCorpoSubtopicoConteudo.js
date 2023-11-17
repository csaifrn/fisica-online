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
                case 'comentario':
                    return (
                        <p key={index} className="verde round comentario1">
                            {dado}
                        </p>
                    );
            }
        })}
    </div>
);

export default CardCorpoSubtopicoConteudo;
