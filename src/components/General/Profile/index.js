import React from 'react';
import { Image } from 'react-bootstrap';
import profilePic from 'static/images/avatar.jpg';
import './profile.scss';

const Profile = () => {
  return (
    <div className="profile-wrap">
      <Image src={profilePic} />
    </div>
  );
};

export default Profile;
