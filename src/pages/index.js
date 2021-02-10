import React from 'react';
import Meta from '../organisms/Meta';
import Anchor from '../cells/Anchor';
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
          <Anchor href="/author/jorge" label="Author page" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/category" label="Category page" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/grid" label="Grid page" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/blog-post" label="Blog post" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/video" label="Video" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/podcast" label="Podcast" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/download" label="Download" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/long-form" label="Long form article" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/juan-cells" label="Juan" icon={<ArrowRight />} />
        </li>
        <li>
          <Anchor href="/jorge" label="Jorge" icon={<ArrowRight />} />
        </li>
      </ul>
    </Meta >
  );
};

export default index;
