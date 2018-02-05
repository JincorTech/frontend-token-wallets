import React from 'react';
import { Input, InputGroup, FormFeedback } from 'reactstrap';

const RenderPasswordInput = (props) => {
  const { input, meta, ...restProps } = props;

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
          <i className="fa fa-lock fa-fw"></i>
        </span>
      </div>
      <Input valid={isValid()} autoComplete="off" type="password" meta={meta} {...input} {...restProps}/>
      <FormFeedback>{error}</FormFeedback>
    </InputGroup>
  );
};

export default RenderPasswordInput;
