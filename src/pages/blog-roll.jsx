import React from 'react';
import styled, { } from 'styled-components';
import { Avatar } from '../cells/Avatar';
import { BackgroundImage } from '../cells/BackgroundImage';
// import { Button } from '../cells/Button';
import { Paragraph } from '../cells/Paragraph';
import { Title } from '../cells/Title';


const AuthorDesc = styled.div`
  display: flex;
  align-items: center;
`;
export default () => {
    return (
        <div>
            <BackgroundImage
                src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                alt=""
            />
            <section style={{ paddingLeft: "10vw", paddingRight: "10vw", }}>
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', margin: "1vw" }}>
                    <Paragraph size="sm" style={{ marginRight: '7px' }}>BLOG - 7 MINUTE READ</Paragraph>
                    <Paragraph size="sm" hide="m" color="info">SALES AND MARKETING, ENGINEERING</Paragraph>
                </div>
                <Title level="6" lineHeight="2.243" margin="1vw">Identifica cuál es el verdadero costo de una pobre identificación</Title>
                <Paragraph lineHeight="1.5" margin="1vw">
                    This chapter will be about getting started with Git. We will begin by
                    explaining some background on version control tools, then move on to
                    how to get Git running on your system and finally how to get it set up
                    to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj
                </Paragraph>
                <AuthorDesc style={{ margin: "5vw" }}>
                    <Avatar
                        hide="xsm"
                        src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                        alt="avatar"
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Paragraph style={{ margin: 0 }} bold="600">Clara Gonzalez</Paragraph>
                        <Paragraph style={{ margin: 0 }} color="darkGray">CEO at Company Name</Paragraph>
                    </div>
                </AuthorDesc>
            </section>
        </div>
    );
};