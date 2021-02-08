import React from 'react';
import { Link } from 'gatsby';
import Meta from '../organisms/Meta';
import GlobalStyle from '../utils/global';
const NotFound = () => {
    return (
        <Meta>
            <GlobalStyle />
            <h1>404 not found</h1>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
            </ul>
        </Meta>
    );
}

export default NotFound;