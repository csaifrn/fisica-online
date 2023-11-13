const disciplinas = [];
const fisica = [];
const termologia = [];
const dinamica = [];
const calorimetria = [
    {
        id: 0,
        titulo: 'Lista 01',
        disciplina: 'Física',
        topico: 'Termologia',
        subtopico: 'Calorimetria',
        descricao: 'Termologia - Calorimetria 01 - Lista 01',
        nota_de_aula:
            'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/',
        autor: {
            nome: 'Geraldo',
            data: '2023'
        },
        atividade: { proxima: 1, anterior: null }
    },
    {
        id: 1,
        titulo: 'Lista 02',
        disciplina: 'Física',
        topico: 'Termologia',
        subtopico: 'Calorimetria',
        descricao: 'Termologia - Calorimetria 01 - Lista 02',
        nota_de_aula:
            'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/',
        autor: {
            nome: 'Geraldo',
            data: '2023'
        },
        atividade: { proxima: null, anterior: 0 }
    }
];

// fixme
// incluir conteúdo de dinamica que esta em original/dinamica-02/index.html

termologia['calorimetria'] = calorimetria;
fisica['termologia'] = termologia;
fisica['dinamica'] = dinamica;
disciplinas['fisica'] = fisica;

export default disciplinas;
