import styled from 'styled-components';
import config from '../../utils/config';

const display = config.display;

const StyledIntroBlog = styled.div`
  display: ${({ src }) => src !== null ? 'flex' : 'block'};
  justify-content: ${({ src }) => src !== null ? 'center' : ''};
  align-items: ${({ src }) => src !== null ? 'center' : ''};
  flex-direction: ${({ src }) => src !== null ? 'row' : ''};
  padding: ${({ src }) =>src !== null ? display.xxl : display.sm};
  padding-bottom: 48px;
  padding-top: 48px;
  @media (min-width: 992px) {
    padding-top: ${({ src }) => src !== null ? '' : '65px'};
    padding-left: ${({ src }) => src !== null ? '' : '160px'};
    padding-bottom: ${({ src }) => src !== null ? '' : '47px'};
  }
  @media (min-width: 1440px) {
    padding-top: ${({size})=>display[size] || display.sm};
    padding-bottom: ${({size})=>display[size] || display.sm};
    padding-left: ${({size})=>display[size] || display.sm};
  }
`;

export default StyledIntroBlog;
