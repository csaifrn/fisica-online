import { useContext } from 'react';
import { PageContext } from '../../contexts';

const CardCorpoSubtopicoRodape = () => {
    const dados = useContext(PageContext);

    return (
        <div>
            <p className="esp10 tamanho1">
                <b>Créditos</b>
            </p>
            {dados.page.autor && (
                <p className="esp10 tamanho1">
                    {dados.page.autor.nome} / IFRN-CNAT ({dados.page.autor.data}
                    )
                </p>
            )}
        </div>
    );
};

export default CardCorpoSubtopicoRodape;
