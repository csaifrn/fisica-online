import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout, AtividadePage, TopicoPage, SubtopicoPage } from './pages';

function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/:disciplina/:topico" element={<PageLayout />}>
                        <Route
                            path="/:disciplina/:topico/"
                            element={<TopicoPage />}
                        />
                        <Route
                            path="/:disciplina/:topico/:subtopico/:idTexto"
                            element={<SubtopicoPage />}
                        />
                        <Route
                            path="/:disciplina/:topico/:subtopico/:idTexto/:idAtividade/"
                            element={<AtividadePage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
