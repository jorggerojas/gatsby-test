import styled from 'styled-components';

const StyledPostDescription = styled.div`
  display: ${({ display }) => display || 'flex'};
  align-items: ${({ align }) => align || ''};
  justify-content: ${({ justify }) => justify || ''};
  margin: ${({ margin }) => margin || ''};
  flex-direction: ${({ flexDirection }) => flexDirection || ''};
`;

export default StyledPostDescription;
