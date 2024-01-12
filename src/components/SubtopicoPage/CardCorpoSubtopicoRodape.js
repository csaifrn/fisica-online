import { usePageData } from '../../hooks';

const CardCorpoSubtopicoRodape = () => {
    const dados = usePageData();

    return (
        <div>
            <p className="esp10 tamanho1">
                <b>Créditos</b>
            </p>
            {dados.autor && (
                <p className="esp10 tamanho1">
                    {dados.autor.nome} / IFRN-CNAT ({dados.autor.data})
                </p>
            )}
        </div>
    );
};

export default CardCorpoSubtopicoRodape;
