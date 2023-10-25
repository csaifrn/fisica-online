import IconPrevious from '../assets/icon-previous.png';
import IconNext from '../assets/icon-next.png';
import IconLib from '../assets/icon-lib.png';
import IconAcess from '../assets/icon-acess.png';

const AppCardMenu = () => {
    return (
        <div className="aula-menu d-flex">
            <div>
                <h4 tabIndex={0}>Aula</h4>
            </div>
            <div className="items d-flex">
                <div tabIndex={0}>
                    <img src={IconPrevious} alt="Página Anterior" />
                </div>
                <div tabIndex={0}>
                    <img src={IconNext} alt="Próxima Página" />
                </div>
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
