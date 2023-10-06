import { useState } from "react";
import CardCorpoAtividadeExercicio from "./CardCorpoAtividadeExercicio";
import CardRodapeAtividade from "./CardRodapeAtividade";
import {Image01, Image02, Image03} from "../assets";

const CardCorpoAtividade = () => {
    const [exercicios] = useState([
        {
            id: 1,
            titulo: 'Exercicio 1',
            descricao: 'Uma fonte térmica transfere 4,5 kcal em um intervalo de tempo de 0,5 min. Calcule a potência térmica desta fonte, em cal/s.',
            image: Image01,
            answer: "150"
        },
        {
            id: 2,
            titulo: 'Exercicio 2',
            descricao: 'Uma fonte de potência térmica 600 kcal/h funcional durante 45 minutos. Calcule a quantidade de calor liberada durante este intervalo de tempo.',
            image: Image02,
            answer: "450"
        },
        {
            id: 3,
            titulo: 'Exercicio 3',
            descricao: 'Uma determinada fonte térmica apresenta potência térmica de 1200 cal/s. Determine o intervalo de tempo necessário para que esta fonte forneça 30 kcal.',
            image: Image03,
            answer: "25"
        }
    ])

    return (
        <div className="aula-body">
            <button className="btnImprimir">Nota de aula</button>
            <p className="esp10"><b>Termologia - Calorimetria 01 - Lista 02</b></p>
            <CardCorpoAtividadeExercicio content={exercicios[0]} />
            <CardCorpoAtividadeExercicio content={exercicios[1]} />
            <CardCorpoAtividadeExercicio content={exercicios[2]} />
            <br/>
            <nav className="nav-fim-aula">
                <a tabIndex={0} href="#top"><span className="seta seta-anterior"></span></a>
                <a tabIndex={0} href="#top"><span className="seta seta-top"></span></a>
                <a tabIndex={0} href="#top"><span className="seta seta-prox"></span></a>
            </nav>
            <hr/>
            <CardRodapeAtividade />
        </div>
    );
};

export default CardCorpoAtividade;