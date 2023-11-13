import {
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Formula1,
    Formula2
} from '../assets/calorimetria01/lista01';

const atividades = [];

const Descricao = (tipo, dado) => ({ tipo, dado });

atividades['calorimetria'] = [
    {
        id: 0,
        exercicios: [
            {
                id: 1,
                titulo: 'Exercicio 01',
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
                titulo: 'Exercicio 02',
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
                titulo: 'Exercicio 03',
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
                titulo: 'Exercicio 04',
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
                titulo: 'Exercicio 05',
                descricao: [
                    Descricao(
                        'texto',
                        'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                    ),
                    Descricao('imagem', Formula1),
                    Descricao(
                        'texto',
                        'Calcule a potência térmica desta fonte.'
                    )
                ],
                image: Image05,
                answer: '3000'
            },
            {
                id: 6,
                titulo: 'Exercicio 06',
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
        ]
    }
];

atividades['dinamica'] = [
    {
        id: 0
    },
    {
        id: 1
    },
    {
        id: 2,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercicio 01',
                descricao: [
                    {
                        tipo: 'texto',
                        data: 'Um corpo de massa 40 kg está em repouso sobre uma mesa, conforme mostrado na figura.'
                    },
                    {
                        tipo: 'imagem',
                        data: 'link para a figura'
                    },
                    {
                        tipo: 'lista',
                        data: [
                            'Determine o módulo da força resultante sobre o corpo.',
                            'Determine o módulo da força peso do corpo.',
                            'Determine o módulo da força normal que a mesa aplica no corpo.'
                        ]
                    }
                ],
                respostas: {
                    image: ['url', 'url', 'url'],
                    answer: [150, 510, 120]
                }
            }
        ]
    }
];

export default atividades;
