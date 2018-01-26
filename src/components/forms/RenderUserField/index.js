import React from 'react';
import { Input, InputGroup } from 'reactstrap';

const RenderUserInput = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <InputGroup className="mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="icon-user"></i>
        </span>
      </div>
      <Input meta={meta} {...input} {...restProps}/>
    </InputGroup>
  );
};

export default RenderUserInput;
