import CardCorpoAtividadeExercicio from './CardCorpoAtividadeExercicio';
import CardCorpoAtividadeRodape from './CardCorpoAtividadeRodape';
import AppNavEnd from '../AppNavEnd';
import atividades from '../../data/atividades';
import { usePageData, useNavigate, useDocumentTitle } from '../../hooks';

const CardCorpoAtividade = () => {
    const dados = usePageData();
    const navigate = useNavigate();
    useDocumentTitle(dados.texto + ' | ' + dados.titulo);

    const atividade = atividades.find(atividade => atividade.id === dados.id);

    const renderExercicio = exercicio => (
        <CardCorpoAtividadeExercicio key={exercicio.id} content={exercicio} />
    );

    const linkNotaDeAula = () => {
        navigate(dados.parentPageId);
    };

    return (
        <div className="aula-body">
            <button className="btnImprimir" onClick={linkNotaDeAula}>
                Nota de Aula
            </button>
            <p className="esp10">
                <b>
                    {dados.topico} - {dados.texto} - {dados.titulo}
                </b>
            </p>
            {atividade.exercicios.map(renderExercicio)}
            <br />
            <AppNavEnd />
            <hr />
            <CardCorpoAtividadeRodape />
        </div>
    );
};

export default CardCorpoAtividade;
