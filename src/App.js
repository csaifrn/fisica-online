import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout, PageAtividade, PageTopico, PageSubtopico } from './pages';

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
                            path="/:disciplina/:topico/:subtopico/:idTexto"
                            element={<PageSubtopico />}
                        />
                        <Route
                            path="/:disciplina/:topico/:subtopico/:idTexto/:idAtividade/"
                            element={<PageAtividade />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
