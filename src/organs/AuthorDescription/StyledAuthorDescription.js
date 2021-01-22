import styled from 'styled-components';

const StyledAuthorDescription = styled.div`
  display: ${({ display }) => display || 'flex'};
  align-items: ${({ align }) => align || 'center'};
  margin: ${({ margin }) => margin || ''};
`;

export default StyledAuthorDescription;
