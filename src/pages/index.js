import React from 'react';
import Meta from '../organisms/Meta';
import { Link } from 'gatsby';
export default function() {
  return (
    <Meta>
      <h1>Hello world!</h1>
      <ul>
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
