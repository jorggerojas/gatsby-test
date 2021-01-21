import React from 'react';
import { Avatar } from '../cells/Avatar';
import { BackgroundImage } from '../cells/BackgroundImage';
import { Button } from '../cells/Button';
import { Paragraph } from '../cells/Paragraph';
import padding from '../utils/padding';

export default () => {
  return (
    <>
      <BackgroundImage
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt=""
      />
      <Avatar
        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
        alt="avata"
      />
      <Paragraph>
        This chapter will be about getting started with Git. We will begin by
        explaining some background on version control tools, then move on to how
        to get Git running on your system and finally how to get it set up to
        start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj
      </Paragraph>

      <Button label="sm - none" size="sm" css={padding({ size: 'none' })} />
      <Button label="sm - nano" size="sm" css={padding({ size: 'nano' })} />
      <Button label="sm - micro" size="sm" css={padding({ size: 'micro' })} />
      <Button label="sm - tiny" size="sm" css={padding({ size: 'tiny' })} />
      <Button label="sm - xs" size="sm" css={padding({ size: 'xs' })} />
      <Button label="sm - sm" size="sm" css={padding({ size: 'sm' })} />
      <Button label="sm - md" size="sm" css={padding({ size: 'md' })} />
      <Button label="sm - lg" size="sm" css={padding({ size: 'lg' })} />
      <Button label="sm - xl" size="sm" css={padding({ size: 'xl' })} />
      <Button label="sm - xxl" size="sm" css={padding({ size: 'xxl' })} />
      <br />
      <Button label="md - none" css={padding({ size: 'none' })} />
      <Button label="md - nano" css={padding({ size: 'nano' })} />
      <Button label="md - micro" css={padding({ size: 'micro' })} />
      <Button label="md - tiny" css={padding({ size: 'tiny' })} />
      <Button label="md - xs" css={padding({ size: 'xs' })} />
      <Button label="md - sm" css={padding({ size: 'sm' })} />
      <Button label="md - md" css={padding({ size: 'md' })} />
      <Button label="md - lg" css={padding({ size: 'lg' })} />
      <Button label="md - xl" css={padding({ size: 'xl' })} />
      <Button label="md - xxl" css={padding({ size: 'xxl' })} />
      <br />
      <Button label="lg - none" size="lg" css={padding({ size: 'none' })} />
      <Button label="lg - nano" size="lg" css={padding({ size: 'nano' })} />
      <Button label="lg - micro" size="lg" css={padding({ size: 'micro' })} />
      <Button label="lg - tiny" size="lg" css={padding({ size: 'tiny' })} />
      <Button label="lg - xs" size="lg" css={padding({ size: 'xs' })} />
      <Button label="lg - sm" size="lg" css={padding({ size: 'sm' })} />
      <Button label="lg - md" size="lg" css={padding({ size: 'md' })} />
      <Button label="lg - lg" size="lg" css={padding({ size: 'lg' })} />
      <Button label="lg - xl" size="lg" css={padding({ size: 'xl' })} />
      <Button label="lg - xxl" size="lg" css={padding({ size: 'xxl' })} />
      <Button
        label="lg - xxl"
        size="lg"
        css={padding({
          top: 'nano',
          left: 'micro',
          right: 'xxl',
          bottom: 'md',
        })}
      />
      <Button
        label="lg - xxl"
        size="lg"
        css={padding({
          vertical: 'xxl',
          left: 'micro',
          right: 'none',
        })}
      />
      <Button
        label="lg - xxl"
        size="lg"
        css={padding({
          horizontal: 'xxl',
          top: 'micro',
          bottom: 'none',
        })}
      />
    </>
  );
};
