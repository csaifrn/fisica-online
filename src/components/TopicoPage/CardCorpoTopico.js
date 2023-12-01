import { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../../contexts';

const CardCorpoTopico = () => {
    const dados = useContext(PageContext);

    let subtopicos = dados.children();
    subtopicos = subtopicos.map(subtopico => {
        return dados.children(subtopico.id);
    });

    function d2(n) {
        return n < 10 ? '0' + n : n;
    }

    const notas_de_aula = subtopicos.map(subtopico => {
        return subtopico.map((texto, id) => {
            return {
                id: texto.id,
                nome: `${d2(id + 1)}. ${texto.titulo}`,
                link: dados.getLink(texto.id)
            };
        });
    });

    const [slides] = useState([
        {
            id: 0,
            nome: 'Slide 02',
            link: 'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/slide02'
        },
        {
            id: 1,
            nome: 'Slide 03',
            link: 'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/slide03'
        },
        {
            id: 2,
            nome: 'Slide 04',
            link: 'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/slide04'
        },
        {
            id: 3,
            nome: 'Slide 05',
            link: 'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/slide05'
        }
    ]);

    return (
        <div className="aula-body">
            <p>
                <b>
                    {dados.page.titulo} - <small>IFRN/CNAT (2023)</small>
                </b>
            </p>
            <hr />
            <p className="tamanho3">Notas de Aula</p>
            <ul className="list">
                {notas_de_aula.map((subtopico, id) => (
                    <Fragment key={id}>
                        {subtopico.map(nota => (
                            <li key={nota.id}>
                                <Link to={nota.link}>{nota.nome}</Link>
                            </li>
                        ))}
                        {id !== notas_de_aula.length - 1 && <hr />}
                    </Fragment>
                ))}
            </ul>
            <hr />
            <p className="tamanho3">Slides</p>
            <ul className="list">
                {slides.map(slide => (
                    <li key={slide.id}>
                        <Link to={slide.link}>{slide.nome}</Link>
                    </li>
                ))}
            </ul>
            <div style={{ minHeight: '200px' }}></div>
        </div>
    );
};

export default CardCorpoTopico;
