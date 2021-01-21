import React from 'react';
import { Avatar } from '../cells/Avatar';
import { BackgroundImage } from '../cells/BackgroundImage';
import { Button } from '../cells/Button';
import { Paragraph } from '../cells/Paragraph';

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
      <Button label="Subscribe" />
      <Button label="Subscribe" size="sm" />
      <Button label="Subscribe" size="lg" />
      <Button label="Subscribe" size="lg" disabled />
      <Button label="Subscribe" size="lg" disabled />
    </>
  );
};
