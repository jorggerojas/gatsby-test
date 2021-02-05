import styled from 'styled-components';

export const StyledImage = styled.img`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    object-fit: cover;
`;