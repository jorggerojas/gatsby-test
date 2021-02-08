import React from 'react';
import { Main, Column, Content, StyledRow } from './StyledGrid';

/**
 * Just an example how to use grid
 */
const ExampleGrid = () => {
    return (
        <>
            <Main>
                <Content fluid data-scroll>
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
                                <Column xs="6" paddingsmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" paddingsmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" paddingsmall={"true"}>
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
                                <Column xs="6" paddingsmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="yellow" paddingsmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="black" paddingsmall={"true"}>
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
                                <Column xs="6" paddingsmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" paddingsmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" paddingsmall={"true"}>
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
                                <Column xs="6" paddingsmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="yellow" paddingsmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" paddingsmall={"true"}>
                                            <StyledRow nested={"true"}>
                                                <Column xs="6" color="thistle" paddingsmall={"true"}>
                                                    <div></div>
                                                </Column>
                                                <Column xs="6" color="thistle" paddingsmall={"true"}>
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
                                <Column xs="6" paddingsmall={"true"}>
                                    <StyledRow>
                                        <Column xs="6" color="hotpink" paddingsmall={"true"}>
                                            <div></div>
                                        </Column>
                                        <Column xs="6" color="purple" paddingsmall={"true"}>
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
                                <Column xs="6" paddingsmall={"true"}>
                                    <StyledRow nested={"true"} >
                                        <Column paddingsmall={"true"} xs="6">
                                            <StyledRow>
                                                <Column paddingsmall={"true"} xs="8" color="salmon">
                                                    <div></div>
                                                </Column>
                                                <Column paddingsmall={"true"} xs="4" color="lightgreen">
                                                    <div></div>
                                                </Column>
                                            </StyledRow>
                                        </Column>
                                        <Column paddingsmall={"true"} xs="6">
                                            <StyledRow>
                                                <Column paddingsmall={"true"} xs="6" color="olive">
                                                    <div></div>
                                                </Column>
                                                <Column paddingsmall={"true"} xs="6" color="indigo">
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
}

export default ExampleGrid;