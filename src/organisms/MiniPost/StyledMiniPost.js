import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../../utils/config';
import padding from '../../utils/padding';
const { breakpoints } = config;

const ContainerMiniPost = styled(Container)`
  padding: 0;
`;
export const StyledMiniPost = styled(ContainerMiniPost)`
  display: ${({ cover }) => (cover === 'true' ? '' : 'flex')};
  justify-content: center;
  margin: 0;
  width: 100%;
  transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
`;
export const SideImage = styled.img`
  width: 100%;
  height: 25.063rem;
  margin: 0;
  object-fit:cover;
  align-self: center;
  transition: max-width 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  transition: max-height 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  @media (min-width: ${breakpoints.xs}) {
    ${(p) =>
    p.type === 'podcast' &&
    css`
        max-height: 145px;
      `}
    ${(p) =>
    p.type === 'free-download' &&
    css`
        max-height: 330px;
      `}
  }
  @media (min-width: ${breakpoints.sm}) {
    width: calc(calc(100% - 25.063rem) + 25.063rem);
    ${(p) =>
    p.type === 'podcast' &&
    css`
        max-height: 216px;
      `}
    ${(p) =>
    p.type === 'free-download' &&
    css`
        max-height: 440px;
      `}
  }
  @media (min-width: ${breakpoints.md}) {
    max-width: ${(p) => (p.type === 'free-download' ? '347px' : '100%')};
    ${(p) =>
    p.type === 'podcast' &&
    css`
        max-height: 305px;
      `}
  }
  @media (min-width: ${breakpoints.lg}) {
    max-height: 100%;
    align-self: flex-end;
  }
`;
export const PostRow = styled(Row)`
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(p) =>
    p.type === 'blog' ? padding({ bottom: 'sm' }) : padding({ vertical: 'sm' })}

  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: column;
  }
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    padding-left: 2.063rem;
    padding-right: 6.951rem;
  }
  @media (min-width: ${breakpoints.xl}) {
    flex-direction: row;
    padding-left: 10.313rem;
    padding-right: 10.389rem;
  }
`;
export const PostCol = styled(Col)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  max-width: 585px;
  padding: 0;
`;
