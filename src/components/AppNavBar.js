import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Navbar} from 'reactstrap';
import { AtividadeContext } from '../contexts';

const AppNavBar = () => {
    const navigate = useNavigate();
    const {disciplina, topico} = useContext(AtividadeContext);

    const linkTopico = () => {
        navigate(`../${disciplina}/${topico}`);
    };

    const linkSaibaMais = () => {};

    return (
        <Navbar expand="lg" container>
            <div className="d-flex">                  
                <button className="outline-btn-hover" onClick={linkTopico}>{topico}</button>
                <button className="outline-btn-hover" onClick={linkSaibaMais}>Saiba Mais</button>
            </div>
        </Navbar>
    )
};

export default AppNavBar;