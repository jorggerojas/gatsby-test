import React from 'react';
import { BackgroundImage } from '../cells/BackgroundImage';
import GlobalStyle from '../utils/global';
import { IntroBlog } from '../organisms/IntroBlog'

const data = [
    {
        text: 'BLOG - 7 MINUTE READ',
        size: 'sm',
        style: { marginRight: '7px' },
    },
    { text: 'SALES AND MARKETING, ENGINEERING', size: 'sm', hide: 'm', color: 'info' }
]
export default () => (
    <>
        <GlobalStyle />
        <BackgroundImage
            src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
            alt=""
        />
        <IntroBlog data={data} />
        <IntroBlog data={data} />
        <IntroBlog data={data} />
    </>
);