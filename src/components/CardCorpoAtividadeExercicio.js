import { useState } from "react";
import "../css/exercicio.css";

const CardCorpoAtividadeExercicio = (props) => {
    const [answer, setAnswer] = useState('');

    const confirmar = () => {};

    const refazer = () => {};

    return (
        <div>
            <h1>{props["content"]["titulo"]}</h1>
            <p className="esp10">{props["content"]["descricao"]}</p>
            <div className="iframe">
                <img style={{position: "absolute", left: "0px", top: "10px"}} src={props["content"]["image"]} alt="formula" />
                <form name="formulario">
                    <input autoComplete="off" className="caixatxt p1" type={"text"} id="r1" name="r1" maxLength={3} value={answer} onChange={e => setAnswer(e.target.value)} />
                    <input className="button button1 pbtn" type="button" id="btnC" onClick={confirmar} value="Confirmar" />
                    <input className="button button1 pbtn" type="button" id="btnR" onClick={refazer} value="Tente novamente" hidden />
                </form>
            </div>
        </div>
    );
}

export default CardCorpoAtividadeExercicio;