import { useRef, useState } from 'react';
import { Certo, Errado } from '../../assets';
import styles from '../../styles/exercicioQuantidade.module.css';

const posicoes = {
    comum: {
        x1: 120,
        y1: 25,
        xbtn: 60,
        ybtn: 90,
        xM: 110,
        yM: 60,
        x1a() {
            return this.x1 + 170;
        },
        y1a() {
            return this.y1 + 10;
        }
    }
};

const CardCorpoAtividadeExercicioQuantidade = ({
    id,
    imagem,
    resposta,
    estiloVars
}) => {
    const [answer, setAnswer] = useState('');
    const refs = {
        r1: useRef(null),
        btnC: useRef(null),
        btnR: useRef(null),
        acertou: useRef(null),
        img1a: useRef(null),
        img1b: useRef(null)
    };

    const p = posicoes[estiloVars];

    const estiloCaixa = {
        top: `${p.y1}px`,
        left: `${p.x1}px`
    };

    const estiloBotao = {
        top: `${p.ybtn}px`,
        left: `${p.xbtn}px`
    };

    const estiloMensagem = {
        top: `${p.yM}px`,
        left: `${p.xM}px`
    };

    const estiloImagem = {
        top: `${p.y1a()}px`,
        left: `${p.x1a()}px`
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
        setAnswer('');
        r1.current.disabled = false;
        img1b.current.hidden = true;
    };

    return (
        <div className="iframe">
            <img className="formula" src={imagem} alt="formula" />
            <form>
                <input
                    autoComplete="off"
                    className={styles.caixatxt}
                    style={estiloCaixa}
                    type="number"
                    ref={refs.r1}
                    id={`r${id}`}
                    maxLength={3}
                    placeholder="0"
                    value={answer}
                    step="any"
                    onChange={e => setAnswer(parseFloat(e.target.value))}
                />
                <input
                    className="button button1"
                    style={estiloBotao}
                    type={'button'}
                    ref={refs.btnC}
                    onClick={confirmar}
                    value="Confirmar"
                />
                <input
                    className="button button2"
                    style={estiloBotao}
                    type={'button'}
                    ref={refs.btnR}
                    onClick={refazer}
                    value="Tente novamente"
                    hidden
                />
                <p
                    className="mensagem"
                    style={estiloMensagem}
                    ref={refs.acertou}
                    hidden
                >
                    Parabéns!!
                </p>
            </form>
            <span
                ref={refs.img1a}
                className={styles.imagem}
                style={estiloImagem}
                hidden
            >
                <img src={Certo} height={20} alt="certo" />
            </span>
            <span
                ref={refs.img1b}
                className={styles.imagem}
                style={estiloImagem}
                hidden
            >
                <img src={Errado} height={20} alt="errado" />
            </span>
        </div>
    );
};

export default CardCorpoAtividadeExercicioQuantidade;
