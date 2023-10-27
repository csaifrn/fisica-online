import { useState } from 'react';
import { AppNavBar, AppCard } from '../components';
import { PageContext } from '../contexts';
import sitemap from '../data/sitemap';

const PageLayout = () => {
    const [page, setPage] = useState({});

    const getPage = (params = []) => {
        const ids = ['disciplina', 'topico', 'subtopico'];
        const dados = {};
        let current = sitemap;
        params.forEach((param, index) => {
            if (index < params.length - 1)
                dados[ids[index]] = current[param].titulo;
            current = current[param];
        });
        return { ...dados, ...current };
    };

    const myPage = {
        _page: page,
        get page() {
            return this._page;
        },
        set page(value) {
            const newPage = getPage(value);
            setPage(newPage);
        },
        next: () => {
            this.page.id = this.page.proxima;
        },
        previous: () => {
            this.page.id = this.page.anterior;
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
