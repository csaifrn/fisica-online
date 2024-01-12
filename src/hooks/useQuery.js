import sitemap from '../data/sitemap';

const findNode = nodeId => sitemap.find(node => node.id === nodeId);

function useQuery(idInitial = null) {
    const relative = {
        me(data) {
            return data;
        },
        parents(data) {
            const parents = [data];
            let currentNode = data;
            while (currentNode.parentPageId) {
                currentNode = findNode(currentNode.parentPageId);
                parents.unshift(currentNode);
            }
            return parents;
        },
        children(data) {
            return sitemap.filter(node => node.parentPageId === data.id);
        },
        siblings(data) {
            return sitemap.filter(
                node => node.parentPageId === data.parentPageId
            );
        }
    };

    return query => {
        const id = query.id || idInitial;
        if (query.relative) {
            const data = findNode(id);
            return relative[query.relative](data);
        }
        if (query.segment) {
            const data = findNode(id);
            const parents = relative.parents(data);
            return parents.find(parent => parent.titulo === query.segment);
        }
        if (query.link) {
            let currentId = query.link;
            const urlSegments = [];

            while (currentId) {
                const page = findNode(currentId);
                urlSegments.unshift(page.segmento);
                currentId = page.parentPageId;
            }

            return '/' + urlSegments.join('/');
        }
    };
}

export default useQuery;
