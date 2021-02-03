import styled from 'styled-components';
import config from '../../utils/config';
import { Link } from 'gatsby';
const spacing = config.spacing;

const StyledAnchor = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  color: #005fb2;
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    text-decoration: none;
    color: #005fb2;
  }

  svg {
    stroke: #005fb2;
    display: inline-block;
    vertical-align: middle;
    margin-left: ${spacing.lg};
    transition: transform 0.2s;
    height: 1em;
  }

  &:hover {
    svg {
      transform: translateX(-4px);
    }
  }
`;

export default StyledAnchor;
