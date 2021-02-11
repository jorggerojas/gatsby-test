import React from 'react';
import Title from '../cells/Title';
import Input from '../cells/Input';

const Jorge = () => {
  return (
    <>
      <div style={{
        margin: '3rem 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px'
      }}>
        <Title>Inputs</Title>
        <Input size="sm" disabled value="Value (Disabled)" label="sm disabled with value" iconRequired={true} />
        <Input size="sm" label="sm disabled" disabled />
        <Input size="md" border={'bottom'} iconHelper={'color'} placeholder="md no-label border bottom" />
        <Input size="md" border={'bottom'} placeholder="md no-label border bottom" />
        <Input size="default" iconHelper={'time'} iconRequired type="password" background label="clamp label border full" />
        <Input size="default" iconHelper={'card'} border={'bottom'} background label="clamp label border bottom" />
        <Input size="lg" iconHelper={'mail'} label="lg border overlap" iconRequired={true} border={'overlap'} />
        <Input size="full" background border={'overlap'} label="full-sized border overlap disabled" disabled value="Caption (disabled)" />
      </div>
    </>
  );
}
export default Jorge;