import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    PageLayout,
    AtividadePage,
    TopicoPage,
    SubtopicoPage,
    HomePage,
    DisciplinaPage
} from './pages';

function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/:disciplina" element={<PageLayout />}>
                        <Route index element={<DisciplinaPage />} />
                        <Route path=":topico" element={<TopicoPage />} />
                        <Route
                            path=":topico/:subtopico/:idTexto"
                            element={<SubtopicoPage />}
                        />
                        <Route
                            path=":topico/:subtopico/:idTexto/:idAtividade"
                            element={<AtividadePage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
