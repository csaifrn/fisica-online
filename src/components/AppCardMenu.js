import { useContext, useEffect } from 'react';
import { PageContext } from '../contexts';
import IconPrevious from '../assets/icon-previous.png';
import IconNext from '../assets/icon-next.png';
import IconLib from '../assets/icon-lib.png';
import IconAcess from '../assets/icon-acess.png';

const AppCardMenu = () => {
    const dados = useContext(PageContext);

    return (
        <div className="aula-menu d-flex">
            <div>
                <h4 tabIndex={0}>{dados.page.disciplina}</h4>
            </div>
            <div className="items d-flex">
                {dados.page.notas_de_aula && (
                    <>
                        <div tabIndex={0}>
                            <img src={IconPrevious} alt="Página Anterior" />
                        </div>
                        <div tabIndex={0}>
                            <img src={IconNext} alt="Próxima Página" />
                        </div>
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