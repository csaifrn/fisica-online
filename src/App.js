import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout, HomePage } from './pages';
import {
    CardCorpoAtividade,
    CardCorpoTopico,
    CardCorpoTexto,
    CardCorpoDisciplina
} from './components';

function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/:disciplina" element={<PageLayout />}>
                        <Route index element={<CardCorpoDisciplina />} />
                        <Route path=":topico" element={<CardCorpoTopico />} />
                        <Route
                            path=":topico/:subtopico/:idTexto"
                            element={<CardCorpoTexto />}
                        />
                        <Route
                            path=":topico/:subtopico/:idTexto/:idAtividade"
                            element={<CardCorpoAtividade />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
