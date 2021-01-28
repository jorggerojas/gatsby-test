import styled from 'styled-components';
import config from '../../utils/config';

const { display, spacing } = config;
export const StyledNewsletterTitleContainer = styled.div`
    padding-bottom: 1.813rem;
    transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
    @media (min-width: 1440px) {
      padding-right: 2rem;
    }
`;
export const StyledNewsletterInputContainer = styled.div`
    padding-bottom: 1rem;
    transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
`;
export const StyledNewsletter = styled.div`
  width: 100%;
  background: #F8f8f8;
  height: clamp(27rem, calc(27rem + ((1vw - 0.000625rem) * 10.355)), 36.313rem);
  transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
  padding: ${display.mobile.sm} 2.25rem ${display.mobile.sm} ${spacing.md};
  @media (min-width: 576px) {
    padding: ${display.mobile.xl} 4.68rem ${display.mobile.xl} 7.875rem;
  }
  @media (min-width: 1440px) {
   padding: 21.5rem 13.438rem 7rem 45.938rem;
  }
`;
