import { useState } from 'react';
import { AppNavBar, AppCard } from '../components';
import { PageContext } from '../contexts';
import sitemap from '../data/sitemap';

// Define a functional component called PageLayout
const PageLayout = () => {
    // Initialize state variable 'page' using the useState hook
    const [page, setPage] = useState({});

    // Define a function called 'getPage' that retrieves page data based on given parameters
    const getPage = (params = []) => {
        // Define an array of path IDs
        const pathIds = ['disciplina', 'topico', 'subtopico', 'texto', 'lista'];

        // Initialize an empty object to store the page data
        const pageData = {};

        // Initialize 'currentNode' variable with the 'sitemap' object
        let currentNode = sitemap;

        // Iterate through the 'params' array
        params.forEach((param, index) => {
            // Check if the current index is not the last index
            if (index < params.length - 1) {
                // Add the current node's 'titulo' property to the 'pageData' object
                pageData[pathIds[index]] = currentNode[param].titulo;
            }

            // Update 'currentNode' to the next node based on the current parameter
            currentNode = currentNode[param];
        });

        // Return a new object that combines 'pageData' and 'currentNode'
        return { ...pageData, ...currentNode };
    };

    // Define an object called 'myPage' with properties '_page', 'page', 'next', and 'previous'
    const myPage = {
        _page: page,

        // Define a getter function for 'page' property
        get page() {
            return this._page;
        },

        // Define a setter function for 'page' property
        set page(value) {
            // Call 'getPage' function to retrieve the new page data
            const newPage = getPage(value);

            // Update the 'page' state variable with the new page data
            setPage(newPage);
        },

        // Define a 'next' method to navigate to the next page
        next: () => {
            setPage({
                ...this.page,
                id: this.page.pagina.proxima
            });
        },

        // Define a 'previous' method to navigate to the previous page
        previous: () => {
            setPage({
                ...this.page,
                id: this.page.pagina.anterior
            });
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
