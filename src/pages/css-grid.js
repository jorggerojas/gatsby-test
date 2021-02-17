import React from 'react';
import styled from 'styled-components';
import { Main } from '../organisms/Grid/';
import Card from '../organs/Card';
import Title from '../cells/Title';
import Spacer from '../cells/Spacer';
import Paragraph from '../cells/Paragraph';
import padding from '../utils/padding';

const SimpleDiv = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 71.25rem;
  display: grid;
  grid-column: 1;
  grid-row: 2;
`;
const Arriba = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  justify-content: space-between;
  gap: 5rem;
`;
const DivArribaContentUno = styled.div`
  max-width: 50%;
  grid-column: 1/12;
  grid-row: 1;
`;
const DivArribaContentDos = styled.div`
  grid-column: 10/12;
  grid-row: 1;
`;
const Abajo = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 2;
  gap: 4rem;
  background-size: cover;
  background-image:
    url('https://web.uponor.hk/wp-content/uploads/2018/05/hong_kong_skyline_green_building_in_asia.jpg');
`;
const DivCardAbajo = styled.div`
  grid-column: 10/12;
  padding: 1.063rem 0 2.688rem 0;
`;
const CssGrid = () => {
  return (
    <div>
      <Main>
        <SimpleDiv>
          <Arriba>
            <DivArribaContentUno>
              <Title level="4" lineHeight="145%" family="Manrope">
                Baby Monitor Technology and more stufff!!!!!!!!!!
            </Title>
              <Spacer size="md" />
              <Title level="2" lineHeight="145%" css={padding({ bottom: 'md' })} family="DM Sans">
                Blabla ilja dkljakd jkadj jad kjadkja
            </Title>
            </DivArribaContentUno>
            <DivArribaContentDos>
              <Title level="d2" lineHeight="4rem" family="IBMPlexSans">
                70+
            </Title>
              <Paragraph lineHeight="1.688" color="mutedGray">
                Can you imagine what we will be downloading in another twenty years?
            </Paragraph>
            </DivArribaContentDos>
          </Arriba>
          <Abajo>
            <DivCardAbajo>
              <Card
                title="Identifica cuál es el verdadero costo de una pobre identificación"
                to="#"
                type="blog"
                time={7}
              />
            </DivCardAbajo>
          </Abajo>
        </SimpleDiv>
      </Main>
    </div >
  );
}

export default CssGrid;