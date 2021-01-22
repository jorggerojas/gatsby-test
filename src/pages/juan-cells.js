import React from 'react';
import styled, { css } from 'styled-components';
import { Avatar } from '../cells/Avatar';
import { BackgroundImage } from '../cells/BackgroundImage';
import { Button } from '../cells/Button';
import { Paragraph } from '../cells/Paragraph';
import { Title } from '../cells/Title';
import config from '../utils/config';
// import Anchor from '../cells/Anchor';
const colors = config.colors;
const AuthorDesc = styled.div`
  display: flex;
  align-items: center;
`;
export default () => {
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

      <Button colors={colors.primary} label="Small" size="sm" />
      <Button colors={colors.primary} label="Medium/normal" />
      <Button colors={colors.primary} label="Large" size="lg" />
      <Button
        colors={colors.primary}
        label="Large disabled"
        size="lg"
        disabled
      />
      <br />
      <Button colors={colors.secondary} label="Small" size="sm" />
      <Button colors={colors.secondary} label="Medium/normal" />
      <Button colors={colors.secondary} label="Large" size="lg" />
      <Button
        colors={colors.secondary}
        label="Large disabled"
        size="lg"
        disabled
      />
      <br />
      <Button colors={colors.info} label="Small" size="sm" />
      <Button colors={colors.info} label="Medium/normal" />
      <Button colors={colors.info} label="Large" size="lg" />
      <Button colors={colors.info} label="Large disabled" size="lg" disabled />
      <br />
      <Button colors={colors.success} label="Small" size="sm" />
      <Button colors={colors.success} label="Medium/normal" />
      <Button colors={colors.success} label="Large" size="lg" />
      <Button
        colors={colors.success}
        label="Large disabled"
        size="lg"
        disabled
      />
      <br />
      <Button colors={colors.warning} label="Small" size="sm" />
      <Button colors={colors.warning} label="Medium/normal" />
      <Button colors={colors.warning} label="Large" size="lg" />
      <Button
        colors={colors.warning}
        label="Large disabled"
        size="lg"
        disabled
      />
      <br />
      <Button
        colors={colors.warning}
        label="Large disabled"
        size="lg"
        block
        disabled
      />
      <Button colors={colors.warning} label="Small" size="sm" block />
      <Button colors={colors.info} label="Medium/normal" block />
    </>
  );
};
