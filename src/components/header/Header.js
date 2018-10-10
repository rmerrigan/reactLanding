import React from 'react';
import style from '../../styles/headerStyle.css';

export default () => {
  return (
    <div className={style.topnavContainer}>
      <div>
        <a className={style.home} href="#">
          Home
        </a>
      </div>
      <div>
        <a className={style.about} href="#">
          About
        </a>
      </div>
      <div>
        <a className={style.contact} href="#">
          Contact
        </a>
      </div>
      <div>
        <a className={style.blog} href="#">
          Blog
        </a>
      </div>
    </div>
  );
};
