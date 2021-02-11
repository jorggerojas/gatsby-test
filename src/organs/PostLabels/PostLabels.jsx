import React from 'react';
import { Notebook, Radio, Download, Play } from 'react-ikonate';
import { FormattedMessage } from 'react-intl';

import { getSize } from '../../cells/Paragraph/StyledParagraph';
import Paragraph from '../../cells/Paragraph';
import Hideable from '../../cells/Hideable';
import Spacer from '../../cells/Spacer';
import Anchor from '../../cells/Anchor';

import {I18Provider} from '../../i18n'

import StyledPostLabels from './StyledPostLabels';

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

/**
 * PostLabels component set the description of the MiniPost component
 * @param {Object} to Category path
 * @param {String} type type of the post
 * @param {String} reading_time time for consume the post
 * @param {String} category post category
 * @param {boolean} post Flag to put width in the label for long post
 * @param {Object} props HTML attributes
 */
const PostLabels = ({ to, type = 'blog', reading_time, category, post = true, ...props }) => {

  return (
    <I18Provider>
      <StyledPostLabels {...props}>
        {icon(type)}
        <Spacer direction="horizontal" size="nano" />
        <Paragraph size="xs">{type.toUpperCase()}</Paragraph>
        <Spacer direction="horizontal" size="xs" />
        <Paragraph size="xs" style={{textTransform:'uppercase'}}>
        <FormattedMessage id="readingTime" values={{ minutes: reading_time }} />
        </Paragraph>
        <Hideable visibleOn="md">
          <Spacer direction="horizontal" size="sm" />
          <Paragraph
            size="xs"
            hide="sm"
            color="info"
          >
            <Anchor href={`/category/${to}`} color="info" label={category.toUpperCase()} />
          </Paragraph>
        </Hideable>
      </StyledPostLabels>
      <Spacer size="md" />
    </I18Provider>
  );
}

export default PostLabels;
