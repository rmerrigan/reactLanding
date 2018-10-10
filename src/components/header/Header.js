import React from 'react';
import headerStyle from '../../styles/headerStyle.css';

export default () => {
  return (
    <div className={headerStyle.topnavContainer}>
      <div>
        <a className={headerStyle.home} href="#">
          Home
        </a>
      </div>
      <div>
        <a className={headerStyle.about} href="#">
          About
        </a>
      </div>
      <div>
        <a className={headerStyle.contact} href="#">
          Contact
        </a>
      </div>
      <div>
        <a className={headerStyle.blog} href="#">
          Blog
        </a>
      </div>
    </div>
  );
};
