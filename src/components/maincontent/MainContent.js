import React from 'react';
import style from '../../styles/mainContentStyle.css';

export default () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1>
          Richard Merrigan:
          <span
            className="txt-type"
            data-wait="3000"
            data-words="[&quot;Developer&quot;, &quot;Designer&quot;, &quot;Gamer&quot;, &quot;Creator&quot;]"
          />
        </h1>
        <h2>Welcome To My Website</h2>
      </div>
    </div>
  );
};
