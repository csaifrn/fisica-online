import { useQuery } from '../../hooks';

const CardCorpoDisciplinaItem = ({ id, nome, link }) => {
    const query = useQuery();
    //const [isOpen, setIsOpen] = useState(false);

    const subtopicos = query({ relative: 'children', id });

    const subtopicosLinks = subtopicos.map(subtopico => {
        return {
            id: subtopico.id,
            link: query({
                link: query({ relative: 'children', id: subtopico.id })[0].id
            }),
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
