import styled from 'styled-components';

const StyledAuthorDescription = styled.div`
  width: 100%;
  display: ${({ display }) => display || 'flex'};
  align-items: ${({ align }) => align || 'center'};
  margin: ${({ margin }) => margin || ''};
`;

export default StyledAuthorDescription;
