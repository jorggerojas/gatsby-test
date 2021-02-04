import React from 'react';
import Title from '../cells/Title';
import Spacer from '../cells/Spacer';
import Image from '../cells/Image';
import padding from '../utils/padding';
import Card from '../organs/Card';
import {
    Main,
    Content,
    Column,
    verticalAlign,
    StyledRow
} from '../organisms/Grid';

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
            <hr />
            <Main fit="true">
                <Content fluid>
                    <StyledRow>
                        <Column md="6">
                            <StyledRow nested="true">
                                <Column remove="true">
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
                                <Column remove="true">
                                    <StyledRow>
                                        <Column >
                                            <div>
                                                <Image
                                                    alt="TEST"
                                                    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                                                />
                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column md="6">
                            <StyledRow nested="true">
                                <Column remove="true">
                                    <StyledRow nested="true" flex="true">
                                        <Column remove="true" md="5">
                                            <div>

                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                                <Column remove="true" md="7">
                                    <StyledRow css={verticalAlign('top')}>
                                        <Column sm="6">
                                            <div>
                                                <Card
                                                    caption="Caption"
                                                    title="Title"
                                                    titleLineHeight="xs"
                                                    titleLevel="1"
                                                    color="primary"
                                                    sizeParagraph="md"
                                                    space="md"
                                                    paragraph="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev"
                                                />
                                            </div>
                                        </Column>
                                        <Column sm="6">
                                            <div>
                                                <Card
                                                    caption="Caption"
                                                    title="Title"
                                                    titleLineHeight="xs"
                                                    titleLevel="1"
                                                    color="primary"
                                                    sizeParagraph="md"
                                                    space="md"
                                                    paragraph="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev"
                                                />
                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main fit="true">
                <Content fluid>
                    <StyledRow>
                        <Column md="6">
                            <StyledRow nested="true">
                                <Column remove="true">
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
                                <Column remove="true">
                                    <StyledRow>
                                        <Column >
                                            <div>
                                                <Image
                                                    alt="TEST"
                                                    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                                                />
                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column md="6">
                            <StyledRow nested="true">
                                <Column remove="true">
                                    <StyledRow nested="true" flex="true">
                                        <Column remove="true" md="5">
                                            <div>

                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                                <Column remove="true" md="7">
                                    <StyledRow css={verticalAlign('center')}>
                                        <Column sm="6">
                                            <div>
                                                <Card
                                                    caption="Caption"
                                                    title="Title"
                                                    titleLineHeight="xs"
                                                    titleLevel="1"
                                                    color="primary"
                                                    sizeParagraph="md"
                                                    space="md"
                                                    paragraph="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev"
                                                />
                                            </div>
                                        </Column>
                                        <Column sm="6">
                                            <div>
                                                <Card
                                                    caption="Caption"
                                                    title="Title"
                                                    titleLineHeight="xs"
                                                    titleLevel="1"
                                                    color="primary"
                                                    sizeParagraph="md"
                                                    space="md"
                                                    paragraph="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev"
                                                />
                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                    </StyledRow>
                </Content>
            </Main>
            <Main fit="true">
                <Content fluid>
                    <StyledRow>
                        <Column md="6">
                            <StyledRow nested="true">
                                <Column remove="true">
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
                                <Column remove="true">
                                    <StyledRow>
                                        <Column >
                                            <div>
                                                <Image
                                                    alt="TEST"
                                                    src="https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg"
                                                />
                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                            </StyledRow>
                        </Column>
                        <Column md="6">
                            <StyledRow nested="true">
                                <Column remove="true">
                                    <StyledRow nested="true" flex="true">
                                        <Column remove="true" md="5">
                                            <div>

                                            </div>
                                        </Column>
                                    </StyledRow>
                                </Column>
                                <Column remove="true" md="7">
                                    <StyledRow css={verticalAlign('bottom')}>
                                        <Column sm="6">
                                            <div>
                                                <Card
                                                    caption="Caption"
                                                    title="Title"
                                                    titleLineHeight="xs"
                                                    titleLevel="1"
                                                    color="primary"
                                                    sizeParagraph="md"
                                                    space="md"
                                                    paragraph="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev"
                                                />
                                            </div>
                                        </Column>
                                        <Column sm="6">
                                            <div>
                                                <Card
                                                    caption="Caption"
                                                    title="Title"
                                                    titleLineHeight="xs"
                                                    titleLevel="1"
                                                    color="primary"
                                                    sizeParagraph="md"
                                                    space="md"
                                                    paragraph="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev"
                                                />
                                            </div>
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