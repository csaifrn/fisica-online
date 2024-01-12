import { usePageData } from '../../hooks';

const CardCorpoAtividadeRodape = () => {
    const dados = usePageData();

    const imprimir = () => {
        window.print();
    };

    return (
        <div>
            <div style={{ textAlign: 'right' }}>
                <button className="btnImprimir" onClick={imprimir}>
                    IMPRIMIR
                </button>
            </div>
            <p className="esp10 tamanho1">
                <b>Créditos da aula:</b>
            </p>
            {dados.autor && (
                <p className="esp10 tamanho1">
                    {dados.autor.nome} - IFRN/CNAT ({dados.autor.data})
                </p>
            )}
        </div>
    );
};

export default CardCorpoAtividadeRodape;
