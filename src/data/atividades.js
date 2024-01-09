import * as Calorimetria0101 from '../assets/calorimetria01/lista01';
import * as Calorimetria0102 from '../assets/calorimetria01/lista02';
import * as Calorimetria0103 from '../assets/calorimetria01/lista03';
import * as Calorimetria0201 from '../assets/calorimetria02/lista01';
import * as Calorimetria0202 from '../assets/calorimetria02/lista02';
import * as Dinamica0202 from '../assets/dinamica02/lista02';

const atividades = [
    {
        id: 5,
        exercicios: [
            {
                id: 1,
                titulo: 'Exercicio 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Em um experimento no curso de química, um estudante desidrata e queima 100 g de tapioca, aferindo que, nessa queima, foram liberadas 380 kcal.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule o poder calorífico da tapioca em kcal/g.'
                    }
                ],
                imagem: Calorimetria0101.Image01,
                estiloVars: 'comum',
                resposta: 3.8
            },
            {
                id: 2,
                titulo: 'Exercicio 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O poder calorífico de um tipo de lenha é de 2500 kcal/kg. Calcule a quantidade de lenha necessária para liberar 12.000 kcal.'
                    }
                ],
                imagem: Calorimetria0101.Image02,
                estiloVars: 'comum',
                resposta: 4.8
            },
            {
                id: 3,
                titulo: 'Exercicio 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Considere um combustível com poder calorífico 6.000 kcal/kg.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule a quantidade de calor liberada se 400 g desse combustível for queimada.'
                    }
                ],
                imagem: Calorimetria0101.Image03,
                estiloVars: 'comum',
                resposta: 2400
            },
            {
                id: 4,
                titulo: 'Exercicio 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Para realizar um determinado trabalho, uma pessoa usou 5 kg gasolina, com poder calorífico 11.100 kcal/kg.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule a quantidade de álcool que a pessoa precisa usar para liberar essa mesma quantidade de energia. O poder calorífico do álcool é 6400 kcal/kg.'
                    }
                ],
                imagem: Calorimetria0101.Image04,
                estiloVars: 'comum',
                resposta: 8.7
            },
            {
                id: 5,
                titulo: 'Exercicio 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra a quantidade de calor liberada por um determinado combustível em função da massa de combustível que é queimado.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule a quantidade de calor liberada se 5 kg deste combustível for queimado.'
                    },
                    {
                        tag: 'texto',
                        inner: '<b>Observação</b>: digite sua resposta em notação científica.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0101.Formula1
                    }
                ],
                imagem: Calorimetria0101.Image05,
                estiloVars: 'cientifica',
                resposta: [8, 3]
            }
        ]
    },
    {
        id: 6,
        exercicios: [
            {
                id: 1,
                titulo: 'Exercicio 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma fonte térmica transfere 4,5 kcal em um intervalo de tempo de 0,5 min. Calcule a potência térmica desta fonte, em cal/s.'
                    }
                ],
                imagem: Calorimetria0102.Image01,
                estiloVars: 'comum',
                resposta: 150
            },
            {
                id: 2,
                titulo: 'Exercicio 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma fonte de potência térmica 600 kcal/h funcional durante 45 minutos. Calcule a quantidade de calor liberada durante este intervalo de tempo.'
                    }
                ],
                imagem: Calorimetria0102.Image02,
                estiloVars: 'comum',
                resposta: 450
            },
            {
                id: 3,
                titulo: 'Exercicio 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma determinada fonte térmica apresenta potência térmica de 1200 cal/s. Determine o intervalo de tempo necessário para que esta fonte forneça 30 kcal.'
                    }
                ],
                imagem: Calorimetria0102.Image03,
                estiloVars: 'comum',
                resposta: 25
            },
            {
                id: 4,
                titulo: 'Exercicio 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O corpo humano, em seu estado basal, cede calor para o ambiente a uma taxa média de aproximadamente 100 W (varia de pessoa para pessoa e das condições ambientes.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Nestas condições, qual o gasto calórico mínimo de uma pessoa, em um dia?'
                    }
                ],
                imagem: Calorimetria0102.Image04,
                estiloVars: 'comum',
                resposta: 2067
            },
            {
                id: 5,
                titulo: 'Exercicio 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                    },
                    { tag: 'imagem', inner: Calorimetria0102.Formula1 },
                    {
                        tag: 'texto',
                        inner: 'Calcule a potência térmica desta fonte.'
                    }
                ],
                imagem: Calorimetria0102.Image05,
                estiloVars: 'comum',
                resposta: 3000
            },
            {
                id: 6,
                titulo: 'Exercicio 06',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                    },
                    { tag: 'imagem', inner: Calorimetria0102.Formula2 },
                    {
                        tag: 'texto',
                        inner: 'Calcule a quantidade de calor disponibilizada por esta fonte após um intervalo de tempo de 10min:30s.'
                    }
                ],
                imagem: Calorimetria0102.Image06,
                estiloVars: 'comum',
                resposta: 60
            }
        ]
    },
    {
        id: 21,
        exercicios: [
            {
                id: 1,
                titulo: 'Exercicio 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'As especificações técnicas de um determinado fogão indicam que o seu queimador de menor tamanho apresenta potência térmica de 650 cal/s e rendimento de 40%.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0103.Formula1
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule a quantidade de calor útil fornecida por este queimador em um intervalo de tempo de 10 min.'
                    }
                ],
                imagem: Calorimetria0103.Image01,
                estiloVars: 'cientifica',
                resposta: [1.56, 5]
            },
            {
                id: 2,
                titulo: 'Exercicio 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma pessoa possui 15 kg de lenha, com poder calorífico de 3200 kcal/kg, e irá utilizar esta lenha em uma fogueira para preparar seu alimento.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0103.Formula2
                    },
                    {
                        tag: 'texto',
                        inner: 'Considerando que o rendimento seja de 5%, calcule a quantidade útil de calor que a pessoa pode obter queimando toda a lenha.'
                    }
                ],
                imagem: Calorimetria0103.Image02,
                estiloVars: 'comum',
                resposta: 2400
            },
            {
                id: 3,
                titulo: 'Exercicio 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um botijão de gás de cozinha com, usando em residências, contém 13 kg de GLP (gás liquefeito de petróleo), com poder calorífico de 11.900 kcal/kg.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0103.Formula3
                    },
                    {
                        tag: 'texto',
                        inner: 'Determine a quantidade útil de calor que pode se obter com este botijão, supondo um fogão com queimadores cujo rendimento é de 60 %.'
                    }
                ],
                imagem: Calorimetria0103.Image03,
                estiloVars: 'cientifica',
                resposta: [9.3, 4]
            },
            {
                id: 4,
                titulo: 'Exercicio 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Considere um queimador de fogão com potência total de 40 kcal/min e rendimento 45%.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule o intervalo de tempo necessário para este queimador disponibilizar 360 kcal de calor útil.'
                    }
                ],
                imagem: Calorimetria0103.Image04,
                estiloVars: 'comum',
                resposta: 20
            }
        ]
    },
    {
        id: 22,
        exercicios: [
            {
                id: 1,
                titulo: 'Exercicio 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um corpo recebe 2000 kcal de calor de uma fonte térmica, sofrendo um aumento de temperatura de 30 °C para 70 °C.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Determine a capacidade térmica do corpo.'
                    }
                ],
                imagem: Calorimetria0201.Image01,
                estiloVars: 'comum',
                resposta: 50
            },
            {
                id: 2,
                titulo: 'Exercicio 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um determinado corpo apresenta capacidade térmica de 6000 kcal/°C.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Determine a quantidade de calor que este corpo deve trocar para que sua temperatura varia de 80 °C para 50 °C.'
                    }
                ],
                imagem: Calorimetria0201.Image02,
                estiloVars: 'cientifica',
                resposta: [-1.8, 5]
            },
            {
                id: 3,
                titulo: 'Exercicio 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um corpo apresenta capacidade térmica 10.000 kcal/°C e recebe calor de uma fonte térmica com potência útil de 40.000 kcal/min.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Determine a variação de temperatura deste corpo após um intervalo de tempo de 45 s.'
                    }
                ],
                imagem: Calorimetria0201.Image03,
                estiloVars: 'comum',
                resposta: 3
            },
            {
                id: 4,
                titulo: 'Exercicio 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Considere um corpo de capacidade térmica 6000 kcal/°C, inicialmente a uma temperatura de 30 °C, que recebe calor de uma fonte térmica de potência útil 800 kcal/s.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Determine o intervalo de tempo necessário para que sua temperatura seja de 50 °C.'
                    }
                ],
                imagem: Calorimetria0201.Image04,
                estiloVars: 'comum',
                resposta: 2.5
            },
            {
                id: 5,
                titulo: 'Exercicio 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Considere que a capacidade térmica de 5 litros de água seja de 5 kcal/°C.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Esta massa de água, inicialmente a 25° C, é posta em uma panela, sobre um queimador de fogão de potência 800 cal/s e rendimento 45 %.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Determine a temperatura da água após um intervalo de tempo de 5 min.'
                    }
                ],
                imagem: Calorimetria0201.Image05,
                estiloVars: 'comum',
                resposta: 46.6
            }
        ]
    },
    {
        id: 23,
        exercicios: [
            {
                id: 1,
                titulo: 'Exercicio 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da temperatura de um corpo homogêneo em função do tempo, ao ser aquecido por uma fonte térmica de potência útil 1200 cal/s.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0202.Formula1
                    },
                    {
                        tag: 'texto',
                        inner: 'Sabendo que este corpo tem massa 36 kg, calcule o calor específico da substância que constitui o corpo.'
                    }
                ],
                imagem: Calorimetria0202.Image01,
                estiloVars: 'comum',
                resposta: 0.2
            },
            {
                id: 2,
                titulo: 'Exercicio 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da temperatura de um corpo em função da quantidade de calor que o corpo cede para o ambiente.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0202.Formula2
                    },
                    {
                        tag: 'texto',
                        inner: 'Sabendo que o corpo é feito de uma substância de calor específico 0,5 cal/g°C, determine a massa do corpo.'
                    }
                ],
                imagem: Calorimetria0202.Image02,
                estiloVars: 'comum',
                resposta: 0.2
            },
            {
                id: 3,
                titulo: 'Exercicio 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma pessoa põe 5 litros de água para aquecer em uma panela, utilizando um queimador de fogão com potência 700 cal/s e rendimento 60%.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Considerando que a temperatura inicial da água era de 20°C, calcule o intervalo de tempo para a água chegar a 100 °C.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Dado: calor específico da água = 1 cal/g°C.'
                    }
                ],
                imagem: Calorimetria0202.Image03,
                estiloVars: 'comum',
                resposta: 0.2
            },
            {
                id: 4,
                titulo: 'Exercicio 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da temperatura de dois corpos homogêneos, A e B, em função da quantidade de calor absorvida.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Os corpos possuem massas iguais a 0,4 kg.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0202.Formula3
                    },
                    {
                        tag: 'linha'
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule o calor específico da substância da qual o corpo A é constituído.'
                    }
                ],
                imagem: Calorimetria0202.Image04a,
                estiloVars: 'comum',
                resposta: 0.2
            }
        ]
    },
    {
        id: 11,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercicio 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A força resultante sobre um corpo é a soma vetorial de todas as forças que atuam no corpo. A força resultante pode ser nula, mesmo que várias forças atuem sobre o corpo.'
                    }
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
                    {
                        tag: 'texto',
                        inner: 'Se a força resultante sobre um corpo é nula, então nenhuma força atua sobre o corpo.'
                    }
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
                    {
                        tag: 'texto',
                        inner: 'Se a força resultante sobre um corpo é nula, o corpo está em repouso.'
                    }
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
                    {
                        tag: 'texto',
                        inner: 'Se um corpo se move com velocidade constante (MRU), então a força resultante sobre o corpo é nula.'
                    }
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
                    {
                        tag: 'texto',
                        inner: 'Se um corpo está em movimento, certamente a força resultante é não nula.'
                    }
                ],
                comentarios: [
                    'Erro clássico... Leia o conteúdo novamente!',
                    ' A afirmação é falsa. Não é necessária a ação de uma força resultante não nula para um corpo permanecer em movimento (o corpo pode estar em MRU).'
                ],
                resposta: false
            }
        ]
    },
    {
        id: 12,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercicio 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de duas forças. Determine, em notação vetorial, a força resultante sobre o corpo.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Formula1 }
                ],
                imagem: Dinamica0202.Image01,
                estiloVars: 'vetores',
                resposta: [140, 0]
            },
            {
                id: 1,
                titulo: 'Exercicio 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de duas forças. Determine, em notação vetorial, a força resultante sobre o corpo.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Formula2 }
                ],
                imagem: Dinamica0202.Image02,
                estiloVars: 'vetores',
                resposta: [20, 0]
            },
            {
                id: 2,
                titulo: 'Exercicio 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de duas forças. Determine, em notação vetorial, a força resultante sobre o corpo.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Formula3 }
                ],
                imagem: Dinamica0202.Image03,
                estiloVars: 'vetores',
                resposta: [0, -25]
            },
            {
                id: 3,
                titulo: 'Exercicio 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de três forças.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Formula4 }
                ],
                questoes: [
                    {
                        id: 4,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'a) Determine, em notação vetorial, a força resultante sobre o corpo, apenas em relação ao eixo x.'
                            }
                        ],
                        imagem: Dinamica0202.Image04a,
                        estiloVars: 'vetores',
                        respostas: [60, 0]
                    },
                    {
                        id: 5,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'b) Determine, em notação vetorial, a força resultante sobre o corpo, apenas em relação ao eixo y.'
                            }
                        ],
                        imagem: Dinamica0202.Image04b,
                        estiloVars: 'vetores',
                        respostas: [0, 0]
                    },
                    {
                        id: 6,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'c) Determine, em notação vetorial, a força resultante sobre o corpo.'
                            }
                        ],
                        imagem: Dinamica0202.Image04c,
                        estiloVars: 'vetores',
                        resposta: [60, 0]
                    }
                ]
            },
            {
                id: 7,
                titulo: 'Exercicio 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de um conjunto de forças.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Formula5 }
                ],
                questoes: [
                    {
                        id: 8,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'a) Determine, em notação vetorial, a força resultante sobre o corpo, apenas em relação ao eixo x.'
                            }
                        ],
                        imagem: Dinamica0202.Image05a,
                        estiloVars: 'vetores',
                        resposta: [-15, 0]
                    },
                    {
                        id: 9,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'b) Determine, em notação vetorial, a força resultante sobre o corpo, apenas em relação ao eixo y.'
                            }
                        ],
                        imagem: Dinamica0202.Image05b,
                        estiloVars: 'vetores',
                        resposta: [0, 20]
                    },
                    {
                        id: 10,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'c) Determine, em notação vetorial, a força resultante sobre o corpo.'
                            }
                        ],
                        imagem: Dinamica0202.Image05c,
                        estiloVars: 'vetores',
                        resposta: [-15, 20]
                    }
                ]
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
                        data: 'Um corpo de massa 40 kg está em repouso sobre uma mesa, conforme mostrado na figura.'
                    },
                    {
                        data: 'link para a figura'
                    },
                    {
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
