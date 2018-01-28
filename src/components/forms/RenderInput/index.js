import React from 'react';
import { Input, InputGroup } from 'reactstrap';

const RenderInput = (props) => {
  const {
    input,
    meta,
    icon,
    ...restProps
  } = props;

  return (
    <InputGroup className="mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          {icon}
        </span>
      </div>
      <Input meta={meta} {...input} {...restProps}/>
    </InputGroup>
  );
};

export default RenderInput;
