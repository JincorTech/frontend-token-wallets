import React from 'react';
import { Input, InputGroup, FormFeedback } from 'reactstrap';

const RenderInput = (props) => {
  const {
    input,
    meta,
    icon,
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
      <FormFeedback>{error}</FormFeedback>
    </InputGroup>
  );
};

export default RenderInput;
