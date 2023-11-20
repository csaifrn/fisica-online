import { useRef } from 'react';
import {
    Verdadeiro,
    VerdadeiroCerto,
    VerdadeiroErrado,
    Falso,
    FalsoCerto,
    FalsoErrado
} from '../../assets';

const CardCorpoAtividadeExercicioDicotomica = ({ resposta, comentarios }) => {
    const refs = {
        r01a: useRef(null),
        r01b: useRef(null),
        r01c: useRef(null),
        r02a: useRef(null),
        r02b: useRef(null),
        r02c: useRef(null),
        acertou: useRef(null),
        errou: useRef(null)
    };

    const v1 = () => {
        const { r01a, r01b, r01c, r02a, r02b, r02c, acertou, errou } = refs;
        if (resposta == true) {
            r01a.current.hidden = true;
            r01b.current.hidden = false;

            acertou.current.hidden = false;
            errou.current.hidden = true;
        } else {
            r01a.current.hidden = true;
            r01c.current.hidden = false;

            acertou.current.hidden = true;
            errou.current.hidden = false;
        }
        r02a.current.hidden = false;
        r02b.current.hidden = true;
        r02c.current.hidden = true;
    };

    const f1 = () => {
        const { r01a, r01b, r01c, r02a, r02b, r02c, acertou, errou } = refs;
        if (resposta == false) {
            r02a.current.hidden = true;
            r02b.current.hidden = false;

            acertou.current.hidden = false;
            errou.current.hidden = true;
        } else {
            r02a.current.hidden = true;
            r02c.current.hidden = false;

            acertou.current.hidden = true;
            errou.current.hidden = false;
        }
        r01a.current.hidden = false;
        r01b.current.hidden = true;
        r01c.current.hidden = true;
    };

    return (
        <>
            <div className="centralizar esp20">
                <img
                    ref={refs.r01a}
                    tabIndex={0}
                    className="duasopcoes"
                    src={Verdadeiro}
                    alt="Verdadeiro"
                    onClick={v1}
                />
                <img
                    ref={refs.r01b}
                    tabIndex={0}
                    src={VerdadeiroCerto}
                    hidden
                    alt="Verdadeiro"
                />
                <img
                    ref={refs.r01c}
                    tabIndex={0}
                    src={VerdadeiroErrado}
                    hidden
                    alt="Verdadeiro"
                />
                <img
                    ref={refs.r02a}
                    tabIndex={0}
                    className="duasopcoes"
                    src={Falso}
                    alt="Falso"
                    onClick={f1}
                />
                <img
                    ref={refs.r02b}
                    tabIndex={0}
                    src={FalsoCerto}
                    hidden
                    alt="Falso"
                />
                <img
                    ref={refs.r02c}
                    tabIndex={0}
                    src={FalsoErrado}
                    hidden
                    alt="Falso"
                />
            </div>
            <p ref={refs.acertou} className="comentario1 azul" hidden>
                {comentarios[1]}
            </p>
            <p ref={refs.errou} className="comentario1 laranja" hidden>
                {comentarios[0]}
            </p>
        </>
    );
};

export default CardCorpoAtividadeExercicioDicotomica;
