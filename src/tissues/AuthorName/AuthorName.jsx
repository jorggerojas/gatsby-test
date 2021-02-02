import React from 'react';
import padding from '../../utils/padding';
import { Paragraph } from '../../cells/Paragraph';
import Spacer from '../../cells/Spacer';
/**
 * Component that renders an author name with its job/position
 */

const AuthorName = ({ name, job }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Paragraph
        bold="400"
        family="DM Sans"
        lineHeight="0.9"
        css={padding({ bottom: 'micro' })}
      >
        {name}
      </Paragraph>
      <Spacer size="micro" />

      <Paragraph lineHeight="0.694" family="DM Sans" size="xs" color="darkGray">
        {job}
      </Paragraph>
    </div>
  );
};

export default AuthorName;
