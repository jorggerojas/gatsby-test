import React from 'react';
import StyledAuthor from './StyledAuthor';
import { Avatar } from '../../cells/Avatar';
import padding from '../../utils/padding';
import styled from 'styled-components';
import AuthorName from '../../tissues/AuthorName';

const AuthorNameContainer = styled.div`
  position: relative;
  display: ${({ display }) => display || ''};
  align-items: flex-start;
  margin: 0;
  flex-direction: ${({ direction }) => direction || 'row'};
  @media (max-width: 788px) {
    width: 100%;
  }
  ${padding({ left: 'md' })}
`;

/**
 * Component that renders an atuhor name, job and profile picture
 */
const AuthorDescription = ({ name, job, src }) => {
  return (
    <StyledAuthor css={padding({ left: 'md' })}>
      <Avatar hide="xs" src={src} alt="avatar" />
      <AuthorNameContainer display="flex" direction="column">
        <AuthorName name={name} job={job} />
      </AuthorNameContainer>
    </StyledAuthor>
  );
};

export default AuthorDescription;
