import React from 'react';
import padding from '../../utils/padding';
import Paragraph from '../../cells/Paragraph';
import Spacer from '../../cells/Spacer';
import Anchor from '../../cells/Anchor';

/**
 * Component that renders an author name with its job/position
 * @param {String} name Author name
 * @param {String} job Author position
 * @param {String} slug Author's 'friendly' id or nickname
*/
const AuthorName = ({ name, job = "Author", slug }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Paragraph
        bold="400"
        family="DM Sans"
        lineHeight="0.9"
        css={padding({ bottom: 'micro' })}
      >
        <Anchor href={`/author/${slug}`} color="dark" label={name} />
      </Paragraph>
      <Spacer size="micro" />
      <Paragraph lineHeight="0.694" family="DM Sans" size="xs" color="darkGray">
        {job || 'Author'}
      </Paragraph>
    </div>
  );
};

export default AuthorName;
