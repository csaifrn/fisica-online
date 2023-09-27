import "../css/exercicio.css";

const CardCorpoAtividadeExercicio = (props) => {
    let R1 = 150;

    const confirmar = () => {};

    const refazer = () => {};

    return (
        <div>
            <h1>{props["content"]["titulo"]}</h1>
            <p className="esp10">{props["content"]["descricao"]}</p>
            <div className="iframe">
                <form name="formulario">
                    <input className="button button1 bptn" type="button" id="btnC" onClick={confirmar} value="Confirmar" />
                    <input className="button button1 bptn" type="button" id="btnR" onClick={refazer} value="Tente novamente" hidden />
                </form>
            </div>
        </div>
    );
}

export default CardCorpoAtividadeExercicio;