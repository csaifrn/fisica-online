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
                    pagina: { proxima: null, anterior: null },
                    listas: [
                        {
                            id: 4,
                            autor: {
                                nome: 'Geraldo',
                                data: '2023'
                            },
                            pagina: { proxima: 5, anterior: null }
                        },
                        {
                            id: 5,
                            autor: {
                                nome: 'Geraldo',
                                data: '2023'
                            },
                            pagina: { proxima: null, anterior: 4 }
                        }
                    ]
                }
            ]
        }
    }
};
