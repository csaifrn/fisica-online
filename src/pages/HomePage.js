import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

const HomePage = () => {
    return (
        <>
            <Navbar expand="lg" container>
                <div className="d-flex">
                    <button className="outline-btn-hover">Saiba Mais</button>
                </div>
            </Navbar>
            <div className="aula-menu"></div>
            <div className="aula-body">
                <ul className="list">
                    <li>
                        <Link to="/fisica/termologia/calorimetria/texto01">
                            Calorimetria 01
                        </Link>
                    </li>
                    <li>
                        <Link to="/fisica/termologia/calorimetria/texto01/lista02">
                            Lista 02
                        </Link>
                    </li>
                    <li>
                        <Link to="/fisica/mecanica/dinamica/texto02">
                            Dinâmica 02
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HomePage;
