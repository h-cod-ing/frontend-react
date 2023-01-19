import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelmetComponent from './lib/HelmetComponent';
import Home from './pages/Home';
import Article from './pages/Article';

export default function App() {
    return (
        <>
            <HelmetComponent />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:category/:index" element={<Article />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
