import React from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import messages from './messages';

/**
 * 
 * @param {String} locale String that represents the locale, it defaults to es-mx
 */
const Provider = ({ locale = LOCALES.SPANISH, children }) => {
  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
