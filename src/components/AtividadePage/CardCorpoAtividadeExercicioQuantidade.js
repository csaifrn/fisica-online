import { useRef, useState } from 'react';
import { Certo, Errado } from '../../assets';
import styles from '../../styles/exercicioQuantidade.module.css';

const CardCorpoAtividadeExercicioQuantidade = ({ id, imagem, resposta }) => {
    const [answer, setAnswer] = useState(0);
    const refs = {
        r1: useRef(null),
        btnC: useRef(null),
        btnR: useRef(null),
        acertou: useRef(null),
        img1a: useRef(null),
        img1b: useRef(null)
    };

    /**
     * Handles the confirm button click.
     * Disables the input field and hides the confirm button.
     * Shows the correct or incorrect message based on the answer.
     */
    const confirmar = () => {
        const { r1, btnC, btnR, acertou, img1a, img1b } = refs;
        r1.current.disabled = true;
        btnC.current.hidden = true;

        if (answer === resposta) {
            acertou.current.hidden = false;
            img1a.current.hidden = false;
        } else {
            btnR.current.hidden = false;
            img1b.current.hidden = false;
        }
    };

    /**
     * Handles the try again button click.
     * Resets the input field and shows the confirm button.
     * Enables the input field and hides the incorrect message.
     */
    const refazer = () => {
        const { r1, btnC, btnR, img1b } = refs;
        btnC.current.hidden = false;
        btnR.current.hidden = true;
        setAnswer(0);
        r1.current.disabled = false;
        img1b.current.hidden = true;
    };

    return (
        <div className="iframe">
            <img className="formula" src={imagem} alt="formula" />
            <form>
                <input
                    autoComplete="off"
                    className={`${styles.caixatxt} ${styles.p1}`}
                    type="number"
                    ref={refs.r1}
                    id={`r${id}`}
                    maxLength={3}
                    value={answer}
                    step={0.01}
                    onChange={e => setAnswer(parseFloat(e.target.value))}
                />
                <input
                    className={`button button1 ${styles.pbtn}`}
                    type={'button'}
                    ref={refs.btnC}
                    onClick={confirmar}
                    value="Confirmar"
                />
                <input
                    className={`button button2 ${styles.pbtn}`}
                    type={'button'}
                    ref={refs.btnR}
                    onClick={refazer}
                    value="Tente novamente"
                    hidden
                />
                <p
                    className={`mensagem ${styles.pMensagem}`}
                    ref={refs.acertou}
                    hidden
                >
                    Parabéns!!
                </p>
            </form>
            <span ref={refs.img1a} className={styles.imagem1} hidden>
                <img src={Certo} height={20} alt="certo" />
            </span>
            <span ref={refs.img1b} className={styles.imagem1} hidden>
                <img src={Errado} height={20} alt="errado" />
            </span>
        </div>
    );
};

export default CardCorpoAtividadeExercicioQuantidade;
