import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import config from '../utils/config';

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
const StyledRow = styled(Row)`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    ${({ nested }) => nested ? 'flex-direction: column;' : null};
    @media screen and (min-width: ${breakpoints[`${({ breakpoint }) => breakpoint}`]}){
        flex-direction: row;
    }
    &  *{
        background-color: white;
        ${({ nested }) => nested ? 'max-width: 100%' : null};
    }
      
`;
const Column = styled(Col)`
    width: 100%;
    margin: 0;
    padding: ${({ remove }) => remove ? '0.15rem 0.5rem' : "0.5rem 1rem"};
    & *{
    width: 100%;
        background-color: ${({ color }) => color || 'transparent'};
        height: 100%;
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
                        <Column sm="6" color="violet">
                            <StyledRow nested={true} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" remove={true}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" remove={true}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" remove={true}>
                                            <div></div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <StyledRow nested={true} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" remove={true}>
                                    <StyledRow>
                                        <Column xs="6" color="yellow" remove={true}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="black" remove={true}>
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
                            <StyledRow nested={true} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" remove={true}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" remove={true}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" remove={true}>
                                            <div></div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <StyledRow nested={true} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" remove={true}>
                                    <StyledRow>
                                        <Column xs="6" color="yellow" remove={true}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" remove={true}>
                                            <StyledRow nested={true}>
                                                <Column xs="6" color="thistle" remove={true}>
                                                    <div></div>
                                                </Column>
                                                <Column xs="6" color="thistle" remove={true}>
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
                            <StyledRow nested={true} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" remove={true}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" remove={true}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" remove={true}>
                                            <div></div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column sm="6" color="DarkSlateBlue">
                            <StyledRow nested={true} >
                                <Column xs="6">
                                    <div></div>
                                </Column>
                                <Column xs="6" remove={true}>
                                    <StyledRow nested={true} >
                                        <Column remove={true} xs="6" remove={true}>
                                            <StyledRow>
                                                <Column remove={true} xs="8" color="salmon">
                                                    <div></div>
                                                </Column>
                                                <Column remove={true} xs="4" color="lightgreen">
                                                    <div></div>
                                                </Column>
                                            </StyledRow>
                                        </Column>
                                        <Column remove={true} xs="6">
                                            <StyledRow>
                                                <Column remove={true} xs="6" color="olive">
                                                    <div></div>
                                                </Column>
                                                <Column remove={true} xs="6" color="indigo">
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
        </>
    );
};

export default Web;