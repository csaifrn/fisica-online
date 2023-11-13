const notas_de_aula = [];

const Descricao = (tipo, dado) => ({ tipo, dado });

notas_de_aula['calorimetria'] = [
    {
        id: 0,
        conteudos: [
            {
                id: 1,
                titulo: '1. Caloria',
                descricao: [
                    Descricao(
                        'texto',
                        'A caloria é uma unidade de energia utilizada para medir a quantidade de calor transferida de um corpo para outro.'
                    ),
                    Descricao(
                        'texto',
                        'A unidade de 1 caloria (1 cal) corresponde à quantidade de calor necessária para variar a temperatura de 1 g de água de 14,5 °C para 15,5 °C, a uma pressão atmosférica de 1 atm.'
                    ),
                    Descricao(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/01.png'
                    ),
                    Descricao(
                        'texto',
                        'É muito comum o uso da unidade kcal, onde 1 kcal = 1.000 cal.'
                    ),
                    Descricao(
                        'comentario',
                        'A quantidade de calor trocada por um corpo é aferida em calorias (cal).'
                    )
                ]
            }
        ]
    }
];

notas_de_aula['dinamica'] = [
    {
        id: 0,
        conteudos: [
            {
                id: 1,
                titulo: '1. Força Peso',
                descricao: [
                    Descricao(
                        'texto',
                        'A força peso é uma força gravitacional que atua sobre corpos próximos à superfície da Terra e aponta sempre para o centro da Terra.'
                    ),
                    Descricao(
                        'imagem',
                        'http://napalmadamao.ifrn.edu.br/fisica/termologia/dinamica/texto01/01.png'
                    )
                ]
            }
        ]
    }
];

export default notas_de_aula;
