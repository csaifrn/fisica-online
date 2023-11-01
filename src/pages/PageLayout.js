import { useState } from 'react';
import { AppNavBar, AppCard } from '../components';
import { PageContext } from '../contexts';
import sitemap from '../data/sitemap';

const PageLayout = () => {
    const [page, setPage] = useState({});

    const getPage = (params = []) => {
        const pathIds = ['disciplina', 'topico', 'subtopico', 'texto', 'lista'];

        let currentNode = sitemap;
        const pageData = {};

        for (let i = 0; i < params.length; i++) {
            const param = params[i];
            if (i < params.length - 1) {
                switch (i) {
                    case 0:
                    case 1:
                    case 2:
                        pageData[pathIds[i]] = currentNode[param].titulo;
                        break;
                    case 3:
                        pageData[pathIds[i]] = currentNode.textos[param].titulo;
                        break;
                    case 4:
                        pageData[pathIds[i]] = currentNode.listas[param].titulo;
                        break;
                    default:
                        break;
                }
            }

            switch (i) {
                case 3:
                    currentNode = currentNode.textos[param];
                    break;
                case 4:
                    currentNode = currentNode.listas[param];
                    break;
                default:
                    currentNode = currentNode[param];
                    break;
            }
        }

        return { ...pageData, ...currentNode };
    };

    const myPage = {
        _page: page,

        get page() {
            return this._page;
        },

        set page(value) {
            const newPage = getPage(value);
            setPage(newPage);
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
