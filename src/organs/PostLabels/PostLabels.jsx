import React from 'react';
import { Notebook, Radio, Download, Play } from 'react-ikonate';
import { Paragraph } from '../../cells/Paragraph';
import Spacer from '../../cells/Spacer';
import StyledPostLabels from './StyledPostLabels';
import { getSize } from '../../cells/Paragraph/StyledParagraph';
import Hideable from '../../cells/Hideable';
const icon = (type) => {
  let color = '#2329D6';
  switch (type) {
    case 'blog':
    default:
      return <Notebook fontSize={getSize('lg')} color={color} />;
    case 'podcast':
      return <Radio fontSize={getSize('lg')} color={color} />;
    case 'free-download':
      return <Download fontSize={getSize('lg')} color={color} />;
    case 'video':
      return <Play fontSize={getSize('lg')} color={color} />;
  }
};

const PostLabels = ({ info, type, reading_time, category, ...props }) => (
  <>
    <StyledPostLabels {...props}>
      {icon(type)}
      <Spacer direction="horizontal" size="nano" />
      <Paragraph size="xs">{type}</Paragraph>
      <Spacer direction="horizontal" size="sm" />
      <Paragraph size="xs">{`${reading_time} MINUTES READING`}</Paragraph>
      <Hideable visibleOn="md">
        <Spacer direction="horizontal" size="sm" />
        <Paragraph
          size="xs"
          hide="sm"
          color="danger"
        >{`${category}`}</Paragraph>
      </Hideable>
    </StyledPostLabels>
    <Spacer size="md" />
  </>
);

export default PostLabels;
