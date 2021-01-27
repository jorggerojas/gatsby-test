import React from 'react';
import Meta from '../organisms/Meta';
import { Link } from 'gatsby';
const NotFound = () => {
    return (
        <Meta>
            <h1>404 not found</h1>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/blog-roll">Blog</Link>
                </li>
                <li>
                    <Link to="/juan-cells">Juan</Link>
                </li>
                <li>
                    <Link to="jorge">Jorge</Link>
                </li>
            </ul>
        </Meta>
    );
}

export default NotFound;