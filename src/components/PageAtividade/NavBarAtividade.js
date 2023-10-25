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

    return (
        <AppNavBar>
            <button className="outline-btn-hover" onClick={linkTopico}>
                {topico}
            </button>
        </AppNavBar>
    );
};

export default NavBarAtividade;
