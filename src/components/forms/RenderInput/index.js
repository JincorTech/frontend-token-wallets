import React from 'react';
import { Input, InputGroup, InputGroupAddon, FormFeedback } from 'reactstrap';

const RenderInput = (props) => {
  const {
    input,
    meta,
    icon,
    append,
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
      <div className="input-group-prepend">
        <span className="input-group-text">
          {icon}
        </span>
      </div>
      <Input valid={isValid()} meta={meta} {...input} {...restProps}/>
      {append ? <InputGroupAddon addonType="append">{append}</InputGroupAddon> : null}
      <FormFeedback>{error}</FormFeedback>
    </InputGroup>
  );
};

export default RenderInput;
