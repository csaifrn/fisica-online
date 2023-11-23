import { useState, useRef } from 'react';
import { Certo, Errado } from '../../assets';
import styles from '../../styles/exercicioDoisValores.module.css';

const CardCorpoAtividadeExercicioDoisValores = ({ id, imagem, respostas }) => {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const ref = {
        r1: useRef(null),
        r2: useRef(null),
        btnC: useRef(null),
        btnR: useRef(null),
        acertou: useRef(null),
        img1a: useRef(null),
        img2a: useRef(null),
        img1b: useRef(null),
        img2b: useRef(null)
    };

    const confirmar = () => {
        const { r1, r2, btnC, btnR, acertou, img1a, img1b, img2a, img2b } = ref;
        r1.current.disabled = true;
        r2.current.disabled = true;
        btnC.current.hidden = true;

        if (valor1 === respostas[0] && valor2 === respostas[1]) {
            acertou.current.hidden = false;
        } else {
            btnR.current.hidden = false;
        }

        if (valor1 === respostas[0]) {
            img1a.current.hidden = false;
        } else {
            img1b.current.hidden = false;
        }

        if (valor2 === respostas[1]) {
            r2.current.disabled = true;
            img2a.current.hidden = false;
        } else {
            img2b.current.hidden = false;
        }
    };

    const refazer = () => {
        const { r1, r2, btnC, btnR, img1b, img2b } = ref;
        btnC.current.hidden = false;
        btnR.current.hidden = true;

        if (valor1 !== respostas[0]) {
            r1.current.value = '';
            r1.current.disabled = false;
            img1b.current.hidden = true;
        }
        if (valor2 !== respostas[1]) {
            r2.current.value = '';
            r2.current.disabled = false;
            img2b.current.hidden = true;
        }
    };

    return (
        <div className="iframe">
            <img className="formula" src={imagem} alt="Imagem" />
            <form autoComplete="off">
                <input
                    className={`${styles.caixatxt} ${styles.p1}`}
                    type="text"
                    ref={ref.r1}
                    id={`r${id}a1`}
                    maxLength={3}
                    onChange={e => setValor1(parseInt(e.target.value))}
                />
                <input
                    className={`${styles.caixatxt} ${styles.p2}`}
                    type="text"
                    ref={ref.r2}
                    id={`r${id}a2`}
                    maxLength={3}
                    onChange={e => setValor2(parseInt(e.target.value))}
                />
                <input
                    className={`button button1 ${styles.pbtn}`}
                    type="button"
                    ref={ref.btnC}
                    onClick={confirmar}
                    value="Confirmar"
                />
                <input
                    className={`button button2 ${styles.pbtn}`}
                    type="button"
                    ref={ref.btnR}
                    onClick={refazer}
                    value="Tente novamente"
                    hidden
                />
                <p
                    className={`mensagem ${styles.pMensagem}`}
                    ref={ref.acertou}
                    hidden
                >
                    Parabéns!!
                </p>
            </form>
            <span ref={ref.img1a} className={styles.imagem1} hidden>
                <img src={Certo} alt="Certo" height={20} />
            </span>
            <span ref={ref.img2a} className={styles.imagem2} hidden>
                <img src={Errado} alt="Errado" height={20} />
            </span>
            <span ref={ref.img1b} className={styles.imagem1} hidden>
                <img src={Certo} alt="Certo" height={20} />
            </span>
            <span ref={ref.img2b} className={styles.imagem2} hidden>
                <img src={Errado} alt="Errado" height={20} />
            </span>
        </div>
    );
};

export default CardCorpoAtividadeExercicioDoisValores;
