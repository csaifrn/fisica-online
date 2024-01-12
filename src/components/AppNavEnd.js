import { usePageData, useNavigate } from '../hooks';

const AppNavEnd = () => {
    const dados = usePageData();
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const anteriorPagina = () => {
        navigate(dados.pagina.anterior);
    };

    const proximaPagina = () => {
        navigate(dados.pagina.proxima);
    };

    return (
        dados.pagina && (
            <nav className="nav-fim-aula">
                {dados.pagina.anterior !== null && (
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
                {dados.pagina.proxima !== null && (
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
