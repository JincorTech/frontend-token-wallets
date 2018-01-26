import React from 'react';
import { Input, InputGroup } from 'reactstrap';

const RenderPasswordInput = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <InputGroup className="mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="icon-lock"></i>
        </span>
      </div>
      <Input type="password" meta={meta} {...input} {...restProps}/>
    </InputGroup>
  );
};

export default RenderPasswordInput;
