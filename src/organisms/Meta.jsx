import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata'

const Meta = ({ children }) => {
    const { title, description, author } = useSiteMetadata();
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="author" content={author} />
            </Helmet>
            <main>
                {children}
            </main>
        </>
    );
}

export default Meta;