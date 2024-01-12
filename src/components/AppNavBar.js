import { Navbar } from 'reactstrap';
import { usePageData, useNavigate, useQuery } from '../hooks';

const AppNavBar = () => {
    const dados = usePageData();
    const navigate = useNavigate();
    const query = useQuery(dados.id);

    const linkTopico = () => {
        const topico = query({ relative: 'parents' })[1];
        navigate(topico.id);
    };

    const linkSaibaMais = () => {};

    return (
        <Navbar expand="lg" container>
            <div className="d-flex">
                {dados.topico && (
                    <button className="outline-btn-hover" onClick={linkTopico}>
                        {dados.topico}
                    </button>
                )}
                <button className="outline-btn-hover" onClick={linkSaibaMais}>
                    Saiba Mais
                </button>
            </div>
        </Navbar>
    );
};

export default AppNavBar;
