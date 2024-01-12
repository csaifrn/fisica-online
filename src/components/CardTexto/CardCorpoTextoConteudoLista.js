import CardCorpoTextoConteudoItem from './CardCorpoTextoConteudoItem';

const CardCorpoTextoConteudoLista = ({ itens }) => (
    <>
        {itens.map(conteudo => (
            <CardCorpoTextoConteudoItem key={conteudo.id} content={conteudo} />
        ))}
    </>
);

export default CardCorpoTextoConteudoLista;
