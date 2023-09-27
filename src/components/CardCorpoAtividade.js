import { useState } from "react";
import CardCorpoAtividadeExercicio from "./CardCorpoAtividadeExercicio";
import CardRodapeAtividade from "./CardRodapeAtividade";

const CardCorpoAtividade = () => {
    const [exercicios, useExercicios] = useState([
        {
            id: 1,
            titulo: 'Exercicio 1',
            descricao: 'Uma fonte térmica transfere 4,5 kcal em um intervalo de tempo de 0,5 min. Calcule a potência térmica desta fonte, em cal/s.',
        },
    ])

    return (
        <div className="aula-body">
            <button className="btnImprimir">Nota de aula</button>
            <p className="esp10"><b>Termologia - Calorimetria 01 - Lista 01</b></p>
            <CardCorpoAtividadeExercicio content={exercicios[0]} />
            <br/>
            <nav className="nav-fim-aula">
                <a tabIndex={0} href="#"><span className="seta seta-top"></span></a>
                <a tabIndex={0} href="#"><span className="seta seta-prox"></span></a>
            </nav>
            <hr/>
            <CardRodapeAtividade />
        </div>
    );
};

export default CardCorpoAtividade;