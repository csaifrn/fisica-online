import * as Calorimetria0101 from '../assets/calorimetria01/lista01';
import * as Calorimetria0102 from '../assets/calorimetria01/lista02';
import * as Calorimetria0103 from '../assets/calorimetria01/lista03';
import * as Calorimetria0201 from '../assets/calorimetria02/lista01';
import * as Calorimetria0202 from '../assets/calorimetria02/lista02';
import * as Calorimetria0401 from '../assets/calorimetria04/lista01';
import * as Calorimetria0402 from '../assets/calorimetria04/lista02';
import * as Termodinamica0201 from '../assets/termodinamica02/lista01';
import * as Termodinamica0202 from '../assets/termodinamica02/lista02';
import * as Termodinamica0203 from '../assets/termodinamica02/lista03';
import * as Termodinamica0301 from '../assets/termodinamica03/lista01';
import * as Termodinamica0302 from '../assets/termodinamica03/lista02';
import * as Termodinamica0401 from '../assets/termodinamica04/lista01';
import * as Termodinamica0402 from '../assets/termodinamica04/lista02';
import * as Dinamica0202 from '../assets/dinamica02/lista02';

const atividades = [
    {
        id: 5,
        exercicios: [
            {
                id: 1,
                titulo: 'Exercício 01',
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
                titulo: 'Exercício 02',
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
                titulo: 'Exercício 03',
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
                titulo: 'Exercício 04',
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
                titulo: 'Exercício 05',
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
                        inner: Calorimetria0101.Figura1
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
                titulo: 'Exercício 01',
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
                titulo: 'Exercício 02',
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
                titulo: 'Exercício 03',
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
                titulo: 'Exercício 04',
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
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                    },
                    { tag: 'imagem', inner: Calorimetria0102.Figura1 },
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
                titulo: 'Exercício 06',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra a quantidade de calor fornecida por uma fonte térmica em função do tempo.'
                    },
                    { tag: 'imagem', inner: Calorimetria0102.Figura2 },
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
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'As especificações técnicas de um determinado fogão indicam que o seu queimador de menor tamanho apresenta potência térmica de 650 cal/s e rendimento de 40%.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0103.Figura1
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
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma pessoa possui 15 kg de lenha, com poder calorífico de 3200 kcal/kg, e irá utilizar esta lenha em uma fogueira para preparar seu alimento.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0103.Figura2
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
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um botijão de gás de cozinha com, usando em residências, contém 13 kg de GLP (gás liquefeito de petróleo), com poder calorífico de 11.900 kcal/kg.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0103.Figura3
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
                titulo: 'Exercício 04',
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
                titulo: 'Exercício 01',
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
                titulo: 'Exercício 02',
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
                titulo: 'Exercício 03',
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
                titulo: 'Exercício 04',
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
                titulo: 'Exercício 05',
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
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da temperatura de um corpo homogêneo em função do tempo, ao ser aquecido por uma fonte térmica de potência útil 1200 cal/s.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0202.Figura1
                    },
                    {
                        tag: 'texto',
                        inner: 'Sabendo que este corpo tem massa 36 kg, calcule o calor específico da substância que constitui o corpo.'
                    }
                ],
                imagem: Calorimetria0202.Image01,
                estiloVars: 'comum2',
                resposta: 0.2
            },
            {
                id: 2,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da temperatura de um corpo em função da quantidade de calor que o corpo cede para o ambiente.'
                    },
                    {
                        tag: 'imagem',
                        inner: Calorimetria0202.Figura2
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
                titulo: 'Exercício 03',
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
                titulo: 'Exercício 04',
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
                        inner: Calorimetria0202.Figura3
                    }
                ],
                questoes: [
                    {
                        id: 0,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'Calcule o calor específico da substância da qual o corpo A é constituído.'
                            }
                        ],
                        imagem: Calorimetria0202.Image04a,
                        estiloVars: 'comum2',
                        resposta: 0.2
                    },
                    {
                        id: 1,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'Calcule o calor específico da substância da qual o corpo B é constituído.'
                            }
                        ],
                        imagem: Calorimetria0202.Image04a,
                        estiloVars: 'comum2',
                        resposta: 0.2
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
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
                titulo: 'Exercício 02',
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
                titulo: 'Exercício 03',
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
                titulo: 'Exercício 04',
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
                titulo: 'Exercício 05',
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
        id: 24,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um gás ideal, no interior de um recipiente indeformável, apresenta pressão de 2 atm e temperatura de 350 K. Calcule a pressão no recipiente caso a temperatura aumente para 400 K.'
                    }
                ],
                imagem: Termodinamica0201.Image01,
                estiloVars: 'comum',
                resposta: 2.3
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um gás ideal, no interior de um recipiente indeformável, apresenta pressão de 4 atm e temperatura de 400 K. Calcule qual deve ser a temperatura do gás para que a pressão interna no recipiente seja de 5 atm.'
                    }
                ],
                imagem: Termodinamica0201.Image02,
                estiloVars: 'comum',
                resposta: 500
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um compressor de refrigerador industrial contém gás ideal a uma temperatura de 340 K, volume V e pressão 2,5 atm. O volume interno do compressor aumenta em 25 % mantendo constante sua pressão. Calcule a temperatura do gás nesta nova situação.'
                    }
                ],
                imagem: Termodinamica0201.Image03,
                estiloVars: 'comum',
                resposta: 425
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um pistão, presente em um motor à combustão, contém certa massa de gás ideal a uma temperatura de 300 K em um volume 500 cm³. Considerando que o volume máximo do pistão é de 600 cm³, qual deve ser a máxima temperatura do gás em seu interior, supondo uma transformação isobárica?'
                    }
                ],
                imagem: Termodinamica0201.Image04,
                estiloVars: 'comum',
                resposta: 360
            },
            {
                id: 4,
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um ilustração didática na qual um gás ideal sofre uma transformação isotérmica, ao receber calor do ambiente.'
                    },
                    { tag: 'imagem', inner: Termodinamica0201.Figura1 },
                    {
                        tag: 'texto',
                        inner: 'Sendo P1 = P e V1 = V e V2 = 4V, calcule a pressão P2 em função da pressão P1.'
                    }
                ],
                imagem: Termodinamica0201.Image05,
                estiloVars: 'comum',
                resposta: 2.3
            }
        ]
    },
    {
        id: 25,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um corpo de massa 40 kg está em repouso sobre uma mesa, conforme mostrado na figura. Determine o módulo da força resultante sobre o corpo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0202.Figura1 },
                    {
                        tag: 'texto',
                        inner: 'Sabendo V<sub>A</sub> = 5 L, calcule o volume V<sub>B</sub>.'
                    }
                ],
                imagem: Termodinamica0202.Image01,
                estiloVars: 'comum',
                resposta: 2
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função da sua temperatura entre dois estados, A e B. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0202.Figura2 },
                    {
                        tag: 'texto',
                        inner: 'Sabendo V<sub>A</sub> = 5 L, calcule o volume V<sub>B</sub>.'
                    }
                ],
                imagem: Termodinamica0202.Image02,
                estiloVars: 'comum',
                resposta: 1.5
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função da sua temperatura. Neste caso, o gás sofre a transformação A -> B e em seguida a transformação B - > C. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0202.Figura3 }
                ],
                questoes: [
                    {
                        id: 0,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'a) Calcule o volume <b>V<sub>B</sub></b> em função do volume <b>V<sub>A</sub>.</b>'
                            }
                        ],
                        imagem: Termodinamica0202.Image03,
                        estiloVars: 'comum',
                        resposta: 6
                    },
                    {
                        id: 1,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'b) Calcule o volume <b>V<sub>C</sub></b> em função do volume <b>V<sub>B</sub>.</b>'
                            }
                        ],
                        imagem: Termodinamica0202.Image04,
                        estiloVars: 'comum',
                        resposta: 0.5
                    }
                ]
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função do seu volume, durante uma transformação isotérmica. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0202.Figura4 },
                    {
                        tag: 'texto',
                        inner: 'Sabendo que no estado A a pressão do gás é <b>P</b>, calcule a pressão no estado B.'
                    }
                ],
                imagem: Termodinamica0202.Image05,
                estiloVars: 'comum',
                resposta: 0.25
            },
            {
                id: 4,
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função da sua temperatura. A massa do gás permanece constante durante este processo.'
                    },
                    {
                        tag: 'texto',
                        inner: 'No estado A a temperatura do gás é de 400 K.'
                    },
                    { tag: 'imagem', inner: Termodinamica0202.Figura5 }
                ],
                questoes: [
                    {
                        id: 0,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'a) Calcule sua temperatura no estado B.'
                            }
                        ],
                        imagem: Termodinamica0202.Image06,
                        estiloVars: 'comum',
                        resposta: 0.5
                    },
                    {
                        id: 1,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'b) Calcule a temperatura do gás no estado C.'
                            }
                        ],
                        imagem: Termodinamica0202.Image07,
                        estiloVars: 'comum',
                        resposta: 800
                    }
                ]
            }
        ]
    },
    {
        id: 26,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função da sua temperatura entre dois estados, A e B. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0203.Figura1 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) A transformação A -> B é isotérmica.',
                    'b) Na transformação A -> B o volume do gás aumenta.',
                    'c) Na transformação A -> B o volume do permanece constante.',
                    'd) Na transformação A -> B o volume do gás diminui.',
                    'e) O gás está sofrendo uma compressão.'
                ],
                resposta: [true, false, false, true, true]
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função da sua temperatura entre dois estados, A e B. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0203.Figura2 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) O gás sofre uma transformação isométrica com diminuição de temperatura e aumento de volume.',
                    'b) O gás está cedendo calor para o ambiente, seu volume diminui e sua pressão permanece constante.',
                    'c) O volume diminui na mesma proporção da diminuição da temperatura.',
                    'd) O gás sofre uma transformação isobárica com diminuição de temperatura e aumento de volume.',
                    'e) O gás sofre uma transformação isobárica com diminuição de temperatura e diminuição de volume.'
                ],
                resposta: [false, true, true, false, true]
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função da sua temperatura. Neste caso, o gás sofre a transformação A -> B e em seguida a transformação B - > C. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0203.Figura3 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) a) A transformação A -> B ocorre com aumento de temperatura e diminuição de volume. Neste caso, o gás sofre uma compressão isobárica.',
                    'b) A transformação B -> C ocorre com aumento de temperatura, aumento de volume e diminuição de pressão.',
                    'c) A transformação A -> B ocorre com aumento de temperatura e aumento de volume. Neste caso, o gás sofre uma expansão isobárica.',
                    'd) A temperatura no estado C é menor que a temperatura no estado A.',
                    'e) A transformação B -> C ocorre com diminuição de pressão e aumento de volume, na mesma proporção. Neste caso, o gás sofre uma expansão isotérmica.'
                ],
                resposta: [false, false, true, false, true]
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um corpo tem capacidade de 2000 J de trabalho. Se o corpo tem uma velocidade inicial de 10 m/s, determine o trabalho realizado pelo corpo na velocidade 20 m/s.'
                    },
                    {
                        tag: 'imagem',
                        inner: Termodinamica0203.Figura4
                    },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) A temperatura do gás aumentou, sua pressão diminui e seu volume aumentou.',
                    'b) A energia cinética média das moléculas do gás não sofreu alteração.',
                    'c) O gás sofre uma expansão isotérmica com diminuição de pressão.',
                    'd) O gás sofre uma expansão isobárica com diminuição de temperatura.',
                    'e) O gás está recebendo calor de uma fonte externa.'
                ],
                resposta: [false, false, true, false, false]
            },
            {
                id: 4,
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um determinada massa de gás sofre a transformação A -> B e, em seguida, a tranformação B -> C, conforme ilustrado no gráfico abaixo.'
                    },
                    {
                        tag: 'imagem',
                        inner: Termodinamica0203.Figura5
                    },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) A transformação A -> B é uma expansão isobárica com aumento de temperatura.',
                    'b) A transformação B -> C é uma expansão isotérmica pois o volume aumenta na mesma proporção da diminuição da pressão.',
                    'c) A transformação A -> B é uma expansão isobárica com diminuição de temperatura.',
                    'd) A transformação B -> C é uma expansão com diminuição de pressão e diminuição de temperatura.',
                    'e) A transformação B -> C é uma expansão isotérmica pois o volume e a pressão aumentam.'
                ],
                resposta: [true, true, false, false, false]
            }
        ]
    },
    {
        id: 27,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico mostra o comportamento da pressão de um gás ideal em função do seu volume, em uma transformação <b>A -&gt; B</b>. Calcule o trabalho realizado neste processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0301.Figura1 }
                ],
                imagem: Termodinamica0301.Image01,
                estiloVars: 'cientifica2',
                resposta: [7.5, 5]
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico mostra o comportamento da pressão de um gás ideal em função do seu volume, em uma transformação <b>A -&gt; B</b>. Calcule o trabalho realizado neste processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0301.Figura2 }
                ],
                imagem: Termodinamica0301.Image02,
                estiloVars: 'cientifica2',
                resposta: [-1, 6]
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico mostra o comportamento da pressão de um gás ideal em função do seu volume, em uma transformação <b>A -&gt; B</b>. Calcule o trabalho realizado neste processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0301.Figura3 }
                ],
                imagem: Termodinamica0301.Image03,
                estiloVars: 'comum',
                resposta: 0
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico mostra o comportamento da pressão de um gás ideal em função da sua temperatura, em uma transformação <b>A -&gt; B</b>.'
                    },
                    { tag: 'imagem', inner: Termodinamica0301.Figura4 }
                ],
                questoes: [
                    {
                        id: 0,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'a) Sabendo que no estado A o volume do gás é de 0,25 m³, calcule a variação de volume entre os estados A e B.'
                            }
                        ],
                        imagem: Termodinamica0301.Image04,
                        estiloVars: 'comum',
                        resposta: 0
                    },
                    {
                        id: 1,
                        descricao: [
                            {
                                tag: 'texto',
                                inner: 'b) Calcule o trabalho realizado neste processo.'
                            }
                        ],
                        imagem: Termodinamica0301.Image05,
                        estiloVars: 'comum',
                        resposta: 0
                    }
                ]
            },
            {
                id: 4,
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico mostra o comportamento da pressão de um gás ideal em função do seu volume, para as transformações <b>A -&gt; B</b>,  <b>B -&gt; C</b>,  <b>C -&gt; D</b> e  <b>D -&gt; A</b>.'
                    },
                    { tag: 'imagem', inner: Termodinamica0301.Figura5 },
                    {
                        tag: 'texto',
                        inner: 'Calcule o trabalho realizado em cada uma dessas transformações.'
                    }
                ],
                imagem: Termodinamica0301.Image06,
                estiloVars: 'comum',
                resposta: 0
            }
        ]
    },
    {
        id: 28,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função do seu volume, entre dois estados, A e B. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0302.Figura1 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) O gás sofre uma expansão isobárica.',
                    'b) O gás realiza trabalho sobre o ambiente externo.',
                    'c) Na transformação A->B o trabalho é positivo.',
                    'd) A temperatura do gás diminuiu.',
                    'e) A temperatura do gás aumentou.'
                ],
                resposta: [true, true, true, false, true]
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função do seu volume, entre dois estados, A e B. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0302.Figura2 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) O gás sofre uma compressão isobárica.',
                    'b) O gás realiza trabalho sobre o ambiente externo.',
                    'c) O gás sofre uma expansão isobárica.',
                    'd) Um trabalho é realizado sobre o gás.',
                    'e) O gás cedeu calor para o ambiente.'
                ],
                resposta: [true, false, false, true, true]
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função do seu volume, entre dois estados, A e B. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0302.Figura3 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) O gás sofre uma expansão isobárica, realizando um trabalho sobre o ambiente externo.',
                    'b) O gás sofre uma compressão isobárica, e o ambiente externo realiza um trabalho sobre o gás.',
                    'c) O gás sofre uma expansão isobárica, e o ambiente externo realiza um trabalho sobre o gás.',
                    'd) O trabalho realizado nesta transformação é nulo.',
                    'e) A temperatura do gás aumentou e o gás recebeu calor do ambiente.'
                ],
                resposta: [false, false, false, true, true]
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função da sua temperatura, entre dois estados, A e B. A massa do gás permanece constante durante este processo.'
                    },
                    { tag: 'imagem', inner: Termodinamica0302.Figura4 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) Nesta transformação o trabalho é nulo e o gás recebe calor do ambiente.',
                    'b) Nesta transformação o trabalho é positivo e o gás recebe calor do ambiente.',
                    'c) Nesta transformação o trabalho é negativo e o gás cede calor do ambiente.',
                    'd) É uma transformação isométrica.',
                    'e) É uma transformação isobárica.'
                ],
                resposta: [true, false, false, true, false]
            },
            {
                id: 4,
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico representa o comportamento da pressão de um gás ideal em função do seu volume, em quatro transformações.'
                    },
                    { tag: 'imagem', inner: Termodinamica0302.Figura5 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) Em módulo, W(B->C) = W(D->A).',
                    'b) Em módulo, W(B->C) > W(D->A).',
                    'c) Nas transformações A -> B e C -> D o trabalho é nulo, pois a transformação é isométrica.',
                    'd) Na transformação A -> B o trabalho é positivo e na transformação C -> D o trabalho é negativo.',
                    'e) Na transformação B -> C o trabalho é positivo, pois o volume aumenta, e na transformação D -> A o trabalho é negativo, pois o volume diminui.'
                ],
                resposta: [false, true, true, false, true]
            }
        ]
    },
    {
        id: 30,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, apenas as que estão corretas.'
                    }
                ],
                label: [
                    'a) Calor é uma grandeza física associada ao grau de agitação térmica das moléculas do corpo.',
                    'b) Dois corpos A e B, com diferentes temperaturas, se postos em contato térmico, trocam temperatura entre si.',
                    'c) A temperatura de um corpo é uma grandeza física associada ao grau de agitação térmica das moléculas do corpo.',
                    'd) Calor é um conceito físico associado a quão quente ou frio está um corpo.',
                    'e) Calor é energia térmica que flui entre dois corpos que estão a diferentes temperaturas.'
                ],
                resposta: [false, false, true, false, true]
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma pessoa segura uma copo de vidro contendo água bem gelada.'
                    },
                    { tag: 'imagem', inner: Calorimetria0401.Figura1 },
                    {
                        tag: 'texto',
                        inner: 'Neste caso, é correto afirmar que:'
                    }
                ],
                label: [
                    'a) a pessoa perde temperatura para o copo.',
                    'b) há um fluxo de calor do copo para a mão da pessoa.',
                    'c) há transferência de frio do copo para a mão da pessoa.',
                    'd) há um fluxo de calor da mão da pessoa para o copo.',
                    'e) há um fluxo de temperatura da mão da pessoa para o copo.'
                ],
                resposta: [false, false, false, true, false]
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma pessoa põe um ovo cozido, ainda quente, em uma vasilha com água fria.'
                    },
                    { tag: 'imagem', inner: Calorimetria0401.Figura2 },
                    {
                        tag: 'texto',
                        inner: 'Para esse sistema, são feitas 5 afirmações. Selecione apenas as que estão corretas.'
                    }
                ],
                label: [
                    'a) O ovo irá perder temperatura e a água irá ganhar temperatura.',
                    'b) A energia cinética média das moléculas do ovo irá diminuir, enquanto a energia cinética média das moléculas da água irá aumentar, até que o equilíbrio térmico seja atingido.',
                    'c) Haverá uma transferência de temperatura do ovo para a água.',
                    'd) Haverá uma transferência de frio da água para o ovo.',
                    'e) Haverá uma transferência de calor do ovo para a água, até que o equilíbrio térmico seja atingido.'
                ],
                resposta: [false, true, false, false, true]
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Considere dois copos idênticos, A e B. O copo A tem 100 ml de água e o corpo B tem 300 ml de água. A temperatura da água é de 25 °C em ambos os copos.'
                    },
                    { tag: 'imagem', inner: Calorimetria0401.Figura3 },
                    {
                        tag: 'texto',
                        inner: 'Para esse sistema, são feitas 5 afirmações. Selecione apenas as que estão corretas.'
                    }
                ],
                label: [
                    'a) O grau de agitação das moléculas de água é maior no copo B.',
                    'b) A energia cinética média das moléculas da água é maior no copo B.',
                    'c) A quantidade de moléculas é maior no copo B.',
                    'd) As moléculas apresentam a mesma energia cinética média, em ambos os copos.',
                    'e) Misturando lentamente estes volumes de água, obtemos 400 ml de água a uma temperatura de 25 °C.'
                ],
                resposta: [false, false, true, true, true]
            }
        ]
    },
    {
        id: 31,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as opções abaixo, apenas as que estão corretas.'
                    }
                ],
                label: [
                    'a) Se um corpo tem capacidade térmica de 500 cal/°C, então ele precisa receber 500 cal para que sua temperatura aumenta 1 °C.',
                    'b) Se um corpo tem capacidade térmica de 230 cal/°C, então ele precisa ceder 230 cal para que sua temperatura diminua 1 °C.',
                    'c) Quanto maior a capacidade térmica de um corpo, maior a quantidade de energia necessária para variar sua temperatura em 1 °C.',
                    'd) Quanto menor a capacidade térmica de um corpo, menor a quantidade de energia necessária para variar sua temperatura em 1 °C.',
                    'e) Podemos entender que, quanto menor a capacidade térmica de um corpo, mais “difícil” variar sua temperatura.'
                ],
                resposta: [true, true, true, true, false]
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Considere dois corpos A e B. O corpo A tem capacidade térmica 800 cal/°C e o corpo B tem capacidade térmica 500 cal/° C.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Sobre o comportamento térmico destes dois corpos são feitas 5 afirmações. Selecione apenas as que estão corretas.'
                    }
                ],
                label: [
                    'a) Se uma mesma quantidade de calor é fornecida aos dois corpos, o corpo A apresenta menor variação de temperatura.',
                    'b) Se os dois corpos cedem uma mesma quantidade de calor para o ambiente, o corpo B apresenta menor variação de temperatura.',
                    'c) Se o corpo A recebe 1000 cal de fonte térmica, sua temperatura aumenta 0,8 °C.',
                    'd) Se o corpo B recebe 1000 cal de fonte térmica, sua temperatura aumenta 2 °C.',
                    'e) Se o corpo B recebe 1000 cal de fonte térmica, sua temperatura aumenta 0,5 °C.'
                ],
                resposta: [true, false, false, true, false]
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da temperatura de dois corpos, A e B, em função do tempo, considerando que os corpos recebem calor de uma fonte térmica de potência útil constante.'
                    },
                    { tag: 'imagem', inner: Calorimetria0402.Figura1 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, apenas as que estão corretas.'
                    }
                ],
                label: [
                    'a) Os corpos recebem a mesma quantidade de calor e o corpo A apresenta maior variação de temperatura.',
                    'b) Os corpos apresentam a mesma variação de temperatura e o corpo B recebe maior quantidade de calor.',
                    'c) Os corpos apresentam a mesma variação de temperatura e recebem a mesma quantidade de calor.',
                    'd) O corpo A apresenta maior capacidade térmica que o corpo B.',
                    'e) Os corpos apresentam a mesma capacidade térmica.'
                ],
                resposta: [false, false, true, false, true]
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da temperatura de dois corpos, A e B, em função do tempo, considerando que os corpos recebem calor de uma fonte térmica de potência útil constante.'
                    },
                    { tag: 'imagem', inner: Calorimetria0402.Figura2 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, apenas as que estão corretas.'
                    }
                ],
                label: [
                    'a) Os corpos recebem a mesma quantidade de calor e o corpo A apresenta maior variação de temperatura.',
                    'b) Os corpos apresentam a mesma variação de temperatura e o corpo B recebe maior quantidade de calor.',
                    'c) Os corpos apresentam a mesma variação de temperatura e recebem a mesma quantidade de calor.',
                    'd) O corpo A apresenta menor capacidade térmica que o corpo B.',
                    'e) Os corpos apresentam a mesma capacidade térmica, pois recebem a mesma quantidade de calor.'
                ],
                resposta: [true, false, false, true, false]
            },
            {
                id: 4,
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura ilustra a interação térmica entre dois corpos A e B.'
                    },
                    { tag: 'imagem', inner: Calorimetria0402.Figura3 },
                    {
                        tag: 'texto',
                        inner: 'Analise a figura e, entre as afirmações abaixo, selecione apenas as que estão corretas.'
                    }
                ],
                label: [
                    'a) A capacidade térmica do corpo B é maior que a capacidade térmica do corpo A.',
                    'b) Os corpos A e B trocam a mesma quantidade de calor.',
                    'c) A variação de temperatura do corpo A é maior que a variação de temperatura do corpo B.',
                    'd) A figura está errada, pois a quantidade de temperatura que o corpo A perde é menor que a quantidade de temperatura que o corpo B ganha, e deveria ser igual.',
                    'e) A capacidade térmica do corpo A é maior que a capacidade térmica do corpo B.'
                ],
                resposta: [false, true, false, false, true]
            }
        ]
    },
    {
        id: 32,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma certa massa de gás ideal realiza 500 J de trabalho e recebe 300 J de calor do ambiente. Calcule a varição de energia interna do gás.'
                    }
                ],
                imagem: Termodinamica0401.Image01,
                estiloVars: 'comum',
                resposta: -200
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma certa massa de gás ideal cede 150 J de calor para o ambiente enquanto realiza um trabalho de 400 J. Calcule a varição de energia interna do gás.'
                    }
                ],
                imagem: Termodinamica0401.Image02,
                estiloVars: 'comum',
                resposta: -550
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma certa massa de gás ideal recebe 600 J de calor do ambiente enquanto realiza um trabalho de 200 J. Calcule a varição de energia interna do gás.'
                    }
                ],
                imagem: Termodinamica0401.Image03,
                estiloVars: 'comum',
                resposta: 400
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um trabalho de 1500 J é realizado sobre um gás ideal. Em seguida esse gás cede 800 J de calor para o ambiente. Calcule a varição de energia interna do gás.'
                    }
                ],
                imagem: Termodinamica0401.Image04,
                estiloVars: 'comum',
                resposta: 700
            },
            {
                id: 4,
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um compressor realiza um trabalho de 1200 J sobre um gás ideal, em uma transformação adiabática. Calcule a varição de energia interna do gás.'
                    }
                ],
                imagem: Termodinamica0401.Image05,
                estiloVars: 'comum',
                resposta: 1200
            },
            {
                id: 5,
                titulo: 'Exercício 06',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um compressor realiza um trabalho de 1200 J sobre um gás ideal, em uma transformação isobárica. Calcule a variável de energia interna do gás.'
                    }
                ],
                imagem: Termodinamica0401.Image06,
                estiloVars: 'comum',
                resposta: -325
            },
            {
                id: 6,
                titulo: 'Exercício 07',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um gás sofre uma transformação isotérmica na qual realiza um trabalho de 475 J.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule a quantidade de calor trocada pelo gás neste processo.'
                    }
                ],
                imagem: Termodinamica0401.Image07,
                estiloVars: 'comum',
                resposta: 475
            },
            {
                id: 7,
                titulo: 'Exercício 08',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Um compressor realiza um trabalho de 4000 J sobre um gás, em uma transformação adiabática. Em seguida, esse gás cede 2200 J de calor para o ambiente, em uma transformação isométrica.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Calcule a variação de energia interna do gás.'
                    }
                ],
                imagem: Termodinamica0401.Image08,
                estiloVars: 'comum',
                resposta: 1800
            }
        ]
    },
    {
        id: 33,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Uma certa massa de gás ideal realiza 500 J de trabalho e recebe 300 J de calor do ambiente.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Selecione apenas as afirmações corretas.'
                    }
                ],
                label: [
                    'a) Ele cedeu 300 J e recebeu 500 J.',
                    'b) A energia interna aumentou.',
                    'c) O trabalho é positivo.',
                    'd) O calor é positivo.',
                    'e) A energia interna diminuiu.'
                ],
                resposta: [false, false, true, true, true]
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Sobre uma certa massa de gás ideal é realizado um trabalho de 500 J em um processo no qual o gás cede 300 J de calor para ambiente.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) Ele cedeu 300 J e recebeu 500 J.',
                    'b) A energia interna aumentou.',
                    'c) O trabalho é positivo.',
                    'd) O calor é positivo.',
                    'e) A energia interna diminuiu.'
                ],
                resposta: [true, true, false, false, false]
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) Em uma transformação isométrica, o trabalho é nulo.',
                    'b) Em uma transformação adiabática, a variação de energia é nula.',
                    'c) Em uma transformação isobárica o trabalho é sempre realizado pelo gás.',
                    'd) Em um transformação adiabática, na qual um trabalho W foi realizado, a variação de energia interna é - W.',
                    'e) Em uma transformação isotérmica, a variação de energia é nula.'
                ],
                resposta: [true, false, false, true, true]
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) Se um trabalho é realizado sobre um gás e este cede calor para o ambiente, necessariamente sua energia interna diminui.',
                    'b) Se o gás realiza trabalho e cede calor para o ambiente, necessariamente sua energia interna diminui.',
                    'c) Se um trabalho é realizado sobre um gás trabalho e este cede calor para o ambiente, necessariamente a variação de sua energia interna é nula.',
                    'd) Se um gás recebe calor do ambiente e um trabalho é realizado sobre ele, sua energia interna aumenta.',
                    'e) Se um trabalho é realizado sobre um gás trabalho e este cede calor para o ambiente, necessariamente a variação de sua energia interna é positiva.'
                ],
                resposta: [false, true, false, true, false]
            },
            {
                id: 4,
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra a transformação ocorrida em um gás ideal.'
                    },
                    { tag: 'imagem', inner: Termodinamica0402.Figura1 },
                    {
                        tag: 'texto',
                        inner: 'Selecione, entre as afirmações abaixo, as que estão corretas.'
                    }
                ],
                label: [
                    'a) A transformação é isotérmica.',
                    'b) A variação de energia interna é nula.',
                    'c) Como o volume do gás aumenta, o trabalho é realizado pelo gás e o gás recebe calor do ambiente.',
                    'd) A energia interna do gás é nula.',
                    'e) A energia interna do gás não varia.'
                ],
                resposta: [true, true, true, false, true]
            }
        ]
    },
    {
        id: 12,
        exercicios: [
            {
                id: 0,
                titulo: 'Exercício 01',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de duas forças. Determine, em notação vetorial, a força resultante sobre o corpo.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Figura1 }
                ],
                imagem: Dinamica0202.Image01,
                estiloVars: 'vetores',
                resposta: [140, 0]
            },
            {
                id: 1,
                titulo: 'Exercício 02',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de duas forças. Determine, em notação vetorial, a força resultante sobre o corpo.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Figura2 }
                ],
                imagem: Dinamica0202.Image02,
                estiloVars: 'vetores',
                resposta: [20, 0]
            },
            {
                id: 2,
                titulo: 'Exercício 03',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de duas forças. Determine, em notação vetorial, a força resultante sobre o corpo.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Figura3 }
                ],
                imagem: Dinamica0202.Image03,
                estiloVars: 'vetores',
                resposta: [0, -25]
            },
            {
                id: 3,
                titulo: 'Exercício 04',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de três forças.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Figura4 }
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
                        resposta: [60, 0]
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
                        resposta: [0, 0]
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
                titulo: 'Exercício 05',
                descricao: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo sujeito a ação de um conjunto de forças.'
                    },
                    { tag: 'imagem', inner: Dinamica0202.Figura5 }
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
                titulo: 'Exercício 01',
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
