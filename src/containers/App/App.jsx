import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@containers/HomePage';
import Header from '@components/Header';
import routesConfig from '@routes/routesConfig'


import styles from '@containers/App/App.module.css'

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {routesConfig.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
