import {
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image08,
    Image09,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18
} from '../assets/dinamica02';

const Element = (tipo, dado = null) => ({ tipo, dado });

const notas_de_aula = [
    {
        id: 4,
        titulo: 'Calorimetria 01',
        conteudos: [
            {
                id: 0,
                titulo: '1. Caloria',
                descricao: [
                    Element(
                        'texto',
                        'A caloria é uma unidade de energia utilizada para medir a quantidade de calor transferida de um corpo para outro.'
                    ),
                    Element(
                        'texto',
                        'A unidade de 1 caloria (1 cal) corresponde à quantidade de calor necessária para variar a temperatura de 1 g de água de 14,5 °C para 15,5 °C, a uma pressão atmosférica de 1 atm.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/01.png'
                    ),
                    Element(
                        'texto',
                        'É muito comum o uso da unidade kcal, onde 1 kcal = 1.000 cal.'
                    ),
                    Element(
                        'comentario',
                        'A quantidade de calor trocada por um corpo é aferida em calorias (cal).'
                    )
                ]
            }
        ]
    },
    {
        id: 10,
        titulo: 'Dinâmica 02',
        conteudos: [
            {
                id: 2,
                titulo: '1. Força Peso',
                descricao: [
                    Element(
                        'texto',
                        'A força peso é uma força gravitacional que atua sobre corpos próximos à superfície da Terra e aponta sempre para o centro da Terra.'
                    ),
                    Element('imagem', Image01),
                    Element(
                        'texto',
                        'Esta força está relacionada com o campo gravitacional (g) da Terra, que é definido como a a força gravitacional aplicada sobre cada 1 kg de massa.'
                    ),
                    Element('imagem', Image02),
                    Element(
                        'texto',
                        'Consequentemente, podemos calcular o peso de um corpo como sendo o produto entre a massa de do corpo e o campo gravitacional local.'
                    ),
                    Element('imagem', Image03),
                    Element(
                        'texto',
                        'O valor de "g" varia com altitude e até mesmo com as características geológicas de uma localidade. Como simplificação didática, vamos adotar que este valor é de 10 N/kg (valor aproximado).'
                    ),
                    Element('imagem', Image04),
                    Element('linha'),
                    Element('titulo', 'Peso de um corpo na Terra e na Lua'),
                    Element(
                        'texto',
                        'Vamos ilustrar duas situações, calculando o peso de um astronauta de massa 80 kg na Terra, onde g = 10 N/kg e na Lua, onde g = 1,6 N/kg.'
                    ),
                    Element('imagem', Image05),
                    Element('linha'),
                    Element('titulo', 'Exemplo'),
                    Element(
                        'texto',
                        'Uma pessoa segura um corpo de massa 50 kg, conforme ilustrado. Sabendo que o corpo está em repouso, calcule a força que a pessoa está fazendo.'
                    ),
                    Element(
                        'nota',
                        '• Importante: vamos utilizar a notação vetorial na resolução de todos os nossos exemplos e exercícios.'
                    ),
                    Element('imagem', Image06),
                    Element(
                        'texto',
                        'Sabemos que a força resultante é a soma de todas as forças que atuam sobre o corpo. Vamos escrever esta expressão em notação vetorial e calcular a força que a pessoa aplica no corpo.'
                    ),
                    Element('imagem', Image07)
                ]
            },
            {
                id: 3,
                titulo: '2. Força Normal',
                descricao: [
                    Element(
                        'texto',
                        'A figura mostra um corpo em repouso apoiado sobre uma mesma.'
                    ),
                    Element('imagem', Image08),
                    Element(
                        'texto',
                        'Neste caso, a força resultante sobre o corpo é nula e duas forças atuam sobre o corpo: a força peso, com direção vertical e sentido para baixo e a força aplicada pela mesa sobre o corpo, chamada de <b>força normal</b> (pois é sempre perpendicular ao plano da superfície de contato).'
                    ),
                    Element('imagem', Image09),
                    Element('linha'),
                    Element('titulo', 'Exemplo:'),
                    Element(
                        'texto',
                        'Um corpo de massa 5 kg está em repouso sobre a superfície horizontal de uma mesa. Uma pessoa aplica uma força de 30 N sobre o corpo.'
                    ),
                    Element('imagem', Image10),
                    Element(
                        'texto',
                        'Calcule a força normal aplicada pela mesa sobre o corpo.'
                    ),
                    Element(
                        'texto',
                        'O primeiro passo é desenhar o <b>diagrama de forças</b>, que consiste em desenhar o corpo e as forças que atuam sobre ele.'
                    ),
                    Element('imagem', Image11),
                    Element(
                        'texto',
                        'Em seguida, a partir do sistema de coordenadas adotado, escrevemos a expressão vetorial para o cálculo da força resultante, encontrando assim a força normal.'
                    ),
                    Element('imagem', Image12),
                    Element(
                        'texto',
                        'A força normal tem a direção e sentido do eixo "y" e módulo de 80 N.'
                    )
                ]
            },
            {
                id: 4,
                titulo: '3. Força de Tração',
                descricao: [
                    Element(
                        'texto',
                        'A força de tração é aplicada sobre um corpo por meio de um cabo, uma corda ou outro elemento que esteja sendo tracionado (puxado entre suas extremidades, sendo "esticado").'
                    ),
                    Element(
                        'texto',
                        'No exemplo abaixo, o corpo é sustentado por dois fios.'
                    ),
                    Element('imagem', Image13),
                    Element(
                        'texto',
                        'Ao fazer o digrama de forças sobre o corpo desenhando as forças de atração (aplicadas por cada fio) na mesma direção dos fios.'
                    ),
                    Element('imagem', Image14),
                    Element(
                        'texto',
                        'Para calcular a força resultante podemos primeiro somar as forças de tração "T1" e "T2" e em seguida somar este resultado com a força peso.'
                    ),
                    Element('imagem', Image15),
                    Element(
                        'texto',
                        'Supondo que o corpo esteja em equilíbrio, a soma destas três forças é 0 N.'
                    )
                ]
            },
            {
                id: 5,
                titulo: '4. Força de Atrito',
                descricao: [
                    Element(
                        'texto',
                        'A força de atrito é uma força de interação entre duas superfícies em contato, devido à irregularidades existentes entre estas superfícies.'
                    ),
                    Element('imagem', Image16),
                    Element(
                        'texto',
                        'A força de atrito entre duas superfícies em contato pode ocorrer de duas forças, apresentadas a seguir.'
                    ),
                    Element(
                        'nota',
                        'a) Força de atrito cinético: quando ocorre <b>movimento relativo</b> entre as duas superfícies. Esta força tem sentido contrário ao movimento relativo entre as superfícies.'
                    ),
                    Element('imagem', Image17),
                    Element(
                        'nota',
                        'b) Força de atrito estático: quando ocorre apenas uma <b>tendência de movimento relativo</b> entre as duas superfícies. Esta força tem sentido contrário a esta tendência de movimento relativo.'
                    ),
                    Element('imagem', Image18),
                    Element(
                        'texto',
                        'Observe que, se o corpo está em repouso ou em MRU, a força resultante é nula e o módulo da força de atrito será igual ao módulo da força'
                    )
                ]
            }
        ]
    }
];

export default notas_de_aula;
