import { useContext } from 'react';
import { PageContext } from '../../contexts';

const CardCorpoDisciplinaItem = ({ id, nome, link }) => {
    const dados = useContext(PageContext);
    //const [isOpen, setIsOpen] = useState(false);

    const subtopicos = dados.children(id);

    const subtopicosLinks = subtopicos.map(subtopico => {
        return {
            id: subtopico.id,
            link: dados.getLink(dados.children(subtopico.id)[0].id),
            nome: subtopico.titulo
        };
    });
    /*
    const dropStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'absolute',
        right: '0',
        zIndex: '1'
    };

    const itemStyle = {
        margin: '0',
        minWidth: '400px'
    };
    */

    return (
        <li
        /*onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={{ position: 'relative' }}*/
        >
            <a href={link}>{nome}</a>
            <ul>
                {subtopicosLinks.map(subtopico => (
                    <li key={subtopico.id}>
                        <a href={subtopico.link}>{subtopico.nome}</a>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default CardCorpoDisciplinaItem;
