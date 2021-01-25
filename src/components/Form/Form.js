import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = (props) => {
  const { items } = useSelector(({ cart }) => cart);
  const { handleSubmit, pristine, submitting } = props;

  const onClickOrder = () => {
    console.log('Your order', items);
  };
  return (
    <form className="form-intro" onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            className="form-custom"
            name="name"
            component="input"
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
      <br />
      <div>
        <div>
          <Field
            className="form-custom"
            name="surname"
            component="input"
            type="text"
            placeholder="Surname"
          />
        </div>
      </div>
      <br />
      <div>
        <div>
          <Field
            className="form-custom"
            name="adress"
            component="input"
            type="adress"
            placeholder="Adress"
          />
        </div>
      </div>
      <br />
      <div>
        <div>
          <Field
            className="form-custom"
            name="phone"
            component="input"
            type="phone"
            placeholder="Phone"
          />
        </div>
      </div>
      <br />
      <div></div>
      <div>
        <button
          className="form-button form-custom-btn"
          type="submit"
          disabled={pristine || submitting}
          onClick={onClickOrder}>
          Order
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
})(SimpleForm);
