import CardMenuAtividade from './CardMenuAtividade';
import CardCorpoAtividade from './CardCorpoAtividade';
import Footer from '../Footer';

const CardAtividade = ({ navigate }) => (
    <div className="content">
        <CardMenuAtividade navigate={navigate} />
        <CardCorpoAtividade navigate={navigate} />
        <Footer />
    </div>
);

export default CardAtividade;
