import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from 'react-bootstrap';

import { Avatar } from '../cells/Avatar';
import { BackgroundImage } from '../cells/BackgroundImage';
import { Button } from '../cells/Button';
import { Paragraph } from '../cells/Paragraph';
import { Title } from '../cells/Title';
import config from '../utils/config';
import { Anchor } from '../cells/Anchor';
import { Download } from 'react-ikonate';
const colors = config.colors;
const AuthorDesc = styled.div`
  display: flex;
  align-items: center;
`;

// const icon = (
//   <svg
//     role="img"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24px"
//     height="24px"
//     viewBox="0 0 24 24"
//     aria-labelledby="arrowRightIconTitle"
//     stroke="#2329D6"
//     stroke-width="1"
//     stroke-linecap="square"
//     stroke-linejoin="miter"
//     fill="none"
//     color="#2329D6"
//   >
//     {' '}
//     <title id="arrowRightIconTitle">Arrow Right</title>{' '}
//     <path d="M15 18l6-6-6-6" /> <path d="M3 12h17" />{' '}
//     <path stroke-linecap="round" d="M21 12h-1" />{' '}
//   </svg>
// );

const Juan = () => {
  return (
    <>
      <BackgroundImage
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt=""
      />
      <section
        css={css`
          padding-left: 100px;
          padding-right: 100px;
        `}
      >
        <p>BLOG - 7 MINUTE READ SALES AND MARKETING, ENGINEERING</p>
        <Title level="1">
          Identifica cuál es el verdadero costo de una pobre identificación
        </Title>
        <Paragraph>
          This chapter will be about getting started with Git. We will begin by
          explaining some background on version control tools, then move on to
          how to get Git running on your system and finally how to get it set up
          to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj
        </Paragraph>

        <AuthorDesc>
          <Avatar
            src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
            alt="avata"
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <Title level="5" style={{ margin: 0 }}>
              Clara Gonzalez
            </Title>
            <Title level="6" style={{ margin: 0 }}>
              CEO at Company Name
            </Title>
          </div>
        </AuthorDesc>
      </section>
      <Container>
        <Anchor label="Next" href="#" icon={<Download />} />
        <Anchor label="Link" href="#" />
      </Container>

      <Button
        colors={colors.primary}
        label="Small"
        icon={<Download />}
        size="small"
      />
      <Button colors={colors.primary} label="Small" size="small" />
      <Button colors={colors.primary} icon={<Download />} size="small" />

      <Button
        colors={colors.primary}
        label="Medium/normal"
        icon={<Download />}
      />
      <Button colors={colors.primary} icon={<Download />} />
      <Button colors={colors.primary} label="Medium/normal" />

      <Button
        colors={colors.primary}
        label="Large"
        icon={<Download />}
        size="large"
      />
      <Button colors={colors.primary} label="Large" size="large" />

      <Button colors={colors.primary} icon={<Download />} size="large" />

      <Button
        colors={colors.primary}
        label="Large disabled"
        size="large"
        disabled
      />

      <Button colors={colors.warning} label="Small" size="small" block />
      <Button colors={colors.info} label="Medium/normal" block />
    </>
  );
};

export default Juan;
