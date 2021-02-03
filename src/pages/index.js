import React from 'react';
import Meta from '../organisms/Meta';
import { Anchor } from '../cells/Anchor';
import { ArrowRight } from 'react-ikonate';
const index = () => {
  return (
    <Meta>
      <h1>Hello world!</h1>
      <ul>
        <li>
          <Anchor href="/blog-roll" label="Blog" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/author" label="Author page" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/category" label="Category page" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/juan-cells" label="Juan" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/jorge" label="Jorge" icon={<ArrowRight />} />
        </li>
      </ul>
    </Meta>
  );
};

export default index;
