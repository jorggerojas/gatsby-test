import styled from 'styled-components';

const StyledAuthorData = styled.div`
    position: relative;
    display: ${({ display }) => display || ''};
    align-items: flex-start;
    margin: 0;
    flex-direction: ${({ direction }) => direction || 'row'};
    @media (max-width: 788px) {
        width: 100%;
    }
`;

export default StyledAuthorData;