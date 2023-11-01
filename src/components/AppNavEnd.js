import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContext } from '../contexts';

const AppNavEnd = () => {
    const dados = useContext(PageContext);
    const { disciplina, topico, subtopico, idTexto, idAtividade } = useParams();
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const anteriorPagina = () => {
        if (idAtividade !== undefined) {
            navigate(
                `/${disciplina}/${topico}/${subtopico}/${idTexto}/${
                    parseInt(idAtividade) - 1
                }`
            );
        } else {
            navigate(
                `/${disciplina}/${topico}/${subtopico}/${parseInt(idTexto) - 1}`
            );
        }
    };

    const proximaPagina = () => {
        if (idAtividade !== undefined) {
            navigate(
                `/${disciplina}/${topico}/${subtopico}/${idTexto}/${
                    parseInt(idAtividade) + 1
                }`
            );
        } else {
            navigate(
                `/${disciplina}/${topico}/${subtopico}/${parseInt(idTexto) + 1}`
            );
        }
    };

    return (
        dados.page.pagina && (
            <nav className="nav-fim-aula">
                {dados.page.pagina.anterior !== null && (
                    <span
                        tabIndex={0}
                        className="seta seta-anterior"
                        onClick={anteriorPagina}
                    ></span>
                )}
                <span
                    tabIndex={0}
                    className="seta seta-top"
                    onClick={scrollToTop}
                ></span>
                {dados.page.pagina.proxima !== null && (
                    <span
                        tabIndex={0}
                        className="seta seta-prox"
                        onClick={proximaPagina}
                    ></span>
                )}
            </nav>
        )
    );
};

export default AppNavEnd;
