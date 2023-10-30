import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppNavBar, AppCard } from '../components';
import { PageContext } from '../contexts';
import sitemap from '../data/sitemap';

const PageLayout = () => {
    const [page, setPage] = useState({});
    const navigate = useNavigate();

    const getPage = (params = []) => {
        const pathIds = ['disciplina', 'topico', 'subtopico', 'texto', 'lista'];
        const pageData = {};
        let currentNode = sitemap;

        params.forEach((param, index) => {
            if (index < params.length - 1) {
                if (index < 3) {
                    pageData[pathIds[index]] = currentNode[param].titulo;
                }
                if (index === 3) {
                    pageData[pathIds[index]] = currentNode.textos[param].titulo;
                }
                if (index === 4) {
                    pageData[pathIds[index]] = currentNode.listas[param].titulo;
                }
            }

            switch (index) {
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
        });

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
            let path = '..';
            for (let i = 0; i < value.length; i++) {
                path += `/${value[i]}`;
            }
            navigate(path);
        },

        next: () => {
            setPage({
                ...this._page,
                id: this._page.pagina.proxima
            });
        },

        previous: () => {
            setPage({
                ...this._page,
                id: this._page.pagina.anterior
            });
        }
    };

    myPage.next.bind(myPage);

    return (
        <PageContext.Provider value={myPage}>
            <AppNavBar />
            <AppCard />
        </PageContext.Provider>
    );
};

export default PageLayout;
