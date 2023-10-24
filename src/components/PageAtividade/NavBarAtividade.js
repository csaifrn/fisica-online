import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavBar from '../AppNavBar';
import { AtividadeContext } from '../../contexts';

const NavBarAtividade = () => {
    const navigate = useNavigate();
    const { disciplina, topico } = useContext(AtividadeContext);

    const linkTopico = () => {
        navigate(`../${disciplina}/${topico}`);
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
