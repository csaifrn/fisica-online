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
                        'comentario verde',
                        'A quantidade de calor trocada por um corpo é aferida em calorias (cal).'
                    )
                ]
            },
            {
                id: 1,
                titulo: '2. Sinal algébrico da quantidade de calor',
                descricao: [
                    Element(
                        'texto',
                        'Quando um corpo recebe calor de uma fonte externa, essa quantidade de calor é medida com valor positivo.'
                    ),
                    Element(
                        'texto',
                        'E quando um corpo cede calor para o ambiente ou outro corpo, essa quantidade de calor é medida com valor negativo.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/02.png'
                    ),
                    Element(
                        'texto',
                        'A figura abaixo ilustra uma forma comum de representar quando um corpo recebe calor do ambiente e quando o corpo cede calor para o ambiente.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/03.png'
                    ),
                    Element(
                        'comentario azul',
                        'Ao analisar o comportamento térmico de um corpo, usamos o sinal positivo para calor recebido e sinal negativo para calor cedido.'
                    )
                ]
            },
            {
                id: 2,
                titulo: '3.  Poder Calorífico',
                descricao: [
                    Element(
                        'texto',
                        'O poder calorífico de um combustível nos diz a quantidade de calor liberada na queima de 1 kg desse combustível.'
                    ),
                    Element(
                        'texto',
                        'A unidade do poder calorífico é kcal/kg.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/04.png'
                    ),
                    Element(
                        'texto',
                        'Por exemplo, o poder calorífico da madeira queimando nesta fogueira é de 3000 kcal/kg.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/05.png'
                    ),
                    Element(
                        'texto',
                        'Isso quer dizer que cada 1 kg de lenha queimada libera 3000 kcal para o ambiente.'
                    ),
                    Element('linha'),
                    Element(
                        'texto',
                        'Abaixo, temos uma tabela com o poder calorífico de alguns combustíveis.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/06.png'
                    )
                ]
            },
            {
                id: 3,
                titulo: '4.  Potência Térmica',
                descricao: [
                    Element(
                        'texto',
                        'A potência térmica indica a rapidez com que o calor está sendo trocada entre dois sistemas.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/07.png'
                    ),
                    Element('linha'),
                    Element(
                        'texto',
                        'Na ilustração abaixo a fonte (1) tem potência térmica 80 cal/s. Isso quer dizer que esta fonte libera 80 cal a cada 1 s.'
                    ),
                    Element(
                        'texto',
                        'A fonte (2) tem potência térmica de 250 cal/s. E isso quer dizer que esta fonte libera 250 cal a cada 1 s.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/08.png'
                    ),
                    Element('linha'),
                    Element('titulo', 'Relação entre caloria e joule'),
                    Element(
                        'texto',
                        'Posteriormente veremos um experimento no qual iremos mostrar a relação entre caloria e joule. Mas já vamos adiantar que 1 cal equivale 4,18 j.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/09.png'
                    ),
                    Element(
                        'texto',
                        'Como 1 W = 1 J/s, concluímos que 1 cal/s = 4,18 W.'
                    )
                ]
            },
            {
                id: 4,
                titulo: '5. Rendimento',
                descricao: [
                    Element(
                        'texto',
                        'Quando um fonte térmica fornece calor a um corpo, nem todo calor é utilizado da forma como se deseja.'
                    ),
                    Element(
                        'texto',
                        'A figura abaixo mostra um fogão a lenha rudimentar. Neste exemplo, nem toda a energia liberada para cozinhar o alimento é aproveitada, pois uma grande parte da energia é perdida para o ambiente.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/10.png'
                    ),
                    Element(
                        'nota',
                        '• A quantidade de energia que foi aproveitada, de acordo com os objetivos, é chamada de energia útil ou calor útil.'
                    ),
                    Element(
                        'nota',
                        '• A quantidade de energia total liberada pela fonte térmica é chamada de energia total ou calor total.'
                    ),
                    Element(
                        'nota',
                        '• O rendimento de uma fonte térmica é a razão entre a energia útil e a energia total.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/11.png'
                    ),
                    Element(
                        'texto',
                        'O rendimento não tem unidades, pois é a razão entre duas medidas de quantidade de calor.'
                    ),
                    Element('linha'),
                    Element('titulo', 'Exemplo:'),
                    Element(
                        'texto',
                        'Considere que uma fonte libera 600 kcal mas apenas 300 kcal são aproveitadas. Calcule o rendimento desta fonte.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/12.png'
                    ),
                    Element(
                        'texto',
                        'Observe que achamos um rendimento de 0,5. Porém, este resultando pode ser expressão em porcentagem, ou seja, pode ser expresso como 50%.'
                    ),
                    Element('linha'),
                    Element(
                        'texto',
                        'Na ilustração abaixo, temos uma panela em um fogão à gás, com rendimento em torno de 60% e uma panela em fogão à lenha, rústico, com rendimento abaixo de 10%.'
                    ),
                    Element(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/13.png'
                    ),
                    Element(
                        'texto',
                        'Isso quer dizer que, no primeiro caso, 60% do calor liberado na queima do combustível é aproveitado e, no segundo caso, menos de 10 % do calor liberado é aproveitado.'
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
                id: 0,
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
                id: 1,
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
                id: 2,
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
                id: 3,
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
