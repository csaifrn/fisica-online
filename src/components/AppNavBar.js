import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import { PageContext } from '../contexts/';

const AppNavBar = () => {
    const dados = useContext(PageContext);
    const navigate = useNavigate();

    const linkTopico = () => {
        let id = dados.page.parentPageId;
        let node = {};
        while (node.titulo !== dados.page.topico) {
            node = dados.sitemap.find(node => node.id === id);
            id = node.parentPageId;
        }
        navigate(dados.link(node.id));
    };

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
