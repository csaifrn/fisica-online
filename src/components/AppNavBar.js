import {Navbar} from 'reactstrap';

const AppNavBar = ({ topico }) => {
    const linkTermologia = () => {};

    const linkSaibaMais = () => {};

    return (
        <Navbar expand="lg" container>
            <div className="d-flex">                  
                <button className="outline-btn-hover" onClick={linkTermologia}>{topico}</button>
                <button className="outline-btn-hover" onClick={linkSaibaMais}>Saiba Mais</button>
            </div>
        </Navbar>
    )
};

export default AppNavBar;