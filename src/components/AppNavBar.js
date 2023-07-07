import {Navbar} from 'reactstrap';

const AppNavBar = () => {
    const linkTermologia = () => {};

    const linkSaibaMais = () => {};

    return (
        <Navbar expand="lg" container>
            <div className="d-flex">                  
                <button className="outline-btn-hover" onClick={linkTermologia}>Termologia</button>
                <button className="outline-btn-hover" onClick={linkSaibaMais}>Saiba Mais</button>
            </div>
        </Navbar>
    )
};

export default AppNavBar;