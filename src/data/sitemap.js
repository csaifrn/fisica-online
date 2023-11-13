const dados = {
    fisica: {
        id: 1,
        titulo: 'Física',
        termologia: {
            id: 2,
            titulo: 'Termologia',
            calorimetria: {
                id: 3,
                titulo: 'Calorimetria',
                textos: [
                    {
                        id: 4,
                        titulo: '01',
                        pagina: { proxima: null, anterior: null },
                        listas: [
                            {
                                id: 5,
                                titulo: 'Lista 01',
                                autor: {
                                    nome: 'Geraldo Felipe',
                                    data: '2023'
                                },
                                pagina: { proxima: 6, anterior: null }
                            },
                            {
                                id: 6,
                                titulo: 'Lista 02',
                                autor: {
                                    nome: 'Geraldo Felipe',
                                    data: '2023'
                                },
                                pagina: { proxima: null, anterior: 5 }
                            }
                        ]
                    }
                ]
            }
        },
        mecanica: {
            id: 7,
            titulo: 'Mecânica',
            dinamica: {
                id: 8,
                titulo: 'Dinâmica',
                textos: [
                    {
                        id: 9,
                        titulo: '01',
                        pagina: { proxima: null, anterior: null },
                        listas: [
                            {
                                id: 10,
                                titulo: 'Lista 01',
                                autor: {
                                    nome: 'Geraldo Felipe',
                                    data: '2023'
                                },
                                pagina: { proxima: 11, anterior: null }
                            },
                            {
                                id: 11,
                                titulo: 'Lista 02',
                                autor: {
                                    nome: 'Geraldo Felipe',
                                    data: '2023'
                                },
                                pagina: { proxima: null, anterior: 10 }
                            }
                        ]
                    }
                ]
            }
        }
    }
};

export default dados;
