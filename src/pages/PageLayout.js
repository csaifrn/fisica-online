import { useState } from 'react';
import { AppNavBar, AppCard } from '../components';
import { PageContext } from '../contexts';
import sitemap from '../data/sitemap';

const PageLayout = () => {
    const [page, setPage] = useState({});

    const pageContext = {
        _page: page,

        get page() {
            return this._page;
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
        }
    };

    return (
        <PageContext.Provider value={pageContext}>
            <AppNavBar />
            <AppCard />
        </PageContext.Provider>
    );
};

export default PageLayout;
