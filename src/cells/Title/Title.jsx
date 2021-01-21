import React from 'react';
import TitleStyle from './TitleStyle'

const Title = ({
  content,
  ...props
}) => {
  return (<TitleStyle {...props}>{content}</TitleStyle>)
}

export default Title;
