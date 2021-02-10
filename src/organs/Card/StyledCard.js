import styled from 'styled-components';
import config from '../../utils/config';

const { text, spacing } = config;

export const StyledCard = styled.div`
    width: 15.875rem;
    height: 16.761rem;
    margin-right: 2rem;
    box-shadow: 0 0rem 0.3rem rgba(0,0,0,0.19), 0rem 0.188rem 0.375rem rgb(0,0,0,.23);
    background: ${text.white};
    & h1, a{
        padding: 0 ${spacing.md};
    }
    & img{
        padding: 0;
    }
    & h1{
        white-space: break-spaces;
    }
`;