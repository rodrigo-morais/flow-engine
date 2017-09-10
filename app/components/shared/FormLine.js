import React from 'react';
import PropTypes from 'prop-types';

import Fieldset from 'components/shared/Fieldset';
import Label from 'components/shared/Label';
import InputText from 'components/shared/InputText';
import TextArea from 'components/shared/TextArea';

const FormLine = ({
  name,
  labelText,
  inputType,
}) => (
  <Fieldset>
    <Label htmlFor={name} name={name}>
      {labelText}
    </Label>
    {
      inputType === 'text' ?
        <InputText type="text" name={name} /> :
        <TextArea name={name} rows="10" cols="70" />
    }
  </Fieldset>
);

FormLine.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.node.isRequired,
  inputType: PropTypes.string.isRequired,
};

export default FormLine;
