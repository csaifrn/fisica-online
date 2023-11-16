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
        titulo: 'Aula 01',
        segmento: 'texto01',
        pagina: { proxima: null, anterior: null },
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
        titulo: 'Texto 02',
        segmento: 'texto02',
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
    }
];

export default dados;
