import React from 'react';
import { Input, FormGroup, Label } from 'reactstrap';

const RenderCheckbox = (props) => {
  const {
    text,
    input,
    meta,
    ...restProps
  } = props;

  return (
    <FormGroup check>
      <Label check>
        <Input meta={meta} {...input} {...restProps} type="checkbox"/>
        {' '}{text}
      </Label>
    </FormGroup>
  );
};

export default RenderCheckbox;
