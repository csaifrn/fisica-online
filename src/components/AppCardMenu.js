import IconPrevious from '../assets/icon-previous.png';
import IconNext from '../assets/icon-next.png';
import IconLib from '../assets/icon-lib.png';
import IconAcess from '../assets/icon-acess.png';
import { usePageData, useNavigate } from '../hooks';

const AppCardMenu = () => {
    const dados = usePageData();
    const navigate = useNavigate();

    const anteriorPagina = () => {
        navigate(dados.pagina.anterior);
    };

    const proximaPagina = () => {
        navigate(dados.pagina.proxima);
    };

    return (
        <div className="aula-menu d-flex">
            <div>
                <h4 tabIndex={0}>{dados.disciplina}</h4>
            </div>
            <div className="items d-flex">
                {dados.pagina && (
                    <>
                        {dados.pagina.anterior != null && (
                            <div tabIndex={0} onClick={anteriorPagina}>
                                <img src={IconPrevious} alt="Página Anterior" />
                            </div>
                        )}
                        {dados.pagina.proxima != null && (
                            <div tabIndex={0} onClick={proximaPagina}>
                                <img src={IconNext} alt="Próxima Página" />
                            </div>
                        )}
                    </>
                )}
                <div tabIndex={0}>
                    <img src={IconLib} alt="ativar VLibras" />
                </div>
                <div tabIndex={0}>
                    <img src={IconAcess} alt="Janela de Acessibilidade" />
                </div>
            </div>
        </div>
    );
};

export default AppCardMenu;
