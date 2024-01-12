import CardCorpoSubtopicoConteudoItem from './CardCorpoSubtopicoConteudoItem';

const CardCorpoSubtopicoConteudoLista = ({ itens }) => (
    <>
        {itens.map(conteudo => (
            <CardCorpoSubtopicoConteudoItem
                key={conteudo.id}
                content={conteudo}
            />
        ))}
    </>
);

export default CardCorpoSubtopicoConteudoLista;
