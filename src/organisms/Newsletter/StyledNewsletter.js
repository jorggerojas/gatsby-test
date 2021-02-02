import styled from 'styled-components';
import config from '../../utils/config';

const { display, spacing, breakpoints } = config;
export const StyledNewsletterTitleContainer = styled.div`
    padding-bottom: 1.813rem;
    transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
    & p{
      padding-right: ${display.desktop.sm}
    }
    @media (min-width: ${breakpoints.xl}) {
      & p{
        padding-right: 0
      }
    }
`;
export const StyledNewsletterInputButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 7rem;
    transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
    @media screen and (min-width: ${breakpoints.xl}) {
      flex-direction: row;
    }
`;
export const StyledNewsletterInputContainer = styled.div`
    margin-right: 2rem;
    padding-bottom: 2.5rem;
    transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
    transition: margin 0.25s cubic-bezier(0.12, 0, 0.39, 0);
`;
export const StyledNewsletter = styled.div`
  width: 100%;
  background: #F8f8f8;
  height: clamp(27rem, calc(27rem + ((1vw - 0.000625rem) * 10.355)), 36.313rem);
  transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  padding: ${display.mobile.sm} 2.25rem ${display.mobile.sm} ${spacing.md};
  @media (min-width: ${breakpoints.sm}) {
    padding: ${display.mobile.xl} 4.68rem ${display.mobile.xl} 7.875rem;
  }
  @media (min-width: ${breakpoints.xl}) {
   padding: 9.357rem 13.438rem 7rem 45.938rem;
  }
`;

export const StyledNewsletterButtonDiv = styled.div`
  padding-top: 0;
  @media (min-width: ${breakpoints.xl}) {
   padding-top: 0.9rem;
  }
`;
