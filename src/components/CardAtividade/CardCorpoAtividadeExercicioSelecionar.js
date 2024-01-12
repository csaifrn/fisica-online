import { useRef } from 'react';
import style from '../../styles/exercicioSelecionar.module.css';

const CardCorpoAtividadeExercicioSelecionar = ({ id, label, resposta }) => {
    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const refCorrecao = useRef(null);

    const validar = () => {
        if (
            refs.every((ref, index) => ref.current.checked === resposta[index])
        ) {
            refCorrecao.current.value = 'Correto!';
        } else {
            refCorrecao.current.value = 'Tem algo errado...';
        }
    };

    return (
        <form>
            {label.map((opcao, index) => (
                <p className="esp10" key={index}>
                    <label>
                        <input
                            className={style.selecao}
                            type="checkbox"
                            id={`r${id}o${index}`}
                            ref={refs[index]}
                            value={opcao}
                            name="opcao"
                        />
                        {opcao}
                    </label>
                </p>
            ))}
            <p className="esp20">
                <span></span>
            </p>
            <input
                className="btnQ5"
                type="button"
                value="Confirmar"
                onClick={validar}
            />
            <input
                className={style.saida}
                type="text"
                id="textoCorrecao"
                size={4}
                ref={refCorrecao}
                disabled
            />
        </form>
    );
};

export default CardCorpoAtividadeExercicioSelecionar;
