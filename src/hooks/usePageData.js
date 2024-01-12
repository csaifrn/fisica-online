import { useLocation } from 'react-router-dom';
import sitemap from '../data/sitemap';

const usePageData = () => {
    const { pathname } = useLocation();

    const paramIds = ['disciplina', 'topico', 'subtopico', 'texto', 'lista'];

    let currentNode = {};
    const urlSegments = pathname.split('/').filter(el => el !== '');
    const titles = {};

    while (urlSegments.length > 0) {
        const segment = urlSegments.shift();
        currentNode = sitemap.find(
            node =>
                node.segmento === segment &&
                node.parentPageId === currentNode.id
        );
        titles[paramIds.shift()] = currentNode.titulo;
    }

    return { ...titles, ...currentNode };
};

export default usePageData;
