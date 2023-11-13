const atividades = [];

atividades['dinamica'] = [
    {
        id: 0
    },
    {
        id: 1
    },
    {
        id: 0,
        exercicios: [
            {
                id: 2,
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
