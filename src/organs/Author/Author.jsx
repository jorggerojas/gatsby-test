import React from 'react';
import StyledAuthor from './StyledAuthor';
import { Avatar } from '../../cells/Avatar';
import styled from 'styled-components';
import AuthorName from '../../tissues/AuthorName';
import Hideable from '../../cells/Hideable';
import Spacer from '../../cells/Spacer';

const AuthorNameContainer = styled.div`
  position: relative;
  display: ${({ display }) => display || ''};
  align-items: flex-start;
  margin: 0;
  flex-direction: ${({ direction }) => direction || 'row'};
  @media (max-width: 788px) {
    width: 100%;
  }
`;

/**
 * Component that renders an atuhor name, job and profile picture
 */
const Author = ({ name, job, src }) => {
  return (
    <StyledAuthor>
      <Spacer direction="horizontal" size="md" />
      <Avatar hide="xs" src={src} alt="avatar" />
      <Hideable visibleOn="xs">
        <Spacer direction="horizontal" size="md" />
      </Hideable>
      <AuthorNameContainer display="flex" direction="column">
        <AuthorName name={name} job={job} />
      </AuthorNameContainer>
    </StyledAuthor>
  );
};

export default Author;
