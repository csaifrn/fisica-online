import { Link } from 'react-router-dom';
import { useQuery } from '../../hooks';

const CardCorpoTextoAtividades = ({ itens }) => {
    const query = useQuery();

    return (
        <>
            <h1 className="topico">Atividades</h1>
            <div className="paragrafo">
                <ul className="list">
                    {itens.map(lista => (
                        <li key={lista.id}>
                            <Link to={query({ link: lista.id })}>
                                {lista.titulo}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CardCorpoTextoAtividades;
