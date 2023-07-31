import IconPrevious from "../assets/icon-previous.png";
import IconNext from "../assets/icon-next.png";
import IconLib from "../assets/icon-lib.png";
import IconAcess from "../assets/icon-acess.png"; 

const CardMenuAtividade = () => {
    return (
        <div className="aula-menu d-flex">
            <div>
                <h4>Física</h4>
            </div>
            <div className="items">
                <img src={IconPrevious} alt="Página Anterior" />
                <img src={IconNext} alt="Próxima Página" />
                <img src={IconLib} alt="ativar VLibras" />
                <img src={IconAcess} alt="Janela de Acessibilidade" />
            </div>
        </div>
    )
}

export default CardMenuAtividade;