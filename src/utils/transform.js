import React from 'react';
import BlockQuote from '../organs/BlockQuote'
import Anchor from '../cells/Anchor';
import Paragraph from '../cells/Paragraph';
import Title from '../cells/Title';
import TextSpan from '../cells/TextSpan';
import Spacer from '../cells/Spacer';
import Frame from '../cells/Frame';
import Image from '../cells/Image';
import Column from '../cells/Column';

export const transform = node => {
    const { type, name, children, attribs } = node;
    if (type === 'tag') {
        switch (name) {
            case 'em':
                return (
                    <TextSpan lineHeight="1.5" fontStyle="italic"
                        key={Math.floor(Math.random() * 10000)}
                    >
                        {children.map(element =>
                            element.data ? element.data : transform(element))}
                    </TextSpan>
                );
            case 'strong':
                return (
                    <TextSpan lineHeight="1.5" bold="bold"
                        key={Math.floor(Math.random() * 10000)}
                    >
                        {children.map(element =>
                            element.data ? element.data : transform(element))}
                    </TextSpan>
                );
            case 'p':
                return (
                    <React.Fragment key={Math.floor(Math.random() * 10000)}>
                        <Column columns="2">
                            <Paragraph lineHeight="1.5" data-scroll>
                                {children.map(element =>
                                    element.data ? element.data : transform(element))}
                            </Paragraph>
                        </Column>
                        <Spacer size="md" />
                    </React.Fragment>
                );
            case 'h1':
                return (
                    <div key={Math.floor(Math.random() * 10000)}>
                        <Title lineHeight="2.073rem"
                        >
                            {children.map(element =>
                                element.data ? element.data : transform(element))}
                        </Title>
                        <Spacer size="md" />
                    </div>
                );
            case 'h2':
                return (
                    <div key={Math.floor(Math.random() * 10000)}>
                        <Title lineHeight="2.073rem" level="2"
                        >
                            {children.map(element =>
                                element.data ? element.data : transform(element))}
                        </Title>
                        <Spacer size="md" />
                    </div>
                );
            case 'h3':
                return (
                    <div key={Math.floor(Math.random() * 10000)}>
                        <Title lineHeight="2.073rem" level="3"
                        >
                            {children.map(element =>
                                element.data ? element.data : transform(element))}
                        </Title>
                        <Spacer size="md" />
                    </div>
                );
            case 'h4':
                return (
                    <div key={Math.floor(Math.random() * 10000)}>
                        <Title lineHeight="2.073rem" level="4"
                        >
                            {children.map(element =>
                                element.data ? element.data : transform(element))}
                        </Title>
                        <Spacer size="md" />
                    </div>
                );
            case 'h5':
            case 'h6':
                return (
                    <div key={Math.floor(Math.random() * 10000)}>
                        <Title lineHeight="2.073rem" level="5"
                        >
                            {children.map(element =>
                                element.data ? element.data : transform(element))}
                        </Title>
                        <Spacer size="md" />
                    </div>
                );
            case 'a':
                return (
                    <Anchor key={Math.floor(Math.random() * 100000)}
                        label={
                            children.map(element =>
                                element.data ? element.data : transform(element))
                        } href={attribs.href} />
                );
            case 'blockquote':
                return (
                    <BlockQuote
                        key={Math.floor(Math.random() * 10000)}
                        title={
                            children.map(element =>
                                element.data ? element.data : transform(element))
                        }
                    />
                );
            case 'figure':
                return children.map(child => {
                    if (child.name === 'img') {
                        return (
                            <div key={Math.floor(Math.random() * 10000)}>
                                <Image
                                    key={Math.floor(Math.random() * 10000)}
                                    src={child.attribs.src}
                                    alt={`Image ${child.name.src}`}
                                />
                                <Spacer size="md" />
                            </div>
                        );
                    }
                    return null;
                });
            case 'ul':
            case 'ol':
                return (
                    <ul key={Math.floor(Math.random() * 10000)}>
                        {children.map(listElement => {
                            return listElement.name && listElement.name === 'li' ?
                                listElement.children.map(li => {
                                    return li.data ?
                                        <li
                                            key={Math.floor(Math.random() * 10000) + li.data}
                                        >
                                            {li.data}
                                        </li>
                                        : transform(li)
                                }) :
                                null

                        })}
                    </ul>
                );
            default:
                return null;
        }
    }
    return null;
}

export const transformType = node => {
    const { type, name, children } = node;
    if (type === 'tag' &&
        name === 'figure') {
        return children.map(child => {
            if (child.name === 'iframe') {
                return (
                    <Frame
                        key={Math.floor(Math.random() * 10000)}
                        title={child.attribs.title}
                        src={child.attribs.src} />
                );
            } else
                return null;
        })
    }
    return null;
}