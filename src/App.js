import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    PageLayout,
    AtividadePage,
    TopicoPage,
    SubtopicoPage,
    HomePage
} from './pages';

function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/:disciplina/:topico" element={<PageLayout />}>
                        <Route index element={<TopicoPage />} />
                        <Route
                            path=":subtopico/:idTexto"
                            element={<SubtopicoPage />}
                        />
                        <Route
                            path=":subtopico/:idTexto/:idAtividade"
                            element={<AtividadePage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
