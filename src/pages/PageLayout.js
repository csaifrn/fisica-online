import { useEffect, useState } from 'react';
import { AppNavBar, AppCard } from '../components';
import { PageContext } from '../contexts';
import sitemap from '../data/sitemap';
import { useLocation } from 'react-router-dom';

const PageLayout = () => {
    const [page, setPage] = useState({});

    const pageContext = {
        get page() {
            return page;
        },

        set page(params) {
            const pathIds = [
                'disciplina',
                'topico',
                'subtopico',
                'texto',
                'lista'
            ];

            let currentNode = {};
            let pageData = {};

            params.forEach((param, i) => {
                const isSegmento = node =>
                    node.segmento === param &&
                    node.parentPageId === currentNode.id;
                currentNode = sitemap.find(isSegmento);
                if (i < params.length - 1) {
                    pageData[pathIds[i]] = currentNode.titulo;
                }
            });

            setPage({ ...pageData, ...currentNode });
        },

        get sitemap() {
            return sitemap;
        },

        getLink: id => {
            const currentNode = sitemap.find(node => node.id === id);
            const linkSegments = [currentNode.segmento];

            let parentPageId = currentNode.parentPageId;
            while (parentPageId !== undefined) {
                const parentNode = sitemap.find(
                    node => node.id === parentPageId
                );
                linkSegments.unshift(parentNode.segmento);
                parentPageId = parentNode.parentPageId;
            }

            return '/' + linkSegments.join('/');
        },

        children: (id = page.id) =>
            sitemap.filter(node => node.parentPageId === id)
    };

    const { pathname } = useLocation();

    useEffect(() => {
        pageContext.page = pathname
            .split('/')
            .filter(segmento => segmento !== '');
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <PageContext.Provider value={pageContext}>
            <AppNavBar />
            <AppCard />
        </PageContext.Provider>
    );
};

export default PageLayout;
