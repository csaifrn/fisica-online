import { useLocation } from 'react-router-dom';
import sitemap from '../data/sitemap';

const usePageData = () => {
    const { pathname } = useLocation();

    const paramIds = ['disciplina', 'topico', 'subtopico', 'texto', 'lista'];

    let currentNode = {};
    const urlSegments = pathname.split('/').filter(el => el !== '');
    const titles = {};

    function findNode(segment, id) {
        return sitemap.find(
            node => node.segmento === segment && node.parentPageId === id
        );
    }

    while (true) {
        const segmento = urlSegments.shift();
        currentNode = findNode(segmento, currentNode.id);
        if (urlSegments.length < 1) break;
        titles[paramIds.shift()] = currentNode.titulo;
    }

    return { ...titles, ...currentNode };
};

export default usePageData;
