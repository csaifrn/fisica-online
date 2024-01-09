import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCorpoAtividadeExercicio from './CardCorpoAtividadeExercicio';
import CardCorpoAtividadeRodape from './CardCorpoAtividadeRodape';
import AppNavEnd from '../AppNavEnd';
import { PageContext } from '../../contexts';
import atividades from '../../data/atividades';

const CardCorpoAtividade = () => {
    const dados = useContext(PageContext);
    const navigate = useNavigate();

    const atividade = atividades.find(
        atividade => atividade.id === dados.page.id
    );

    const renderExercicio = exercicio => (
        <CardCorpoAtividadeExercicio key={exercicio.id} content={exercicio} />
    );

    const linkNotaDeAula = () => {
        navigate(dados.getLink(dados.page.parentPageId));
    };

    return (
        <div className="aula-body">
            <button className="btnImprimir" onClick={linkNotaDeAula}>
                Nota de Aula
            </button>
            <p className="esp10">
                <b>
                    {dados.page.topico} - {dados.page.texto} -{' '}
                    {dados.page.titulo}
                </b>
            </p>
            {atividade?.exercicios.map(renderExercicio)}
            <br />
            <AppNavEnd />
            <hr />
            <CardCorpoAtividadeRodape />
        </div>
    );
};

export default CardCorpoAtividade;
