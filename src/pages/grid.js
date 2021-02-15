import React from 'react';
import {
    Main,
    Content,
    Column,
    verticalAlign,
    StyledRow
} from '../organisms/Grid';
import ExampleGrid from '../organisms/Grid/ExampleGrid';
import Meta from '../organisms/Meta';
import Article from '../organs/Article';
import Title from '../cells/Title';
import Spacer from '../cells/Spacer';
import Image from '../cells/Image';
import padding from '../utils/padding';
import Scroll from '../utils/locomotiveScroll';

const Web = (callbacks) => {
    return (
        <Meta>
            <Scroll callbacks={callbacks} />
            <div data-scroll-container>
                <ExampleGrid />
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
                                                    <Article
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
                                                    <Article
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
                                                    <Article
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
                                                    <Article
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
                                                    <Article
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
                                                    <Article
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
            </div>
        </Meta>
    );
};

export default Web;