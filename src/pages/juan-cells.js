import React, { useState } from 'react';
import { css } from 'styled-components';
import { Container } from 'react-bootstrap';

import Button from '../cells/Button';
import config from '../utils/config';
import Anchor from '../cells/Anchor';
import { Download, ArrowRight } from 'react-ikonate';
import { I18Provider, LOCALES } from '../i18n';
import { FormattedMessage } from 'react-intl';

const colors = config.colors;

const Juan = () => {
  const [isSpanish, setIsSpanish] = useState(true);
  const change = () => {
    setIsSpanish((d) => !d);
  };
  return (
    <I18Provider locale={isSpanish ? LOCALES.SPANISH : LOCALES.ENGLISH}>
      <section
        css={css`
          padding-left: 100px;
          padding-right: 100px;
        `}
      >
        <button onClick={change}>
          {isSpanish ? 'change to english' : 'cambiar a español'}
        </button>
      </section>
      <Container>
        <Anchor label="Next" href="#" icon={<ArrowRight />} />
        <Anchor label="Link" href="#" />
      </Container>
      <Container>
        <div>
          <FormattedMessage id="readingTime" values={{ minutes: 0 }} />
        </div>
        <div>
          <FormattedMessage id="readingTime" values={{ minutes: 1 }} />
        </div>
        <div>
          <FormattedMessage id="readingTime" values={{ minutes: 7 }} />
        </div>
      </Container>

      <Button
        onClick={change}
        colors={colors.primary}
        label={<FormattedMessage id="formAccept" />}
        icon={<Download />}
        size="small"
      />
      <Button
        onClick={change}
        colors={colors.primary}
        label={<FormattedMessage id="formReject" />}
        size="small"
      />
      <Button
        onClick={change}
        colors={colors.primary}
        icon={<Download />}
        size="small"
      />

      <Button
        onClick={change}
        colors={colors.primary}
        label={<FormattedMessage id="formCancel" />}
        icon={<Download />}
      />
      <Button onClick={change} colors={colors.primary} icon={<Download />} />
      <Button
        onClick={change}
        colors={colors.primary}
        label={<FormattedMessage id="formSubmit" />}
      />
      <Button
        onClick={change}
        colors={colors.primary}
        label={<FormattedMessage id="formSubmit" />}
      />

      <Button
        onClick={change}
        colors={colors.primary}
        label={<FormattedMessage id="formContinue" />}
        icon={<Download />}
        size="large"
      />
      <Button
        onClick={change}
        colors={colors.primary}
        label={<FormattedMessage id="formAccept" />}
        size="large"
      />

      <Button
        onClick={change}
        colors={colors.primary}
        icon={<Download />}
        size="large"
      />

      <Button
        onClick={change}
        colors={colors.primary}
        label="Large disabled"
        size="large"
        disabled
      />

      <Button
        onClick={change}
        colors={colors.warning}
        label={<FormattedMessage id="loading" />}
        size="small"
        block
      />
      <Button
        onClick={change}
        colors={colors.info}
        label={<FormattedMessage id="loading" />}
        block
      />
    </I18Provider>
  );
};

export default Juan;
