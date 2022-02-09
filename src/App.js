import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import ColorTabs from "./Components/UI/Tabs/ColorTabs";


const LazyVehicles = lazy(() => import('./Components/core/Vehicles/Vehicles'))
const LazyCharging = lazy(() => import('./Components/core/Charging/Charging'))

const App = () => {
    return (
        <Router>
            <Suspense fallback={'Loading...'}>
                <ColorTabs className="color-tabs-box"/>
                <Routes>
                    <Route path="/vehicles" exact element={<LazyVehicles />} />
                    <Route path="/charging" exact element={<LazyCharging />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;