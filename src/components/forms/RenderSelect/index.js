import React from 'react';
import { Input, InputGroup, FormFeedback } from 'reactstrap';

const RenderInput = (props) => {
  const {
    input,
    meta,
    icon,
    options,
    ...restProps
  } = props;

  const {
    error,
    invalid,
    active,
    visited
  } = meta;

  const isValid = () => {
    if (!active && invalid && visited) return false;
    if (!invalid) return true;

    return null;
  };

  return (
    <InputGroup className="mb-3">
      <Input type="select" valid={isValid()} meta={meta} {...input} {...restProps}>
        {options.map(({ value, label }) =>
          <option value={value} key={value}>{label}</option>)}
      </Input>
      <FormFeedback>{error}</FormFeedback>
    </InputGroup>
  );
};

export default RenderInput;
