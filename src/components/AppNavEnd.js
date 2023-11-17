import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../contexts';

const AppNavEnd = () => {
    const dados = useContext(PageContext);
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const anteriorPagina = () => {
        navigate(dados.getLink(dados.page.pagina.anterior));
    };

    const proximaPagina = () => {
        navigate(dados.getLink(dados.page.pagina.proxima));
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
