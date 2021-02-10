import React from 'react';
import StyledAuthor from './StyledAuthor';
import Avatar from '../../cells/Avatar';
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
 * @param {String} name Author's name
 * @param {String} job Author's position/job
 * @param {String} src Image's path
 * @param {String} slug Author's 'friendly' id or nickname
 */
const Author = ({ name, job, src, slug }) => {
  return (
    <StyledAuthor>
      <Spacer direction="horizontal" size="md" />
      <Avatar hide="xs" src={src} alt="avatar" />
      <Hideable visibleOn="xs">
        <Spacer direction="horizontal" size="md" />
      </Hideable>
      <AuthorNameContainer display="flex" direction="column">
        <AuthorName name={name} job={job} slug={slug} />
      </AuthorNameContainer>
    </StyledAuthor>
  );
};

export default Author;
