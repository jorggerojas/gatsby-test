import React from 'react';
import Meta from '../organisms/Meta';
import Anchor from '../cells/Anchor';
import { ArrowRight } from 'react-ikonate';
import { Link } from 'gatsby';
const index = () => {
  return (
    <Meta>
      <h1>Hello world!</h1>
      <ul>
        <li>
          <Link to="/blog-roll">
            <Anchor href="/blog-roll" label="Blog" icon={<ArrowRight />} />
          </Link>
        </li>
        <li>
          <Link to="/author">
            <Anchor href="/author" label="Author page" icon={<ArrowRight />} />
          </Link>
        </li>
        <li>
          <Link to="/category">
            <Anchor
              href="/category"
              label="Category page"
              icon={<ArrowRight />}
            />
          </Link>
        </li>
        <li>
          <Link to="/grid">
            <Anchor href="/grid" label="Grid page" icon={<ArrowRight />} />
          </Link>
        </li>
        <li>
          <Link to="/juan-cells">
            <Anchor href="/juan-cells" label="Juan" icon={<ArrowRight />} />
          </Link>{' '}
        </li>
        <li>
          <Link to="/jorge">
            <Anchor href="/jorge" label="Jorge" icon={<ArrowRight />} />
          </Link>{' '}
        </li>
      </ul>
    </Meta>
  );
};

export default index;
