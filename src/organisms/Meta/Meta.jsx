import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/use-sitemetadata';

/**
 * Meta component set the metadata for the page
 * @param {React.Component} children The page to wrap
 */
const Meta = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <main>
                {children}
            </main>
        </>
    );
}

export default Meta;