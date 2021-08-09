import {useState} from "react";
import avatarSvg from './avatar.svg';

import s from './ProfileInfo.module.css';

const ProfileInfo = ({fullName, about, photos, contacts, lookingForAJob}) => {

  const [editMode, setEditMode] = useState(false);
  const [profileStatus, setProfileStatus] = useState(about);

  const changeProfileStatus = (e) => {
    setProfileStatus(e.target.value);
  };

  return (
    <div>
      <div>
        {/*https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300*/}
        <img className={s.profileBg}
             src='https://josephliu.co/wp-content/uploads/2019/06/10-ferdinand-stohr-149422-unsplash.jpg'
             alt='logo'/>
      </div>
      <div className={s.profileInfo}>
        <div className={s.profileUser}>
          <img className={s.profileAvatar} src={photos != null ? photos : avatarSvg} alt="user"/>
        </div>
        <div className={s.profileFullname}>{fullName}</div>
        <div className={s.profileStatus}>
          {
            !editMode ? (<div onDoubleClick={() => setEditMode(true)}>{profileStatus}</div>) :
              (
                <input
                  type="text"
                  value={profileStatus}
                  onChange={(e) => changeProfileStatus(e)}
                  autoFocus
                  onBlur={() => setEditMode(false)}
                />
              )
          }
        </div>
        <div className={s.profileDescription}>
          <div className={s.profileContacts}>
            <div className={s.center}><b>Мои контакты:</b></div>
            <div><b>Facebook:</b> {contacts.facebook ? contacts.facebook : 'не указано'}</div>
            <div><b>Instagram:</b> {contacts.instagram ? contacts.instagram : 'не указано'}</div>
            <div><b>Github:</b> {contacts.github ? contacts.github : 'не указано'}</div>
            <div><b>Статус поиска работы:</b> {lookingForAJob ? 'в активном поиске' : 'не в активном поиске'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;