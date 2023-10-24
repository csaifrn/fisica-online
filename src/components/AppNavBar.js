import { useNavigate } from 'react-router-dom';
import { Navbar } from 'reactstrap';

const AppNavBar = ({ children }) => {
    const navigate = useNavigate();

    const linkSaibaMais = () => {};

    return (
        <Navbar expand="lg" container>
            <div className="d-flex">
                {children}
                <button className="outline-btn-hover" onClick={linkSaibaMais}>
                    Saiba Mais
                </button>
            </div>
        </Navbar>
    );
};

export default AppNavBar;
