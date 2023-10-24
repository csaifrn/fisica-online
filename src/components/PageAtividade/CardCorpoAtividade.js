import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CardCorpoAtividadeExercicio from './CardCorpoAtividadeExercicio';
import CardRodapeAtividade from './CardRodapeAtividade';
import { AtividadeContext } from '../../contexts';
import {
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Formula1,
    Formula2
} from '../../assets';

const Descricao = (tipo, dado) => ({ tipo, dado });

const CardCorpoAtividade = ({ navigate }) => {
    const { nota_de_aula, descricao, atividade } = useContext(AtividadeContext);
    const [exercicios] = useState([
        {
            id: 1,
            titulo: 'Exercicio 1',
            descricao: [
                Descricao(
                    'texto',
                    'Uma fonte térmica transfere 4,5 kcal em um intervalo de tempo de 0,5 min. Calcule a potência térmica desta fonte, em cal/s.'
                )
            ],
            image: Image01,
            answer: '150'
        },
        {
            id: 2,
            titulo: 'Exercicio 2',
            descricao: [
                Descricao(
                    'texto',
                    'Uma fonte de potência térmica 600 kcal/h funcional durante 45 minutos. Calcule a quantidade de calor liberada durante este intervalo de tempo.'
                )
            ],
            image: Image02,
            answer: '450'
        },
        {
            id: 3,
            titulo: 'Exercicio 3',
            descricao: [
                Descricao(
                    'texto',
                    'Uma determinada fonte térmica apresenta potência térmica de 1200 cal/s. Determine o intervalo de tempo necessário para que esta fonte forneça 30 kcal.'
                )
            ],
            image: Image03,
            answer: '25'
        },
        {
            id: 4,
            titulo: 'Exercicio 4',
            descricao: [
                Descricao(
                    'texto',
                    'O corpo humano, em seu estado basal, cede calor para o ambiente a uma taxa média de aproximadamente 100 W (varia de pessoa para pessoa e das condições ambientes).'
                ),
                Descricao(
                    'texto',
                    'Nestas condições, qual o gasto calórico mínimo de uma pessoa, em um dia?'
                )
            ],
            image: Image04,
            answer: '2067'
        },
        {
            id: 5,
            titulo: 'Exercicio 5',
            descricao: [
                Descricao(
                    'texto',
                    'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                ),
                Descricao('imagem', Formula1),
                Descricao('texto', 'Calcule a potência térmica desta fonte.')
            ],
            image: Image05,
            answer: '3000'
        },
        {
            id: 6,
            titulo: 'Exercicio 6',
            descricao: [
                Descricao(
                    'texto',
                    'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                ),
                Descricao('imagem', Formula2),
                Descricao(
                    'texto',
                    'Calcule a quantidade de calor disponibilizada por esta fonte após um intervalo de tempo de 10min:30s.'
                )
            ],
            image: Image06,
            answer: '60'
        }
    ]);

    const renderExercicio = exercicio => (
        <CardCorpoAtividadeExercicio key={exercicio.id} content={exercicio} />
    );

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="aula-body">
            <Link to={nota_de_aula}>
                <button className="btnImprimir">Nota de aula</button>
            </Link>
            <p className="esp10">
                <b>{descricao}</b>
            </p>
            {exercicios.map(renderExercicio)}
            <br />
            <nav className="nav-fim-aula">
                {atividade.anterior !== null && (
                    <span
                        tabIndex={0}
                        className="seta seta-anterior"
                        onClick={navigate.previous}
                    ></span>
                )}
                <span
                    tabIndex={0}
                    className="seta seta-top"
                    onClick={scrollToTop}
                ></span>
                {atividade.proxima !== null && (
                    <span
                        tabIndex={0}
                        className="seta seta-prox"
                        onClick={navigate.next}
                    ></span>
                )}
            </nav>
            <hr />
            <CardRodapeAtividade />
        </div>
    );
};

export default CardCorpoAtividade;
