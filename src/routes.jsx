import Pokemon from './pages/Pokemon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='pokemon' element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;