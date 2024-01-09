import { useState, useRef } from 'react';
import { Certo, Errado } from '../../assets';
import styles from '../../styles/exercicioDoisValores.module.css';

const posicoes = {
    cientifica: {
        x1: 80,
        y1: 30,
        x2: 190,
        y2: 8,
        xbtn: 60,
        ybtn: 120,
        xM: 110,
        yM: 80,
        x1a() {
            return this.x1 + 55;
        },
        y1a() {
            return this.y1 - 10;
        },
        x2a() {
            return this.x2 + 55;
        },
        y2a() {
            return this.y2 - 5;
        }
    },
    vetores: {
        x1: 75,
        y1: 35,
        x2: 215,
        y2: 35,
        xbtn: 60,
        ybtn: 90,
        xM: 110,
        yM: 80,
        x1a() {
            return this.x1 + 60;
        },
        y1a() {
            return this.y1 - 10;
        },
        x2a() {
            return this.x2 + 45;
        },
        y2a() {
            return this.y2 - 5;
        }
    }
};

const CardCorpoAtividadeExercicioDoisValores = ({
    id,
    imagem,
    resposta,
    estiloVars
}) => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
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

    const p = posicoes[estiloVars];

    const estiloCaixa1 = {
        top: `${p.y1}px`,
        left: `${p.x1}px`
    };

    const estiloCaixa2 = {
        top: `${p.y2}px`,
        left: `${p.x2}px`
    };

    const estiloBotao = {
        top: `${p.ybtn}px`,
        left: `${p.xbtn}px`
    };

    const estiloMensagem = {
        top: `${p.yM}px`,
        left: `${p.xM}px`
    };

    const estiloFigura1 = {
        top: `${p.y1a()}px`,
        left: `${p.x1a()}px`
    };

    const estiloFigura2 = {
        top: `${p.y2a()}px`,
        left: `${p.x2a()}px`
    };

    const confirmar = () => {
        const { r1, r2, btnC, btnR, acertou, img1a, img1b, img2a, img2b } = ref;
        r1.current.disabled = true;
        r2.current.disabled = true;
        btnC.current.hidden = true;

        if (valor1 === resposta[0] && valor2 === resposta[1]) {
            acertou.current.hidden = false;
        } else {
            btnR.current.hidden = false;
        }

        if (valor1 === resposta[0]) {
            img1a.current.hidden = false;
        } else {
            img1b.current.hidden = false;
        }

        if (valor2 === resposta[1]) {
            img2a.current.hidden = false;
        } else {
            img2b.current.hidden = false;
        }
    };

    const refazer = () => {
        const { r1, r2, btnC, btnR, img1b, img2b } = ref;
        btnC.current.hidden = false;
        btnR.current.hidden = true;

        if (valor1 !== resposta[0]) {
            setValor1('');
            r1.current.disabled = false;
            img1b.current.hidden = true;
        }
        if (valor2 !== resposta[1]) {
            setValor2('');
            r2.current.disabled = false;
            img2b.current.hidden = true;
        }
    };

    return (
        <div className="iframe">
            <img className="formula" src={imagem} alt="Imagem" />
            <form autoComplete="off">
                <input
                    className={styles.caixatxt}
                    style={estiloCaixa1}
                    type="number"
                    ref={ref.r1}
                    placeholder="0"
                    id={`r${id}a1`}
                    maxLength={3}
                    value={valor1}
                    onChange={e => setValor1(parseInt(e.target.value))}
                />
                <input
                    className={styles.caixatxt}
                    style={estiloCaixa2}
                    type="number"
                    ref={ref.r2}
                    placeholder="0"
                    id={`r${id}a2`}
                    maxLength={3}
                    value={valor2}
                    onChange={e => setValor2(parseInt(e.target.value))}
                />
                <input
                    className="button button1"
                    style={estiloBotao}
                    type="button"
                    ref={ref.btnC}
                    onClick={confirmar}
                    value="Confirmar"
                />
                <input
                    className="button button2"
                    style={estiloBotao}
                    type="button"
                    ref={ref.btnR}
                    onClick={refazer}
                    value="Tente novamente"
                    hidden
                />
                <p
                    className="mensagem"
                    style={estiloMensagem}
                    ref={ref.acertou}
                    hidden
                >
                    Parabéns!!
                </p>
            </form>
            <span
                ref={ref.img1a}
                className={styles.imagem}
                style={estiloFigura1}
                hidden
            >
                <img src={Certo} alt="Certo" height={20} />
            </span>
            <span
                ref={ref.img2a}
                className={styles.imagem}
                style={estiloFigura2}
                hidden
            >
                <img src={Certo} alt="Certo" height={20} />
            </span>
            <span
                ref={ref.img1b}
                className={styles.imagem}
                style={estiloFigura1}
                hidden
            >
                <img src={Errado} alt="Errado" height={20} />
            </span>
            <span
                ref={ref.img2b}
                className={styles.imagem}
                style={estiloFigura2}
                hidden
            >
                <img src={Errado} alt="Errado" height={20} />
            </span>
        </div>
    );
};

export default CardCorpoAtividadeExercicioDoisValores;
