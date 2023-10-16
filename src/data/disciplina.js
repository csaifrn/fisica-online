const disciplinas = [];
const fisica = [];
const termologia = [];
const calorimetria = [
	{
		id: 1,
		titulo: "Lista 01",
		disciplina: "Física",
		topico: "termologia",
		subtopico: "calorimetria",
		descricao: "Termologia - Calorimetria 01 - Lista 01",
		nota_de_aula:
			"http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/",
		autor: {
			nome: "Geraldo",
			data: "2023",
		},
		atividade: { proxima: 2, anterior: null },
	},
	{
		id: 2,
		titulo: "Lista 02",
		disciplina: "Física",
		topico: "termologia",
		subtopico: "calorimetria",
		descricao: "Termologia - Calorimetria 01 - Lista 02",
		nota_de_aula:
			"http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/texto01/",
		autor: {
			nome: "Geraldo",
			data: "2023",
		},
		atividade: { proxima: null, anterior: 1 },
	},
];

termologia["calorimetria"] = calorimetria;
fisica["termologia"] = termologia;
disciplinas["fisica"] = fisica;

export default disciplinas;
