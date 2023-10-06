import { useState, useRef } from "react";
import { Certo, Errado } from "../assets";
import "../css/exercicio.css";

const CardCorpoAtividadeExercicio = (props) => {
    const [answer, setAnswer] = useState('');
    const r1Ref = useRef(null);
    const btnCRef = useRef(null);
    const btnRRef = useRef(null);
    const acertouRef = useRef(null);
    const img1aRef = useRef(null);
    const img1bRef = useRef(null);

    const confirmar = () => {
        r1Ref.current.disabled = true;
        btnCRef.current.hidden = true;

        if (answer===props.content.answer) {
            acertouRef.current.hidden = false;
            img1aRef.current.hidden = false;
        } else {
            btnRRef.current.hidden = false;
            img1bRef.current.hidden = false;
        }
    };

    const refazer = () => {
        btnCRef.current.hidden = false;
        btnRRef.current.hidden = true;
        setAnswer('');
        r1Ref.current.disabled = false;
        img1bRef.current.hidden = true;
    };

    return (
        <div>
            <h1>{props.content.titulo}</h1>
            <p className="esp10">{props.content.descricao}</p>
            <div className="iframe">
                <img style={{position: "absolute", left: "0px", top: "10px"}} src={props.content.image} alt="formula" />
                <form name="formulario">
                    <input autoComplete="off" className="caixatxt p1" type={"text"} ref={r1Ref} name="r1" maxLength={3} value={answer} onChange={e => setAnswer(e.target.value)} />
                    <input className="button button1 pbtn" type={"button"} ref={btnCRef} onClick={confirmar} value="Confirmar" />
                    <input className="button button2 pbtn" type={"button"} ref={btnRRef} onClick={refazer} value="Tente novamente" hidden />
                    <p className="mensagem pMensagem" ref={acertouRef} hidden>Parabéns!!</p>
                </form>
                <span ref={img1aRef} className="imagem1" hidden><img src={Certo} height={20} alt="certo"/></span>
                <span ref={img1bRef} className="imagem1" hidden><img src={Errado} height={20} alt="errado"/></span>
            </div>
        </div>
    );
}

export default CardCorpoAtividadeExercicio;