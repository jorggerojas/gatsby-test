import styled from 'styled-components';
import config from '../../utils/config';
import Title from '../../cells/Title';
import { AnchorExternal } from '../../cells/Anchor/Anchor';

const { text, spacing } = config;

export const StyledCardTitle = styled(Title)`
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledCardAnchor = styled(AnchorExternal)``;

export const StyledCard = styled.div`
  width: 100%;
  /* background: ${text.white}; */
  /* cursor: default; */
  box-shadow: 0 0rem 0.3rem rgba(0, 0, 0, 0.19),
    0rem 0.188rem 0.375rem rgb(0, 0, 0, 0.23);
  padding: 0 ${spacing.md};
  white-space: break-spaces;
  & ${StyledCardAnchor} {
    cursor: pointer;
  }
  & img {
    padding: 0;
  }
  & .menu-item-wrapper {
    cursor: default;
  }
  p {
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
