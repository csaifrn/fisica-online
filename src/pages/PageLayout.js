import { useState } from 'react';
import { AppNavBar, AppCard } from '../components';
import { PageContext } from '../contexts';
import sitemap from '../data/sitemap';

const PageLayout = () => {
    const [page, setPage] = useState({});

    const myPage = {
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

            for (let i = 0; i < params.length; i++) {
                const param = params[i];
                currentNode = sitemap.find(
                    node =>
                        node.segmento === param &&
                        node.parentPageId === currentNode.id
                );
                if (i < params.length - 1) {
                    pageData[pathIds[i]] = currentNode.titulo;
                }
            }

            setPage({ ...pageData, ...currentNode });
        },
        get sitemap() {
            return sitemap;
        },

        link: id => {
            let currentNode = sitemap.find(node => node.id === id);
            let link = '/';
            while (currentNode.parentPageId !== undefined) {
                link = '/' + currentNode.segmento + link;
                currentNode = sitemap.find(
                    node => node.id === currentNode.parentPageId
                );
            }
            return '/' + currentNode.segmento + link;
        }
    };

    return (
        <PageContext.Provider value={myPage}>
            <AppNavBar />
            <AppCard />
        </PageContext.Provider>
    );
};

export default PageLayout;
