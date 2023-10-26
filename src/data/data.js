export default {
    fisica: {
        id: 1,
        titulo: 'Física',
        termologia: {
            id: 2,
            titulo: 'Termologia',
            calorimetria: [
                {
                    id: 3,
                    nome: 'Calorimetria',
                    notas_de_aula: { proxima: null, anterior: null },
                    listas: [
                        {
                            id: 4,
                            autor: {
                                nome: 'Geraldo',
                                data: '2023'
                            },
                            atividade: { proxima: null, anterior: null }
                        },
                        {
                            id: 5,
                            autor: {
                                nome: 'Geraldo',
                                data: '2023'
                            },
                            atividade: { proxima: null, anterior: null }
                        }
                    ]
                }
            ]
        }
    }
};
