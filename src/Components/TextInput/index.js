import React from 'react';

const TextInput = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
    <span>
      <label>
        {label}
      </label>
      <span>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&
          ((error &&
            <span>
              {error}
            </span>) ||
            (warning &&
              <span>
                {warning}
              </span>))}
      </span>
    </span>
  )

export default TextInput;
