import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppNavBar, AppCard } from '../components';
import { DataContext } from '../contexts';

const PageLayout = () => {
    const { disciplina, topico } = useParams();
    const [data, setData] = useState([]);

    return (
        <DataContext.Provider value={{ data, setData }}>
            <AppNavBar />
            <AppCard />
        </DataContext.Provider>
    );
};

export default PageLayout;
