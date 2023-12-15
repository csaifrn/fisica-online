import { useState } from 'react';

const CardCorpoDisciplinaItem = ({ nome, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li>
            <a href={link}>{nome}</a>
        </li>
    );
};

export default CardCorpoDisciplinaItem;
