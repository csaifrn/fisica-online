import CardMenuAtividade from "./CardMenuAtividade";
import CardCorpoAtividade from "./CardCorpoAtividade";
import Footer from "./Footer";

const CardAtividade = ({atividade, navigate}) => (
        <div className="content">
            <CardMenuAtividade disciplina={atividade.disciplina} navigate={navigate} />
            <CardCorpoAtividade content={{...atividade}} navigate={navigate} />
            <Footer />
        </div>
    );

export default CardAtividade;