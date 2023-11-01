import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContext } from '../contexts';
import { CardCorpoAtividade } from '../components/PageAtividade';

function PageAtividade() {
    const { disciplina, topico, subtopico, idTexto, idAtividade } = useParams();
    const dados = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        dados.page = [
            disciplina,
            topico,
            subtopico,
            parseInt(idTexto),
            parseInt(idAtividade)
        ];
    }, [disciplina, topico, subtopico, idTexto, idAtividade]);

    const anteriorAtividade = () => {
        navigate(
            `/${disciplina}/${topico}/${subtopico}/${idTexto}/${
                parseInt(idAtividade) - 1
            }`
        );
    };

    const proximaAtividade = () => {
        navigate(
            `/${disciplina}/${topico}/${subtopico}/${idTexto}/${
                parseInt(idAtividade) + 1
            }`
        );
    };

    return (
        <CardCorpoAtividade
            onHandleClick={{ anteriorAtividade, proximaAtividade }}
        />
    );
}

export default PageAtividade;
