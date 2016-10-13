import React from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, onSave, onChange, onDelete,  saving, errors}) => {
  return (
    <form>
      <h1>Manage Author</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={author.firstName}
        onChange={onChange}
        error={errors.firstNameTitle}/>

       <TextInput
        name="lastName"
        label="Last Name"
        value={author.lastName}
        onChange={onChange}
        error={errors.lastNameTitle}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
        <input
        type="button"
        disabled={!author.id}
        value={'Delete'}
        className="btn btn-danger"
        onClick={onDelete}/>

    </form>
  );
};

AuthorForm.propTypes = {
  author: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default AuthorForm;
