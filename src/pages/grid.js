import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from '../cells/Title';
import Spacer from '../cells/Spacer';
import config from '../utils/config';
import padding from '../utils/padding';

const { display, breakpoints } = config;

const Main = styled.div`
    transition: all .2s ease;
    width: 100%;
    height: clamp(22.313rem, calc(22.313rem + ((1vw - 0.2rem) * 14.4643)), 32.438rem);
    margin: ${display.mobile.xxl} 0;
    padding: 0;
    @media screen and (min-width: ${breakpoints.xs}){
        margin: ${display.mobile.xxl} 0;
    }
    @media screen and (min-width: ${breakpoints.md}){
        margin: ${display.desktop.xl} 0;
    }
    @media screen and (min-width: ${breakpoints.xl}){
        margin: calc(${display.desktop.xl} * 1.125) 0;
        padding: 0 calc(10.375rem * 1.125);
    }
`;
const Content = styled(Container)`
    padding: 0;
    height: 100%;
`;
const Column = styled(Col)`
    margin: 0;
    ${({ paddingSmall }) => paddingSmall ? 'padding: 0.15rem 0.5rem;' : "padding: 0.5rem 1rem"};
    ${({ remove }) => remove ? 'padding: 0;' : null};
    & > div {
        width: 100%;
        background-color: ${({ color }) => color || 'transparent'};
        height: 100%;
    }
`;
const StyledRow = styled(Row)`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    ${({ flex }) => flex === "true" ?
        'display: flex; align - items: center;justify - content: center;' : null};
    ${({ nested }) => nested === "true" ? 'flex-direction: column;' : null};
    &  > ${Column}{
        @media screen and (min-width: ${breakpoints.sm}) {
            ${({ nested }) => nested === "true" ? 'flex-flow: column;' : null};    
        }
        ${({ flex }) => flex === "true" ? 'height: -webkit-fill-available;' : null};
        ${({ nested }) => nested === "true" ? 'flex-flow: row;' : null};
        ${({ nested }) => nested === "true" ? 'max-width: 100%' : null};
    }
      
`;

const Web = () => {
    return (
        <>
            <Main >
                <Content fluid>
                    <StyledRow>
                        <Column color="violet">
                            <div></div>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="6" color="violet">
                            <div></div>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <div></div>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="8" color="violet">
                            <div></div>
                        </Column>
                        <Column sm="4" color="DarkSlateBlue">
                            <div></div>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="3" color="violet">
                            <div></div>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <div></div>
                        </Column>
                        <Column sm="3" color="yellow">
                            <div></div>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="7" color="violet">
                            <div></div>
                        </Column>
                        <Column sm="5" color="DarkSlateBlue">
                            <div></div>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="3" color="violet">
                            <div></div>
                        </Column>
                        <Column sm="3" color="DarkSlateBlue">
                            <div></div>
                        </Column>
                        <Column sm="3" color="yellow">
                            <div></div>
                        </Column>
                        <Column sm="3" color="black">
                            <div></div>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="9" color="violet">
                            <div></div>
                        </Column>
                        <Column sm="3" color="DarkSlateBlue">
                            <div></div>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="6" color="violet">
                            <StyledRow nested={"true"} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" paddingSmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <StyledRow nested={"true"} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" paddingSmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="yellow" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="black" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="6" color="violet">
                            <StyledRow nested={"true"} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" paddingSmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <StyledRow nested={"true"} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" paddingSmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="yellow" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" paddingSmall={"true"}>
                                            <StyledRow nested={"true"}>
                                                <Column xs="6" color="thistle" paddingSmall={"true"}>
                                                    <div></div>
                                                </Column>
                                                <Column xs="6" color="thistle" paddingSmall={"true"}>
                                                    <div></div>
                                                </Column>
                                            </StyledRow>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="6" color="violet">
                            <StyledRow nested={"true"} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" paddingSmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <StyledRow nested={"true"} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" paddingSmall={"true"}>
                                    <StyledRow nested={"true"} >
                                        <Column paddingSmall={"true"} xs="6">
                                            <StyledRow>
                                                <Column paddingSmall={"true"} xs="8" color="salmon">
                                                    <div></div>
                                                </Column>
                                                <Column paddingSmall={"true"} xs="4" color="lightgreen">
                                                    <div></div>
                                                </Column>
                                            </StyledRow>
                                        </Column>
                                        <Column paddingSmall={"true"} xs="6">
                                            <StyledRow>
                                                <Column paddingSmall={"true"} xs="6" color="olive">
                                                    <div></div>
                                                </Column>
                                                <Column paddingSmall={"true"} xs="6" color="indigo">
                                                    <div></div>
                                                </Column>
                                            </StyledRow>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <hr></hr>
            <Main>
                <Content fluid>
                    <StyledRow>
                        <Column sm="6" color="violet">
                            <StyledRow nested="true">
                                <Column color="red" remove="true">
                                    <StyledRow nested="true" flex="true">
                                        <Column>
                                            <div>
                                                <Title level="4" lineHeight="145%" family="Manrope">
                                                    Baby Monitor Technology and more stufff!!!!!!!!!!
                                                </Title>
                                                <Spacer size="md" />
                                                <Title level="2" lineHeight="145%" css={padding({ bottom: 'md' })}>
                                                    Blabla ilja dkljakd jkadj jad kjadkja
                                                </Title>
                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                                <Column color="red" remove="true">
                                    <StyledRow>
                                        <Column remove="true">
                                            <div>
                                                <img
                                                    style={{
                                                        backgroundSize: "cover",
                                                        width: "100%",
                                                        height: '100%'
                                                    }}
                                                    alt="TEST"
                                                    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                                                />
                                            </div>
                                        </Column>
                                        {/* <Column lg="6" color="hotpink" paddingSmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column lg="6" color="purple" paddingSmall={"true"}>
                                            <div></div>
                                        </Column> */}
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <StyledRow nested={"true"} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" paddingSmall={"true"}>
                                    <div></div>
                                </Column>
                            </StyledRow>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
        </>
    );
};

export default Web;