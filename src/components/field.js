import React from 'react';

const Field = ({ errors, label, children }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      {React.cloneElement(children, {
        className: `input ${errors ? 'is-danger' : ''}`
      })}
    </div>
    {errors ? <p className="help is-danger">{errors[0]}</p> : null}
  </div>
);

export default Field;
