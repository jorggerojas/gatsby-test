import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import PostTemplate from '../templates/PostTemplate';

const PostRouter = () => {
    return (
        <Router>
            <Route path="/post/:slug" exact>
                <PostTemplate />
            </Route>
        </Router>
    );
}

export default PostRouter;