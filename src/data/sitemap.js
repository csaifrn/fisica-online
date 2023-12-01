const dados = [
    { id: 1, titulo: 'Física', segmento: 'fisica' },
    { id: 2, titulo: 'Termologia', segmento: 'termologia', parentPageId: 1 },
    {
        id: 3,
        titulo: 'Calorimetria',
        segmento: 'calorimetria',
        parentPageId: 2
    },
    {
        id: 4,
        titulo: 'Calorimetria I',
        segmento: 'texto01',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 13, anterior: null },
        parentPageId: 3
    },
    {
        id: 5,
        titulo: 'Lista 01',
        segmento: 'lista01',
        autor: {
            nome: 'Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 6, anterior: null },
        parentPageId: 4
    },
    {
        id: 6,
        titulo: 'Lista 02',
        segmento: 'lista02',
        autor: {
            nome: 'Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: null, anterior: 5 },
        parentPageId: 4
    },
    { id: 7, titulo: 'Mecânica', segmento: 'mecanica', parentPageId: 1 },
    { id: 8, titulo: 'Dinâmica', segmento: 'dinamica', parentPageId: 7 },
    {
        id: 10,
        titulo: 'Dinâmica II',
        segmento: 'texto02',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: null, anterior: null },
        parentPageId: 8
    },
    {
        id: 11,
        titulo: 'Lista 01',
        segmento: 'lista01',
        autor: {
            nome: 'Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 12, anterior: null },
        parentPageId: 10
    },
    {
        id: 12,
        titulo: 'Lista 02',
        segmento: 'lista02',
        autor: {
            nome: 'Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: null, anterior: 11 },
        parentPageId: 10
    },
    {
        id: 13,
        titulo: 'Calorimetria II',
        segmento: 'texto02',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 14, anterior: 4 },
        parentPageId: 3
    },
    {
        id: 14,
        titulo: 'Calorimetria III',
        segmento: 'texto03',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 15, anterior: 13 },
        parentPageId: 3
    },
    {
        id: 15,
        titulo: 'Calorimetria IV',
        segmento: 'texto04',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: null, anterior: 14 },
        parentPageId: 3
    },
    {
        id: 16,
        titulo: 'Termodinâmica',
        segmento: 'termodinamica',
        parentPageId: 2
    },
    {
        id: 17,
        titulo: 'Gases (01)',
        segmento: 'texto01',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 18, anterior: null },
        parentPageId: 16
    },
    {
        id: 18,
        titulo: 'Gases (02)',
        segmento: 'texto02',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 19, anterior: 17 },
        parentPageId: 16
    },
    {
        id: 19,
        titulo: 'Trabalho realizado por um gás',
        segmento: 'texto03',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 20, anterior: 18 },
        parentPageId: 16
    },
    {
        id: 20,
        titulo: 'Primeira Lei da Termodinâmica',
        segmento: 'texto04',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: null, anterior: 19 },
        parentPageId: 16
    }
];

export default dados;
