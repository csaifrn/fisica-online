import { useContext } from 'react';
import { PageContext } from '../../contexts';

const CardRodapeAtividade = () => {
    const dados = useContext(PageContext);

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
            {dados.page.autor && (
                <p className="esp10 tamanho1">
                    {dados.page.autor.nome} - IFRN/CNAT ({dados.page.autor.data}
                    )
                </p>
            )}
        </div>
    );
};

export default CardRodapeAtividade;
