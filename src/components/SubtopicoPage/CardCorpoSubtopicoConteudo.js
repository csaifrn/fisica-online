const CardCorpoSubtopicoConteudo = ({ content }) => (
    <div>
        <h1>{content.titulo}</h1>
        {content.descricao.map(({ tipo, dado }, index) => {
            if (tipo === 'texto') {
                return (
                    <p key={index} className="esp10">
                        {dado}
                    </p>
                );
            } else if (tipo === 'imagem') {
                return <img key={index} src={dado} alt="imagem" />;
            } else if (tipo === 'comentario') {
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
