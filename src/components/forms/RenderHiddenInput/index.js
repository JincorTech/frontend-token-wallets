import React from 'react';
import { Input } from 'reactstrap';

const RenderHiddenInput = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <div>
      <Input meta={meta} {...input} {...restProps} type="hidden"/>
    </div>
  );
};

export default RenderHiddenInput;
