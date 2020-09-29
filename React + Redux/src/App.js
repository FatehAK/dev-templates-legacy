import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <Route exact path="/" component={Home} />
    );
};

export default App;
