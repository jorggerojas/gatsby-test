import styled from 'styled-components';
import config from '../../utils/config';
import Title from '../../cells/Title';
import { AnchorExternal } from '../../cells/Anchor/Anchor';

const { text, spacing } = config;

export const StyledCardTitle = styled(Title)`

`;

export const StyledCardAnchor = styled(AnchorExternal)`

`;

export const StyledCard = styled.div`
    width: 15.875rem;
    height: 16.761rem;
    margin-right: 2rem;
    box-shadow: 0 0rem 0.3rem rgba(0,0,0,0.19), 0rem 0.188rem 0.375rem rgb(0,0,0,.23);
    background: ${text.white};
     cursor: default;
    & ${StyledCardTitle}{
        padding:  0 ${spacing.md};
    }
    & ${StyledCardAnchor}{
        padding:  0 ${spacing.md};
        cursor: pointer;
    }
    & img{
        padding: 0;
    }
    & .menu-item-wrapper {
        cursor: default;
    }
`;