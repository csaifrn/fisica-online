import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavBar from '../AppNavBar';
import { AtividadeContext } from '../../contexts';

const NavBarAtividade = () => {
    const navigate = useNavigate();
    const { topico } = useContext(AtividadeContext);

    const linkTopico = () => {
        navigate('../..', { relative: 'path' });
    };

    const linkSaibaMais = () => {};

    return (
        <div className="d-flex">
            <button className="outline-btn-hover" onClick={linkTopico}>
                {topico}
            </button>
            <button className="outline-btn-hover" onClick={linkSaibaMais}>
                Saiba Mais
            </button>
        </div>
    );
};

export default NavBarAtividade;
