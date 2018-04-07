import React from 'react';

const Notification = ({ children, type = 'link', onCloseBtnClick = null }) => (
  <div className={`notification is-${type}`}>
    {typeof onCloseBtnClick === 'function' ? (
      <button className="delete" onClick={onCloseBtnClick} />
    ) : null}
    {children}
  </div>
);

export default Notification;
