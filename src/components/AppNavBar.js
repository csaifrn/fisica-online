import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import { PageContext } from '../contexts/';

const AppNavBar = () => {
    const dados = useContext(PageContext);
    const { disciplina, topico } = useParams();
    const navigate = useNavigate();

    const linkTopico = () => {};

    const linkSaibaMais = () => {};

    return (
        <Navbar expand="lg" container>
            <div className="d-flex">
                {dados.page.topico && (
                    <button className="outline-btn-hover" onClick={linkTopico}>
                        {dados.page.topico}
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
