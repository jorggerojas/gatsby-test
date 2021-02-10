import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import CategoryTemplate from '../templates/CategoryTemplate';

const CategoryRouter = () => {
    return (
        <Router>
            <Route path="/category/:slug">
                <CategoryTemplate />
            </Route>
        </Router>
    );
};

export default CategoryRouter;