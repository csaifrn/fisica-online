import IconPrevious from "../assets/icon-previous.png";
import IconNext from "../assets/icon-next.png";
import IconLib from "../assets/icon-lib.png";
import IconAcess from "../assets/icon-acess.png"; 

const CardMenuAtividade = ({disciplina, navigate}) => {
    return (
        <div className="aula-menu d-flex">
            <div>
                <h4 tabIndex={0}>{disciplina}</h4>
            </div>
            <div className="items d-flex">
                <div tabIndex={0} onClick={navigate.previous}>
                    <img src={IconPrevious} alt="Página Anterior" />
                </div>
                <div tabIndex={0} onClick={navigate.next}>
                    <img src={IconNext} alt="Próxima Página" />
                </div>
                <div tabIndex={0} data-click="">
                    <img src={IconLib} alt="ativar VLibras" />
                </div>
                <div tabIndex={0} data-click="">
                    <img src={IconAcess} alt="Janela de Acessibilidade" />
                </div>
                
            </div>
        </div>
    )
}

export default CardMenuAtividade;