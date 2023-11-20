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

const Element = (tipo, dado) => ({ tipo, dado });

const atividades = [
    {
        id: 6,
        tipo: 'quantidade',
        exercicios: [
            {
                id: 1,
                titulo: 'Exercicio 01',
                descricao: [
                    Element(
                        'texto',
                        'Uma fonte térmica transfere 4,5 kcal em um intervalo de tempo de 0,5 min. Calcule a potência térmica desta fonte, em cal/s.'
                    )
                ],
                imagem: Image01,
                resposta: '150'
            },
            {
                id: 2,
                titulo: 'Exercicio 02',
                descricao: [
                    Element(
                        'texto',
                        'Uma fonte de potência térmica 600 kcal/h funcional durante 45 minutos. Calcule a quantidade de calor liberada durante este intervalo de tempo.'
                    )
                ],
                imagem: Image02,
                resposta: '450'
            },
            {
                id: 3,
                titulo: 'Exercicio 03',
                descricao: [
                    Element(
                        'texto',
                        'Uma determinada fonte térmica apresenta potência térmica de 1200 cal/s. Determine o intervalo de tempo necessário para que esta fonte forneça 30 kcal.'
                    )
                ],
                imagem: Image03,
                resposta: '25'
            },
            {
                id: 4,
                titulo: 'Exercicio 04',
                descricao: [
                    Element(
                        'texto',
                        'O corpo humano, em seu estado basal, cede calor para o ambiente a uma taxa média de aproximadamente 100 W (varia de pessoa para pessoa e das condições ambientes).'
                    ),
                    Element(
                        'texto',
                        'Nestas condições, qual o gasto calórico mínimo de uma pessoa, em um dia?'
                    )
                ],
                imagem: Image04,
                resposta: '2067'
            },
            {
                id: 5,
                titulo: 'Exercicio 05',
                descricao: [
                    Element(
                        'texto',
                        'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                    ),
                    Element('imagem', Formula1),
                    Element('texto', 'Calcule a potência térmica desta fonte.')
                ],
                imagem: Image05,
                resposta: '3000'
            },
            {
                id: 6,
                titulo: 'Exercicio 06',
                descricao: [
                    Element(
                        'texto',
                        'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                    ),
                    Element('imagem', Formula2),
                    Element(
                        'texto',
                        'Calcule a quantidade de calor disponibilizada por esta fonte após um intervalo de tempo de 10min:30s.'
                    )
                ],
                imagem: Image06,
                resposta: '60'
            }
        ]
    },
    {
        id: 11,
        tipo: 'dicotomica',
        exercicios: [
            {
                id: 0,
                titulo: 'Exercicio 01',
                descricao: [
                    Element(
                        'texto',
                        'A força resultante sobre um corpo é a soma vetorial de todas as forças que atuam no corpo. A força resultante pode ser nula, mesmo que várias forças atuem sobre o corpo.'
                    )
                ],
                comentarios: [
                    'Ops! A afirmação é verdadeira!',
                    'A afirmação é verdadeira! \n  Como já vimos no curso de vetores, é possível que uma soma vetorial apresente, como resultante, um vetor nulo.'
                ],
                resposta: true
            },
            {
                id: 1,
                titulo: 'Exercicio 02',
                descricao: [
                    Element(
                        'texto',
                        'Se a força resultante sobre um corpo é nula, então nenhuma força atua sobre o corpo.'
                    )
                ],
                comentarios: [
                    'Ops! A afirmação é falsa!',
                    'A afirmação é falsa! \n Neste caso, várias forças atuam sobre o corpo, porém a soma vetorial destas forças é um vetor nulo.'
                ],
                resposta: false
            },
            {
                id: 2,
                titulo: 'Exercicio 03',
                descricao: [
                    Element(
                        'texto',
                        'Se a força resultante sobre um corpo é nula, o corpo está em repouso.'
                    )
                ],
                comentarios: [
                    'Ops! Erro clássico... ',
                    'A afirmação é falsa, pois se a força resultante sobre um corpo é nula, a velocidade do corpo não varia. Logo, o corpo pode estar em repouso ou em MRU.'
                ],
                resposta: false
            },
            {
                id: 3,
                titulo: 'Exercicio 04',
                descricao: [
                    Element(
                        'texto',
                        'Se um corpo se move com velocidade constante (MRU), então a força resultante sobre o corpo é nula.'
                    )
                ],
                comentarios: [
                    'Errado! Não é preciso a existência de uma força para ocorrer movimento!!!!!',
                    'A afirmação é verdadeira, pois uma força resultante nula indica que a velocidade do corpo não muda, o que pode caracterizar o repouso ou MRU.'
                ],
                resposta: true
            },
            {
                id: 4,
                titulo: 'Exercicio 05',
                descricao: [
                    Element(
                        'texto',
                        'Se um corpo está em movimento, certamente a força resultante é não nula.'
                    )
                ],
                comentarios: [
                    'Erro clássico... Leia o conteúdo novamente!',
                    ' A afirmação é falsa. Não é necessária a ação de uma força resultante não nula para um corpo permanecer em movimento (o corpo pode estar em MRU).'
                ],
                resposta: false
            }
        ]
    },
    {}
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
                    imagem: ['url', 'url', 'url'],
                    resposta: [150, 510, 120]
                }
            }
        ]
    }
];

export default atividades;
