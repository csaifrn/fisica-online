import { UncontrolledAlert } from 'reactstrap';
import AppElement from '../AppElement';

const CardCorpoSubtopicoConteudoItem = ({ content }) => (
    <div>
        <h1>
            {content.id}. {content.titulo}
        </h1>
        {content.conteudo.map((element, index) => (
            <AppElement key={index} {...element} />
        ))}
    </div>
);

export default CardCorpoSubtopicoConteudoItem;
