import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return(
    <div>
      <div>
        <img
          className={s.content__img}
          src="https://www.rosphoto.com/images/u/articles/1510/7_5.jpg"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          className={s.avatar}
          src="https://news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325"
        />
      </div>
    </div>
  );
}

export default ProfileInfo;