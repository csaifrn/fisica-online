import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout, PageAtividade, PageTopico } from './pages';

function App() {
    return (
        <div id="app">
            <BrowserRouter basename="/atividade">
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route
                            path="/:disciplina/:topico/"
                            element={<PageTopico />}
                        />
                        <Route
                            path="/:disciplina/:topico/:subtopico/:idAtividade"
                            element={<PageAtividade />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
