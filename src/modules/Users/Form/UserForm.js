import React from 'react';
import TextInput from '../../../Components/TextInput';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength15, number } from './validation';

const UserForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="userId"
          type="text"
          placeholder="search User by ID"
          validate={[required, number, maxLength15]}
          component={TextInput}
        />
        <button type="submit" disabled={pristine || submitting}>
          search
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          &times;
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'userForm',
})(UserForm)
