import CardMenuAtividade from './CardMenuAtividade';
import CardCorpoAtividade from './CardCorpoAtividade';
import AppFooter from '../AppFooter';

const CardAtividade = ({ navigate }) => (
    <div className="content">
        <CardMenuAtividade navigate={navigate} />
        <CardCorpoAtividade navigate={navigate} />
        <AppFooter />
    </div>
);

export default CardAtividade;
