import React from 'react';
import NotificationIcon from 'components/icons/notification';
import { useSelector } from 'react-redux';
import { hasNotification } from 'features/general/generalSlice';
import './notifications.scss';

const Notification = () => {
  const showNotification = useSelector(hasNotification);

  return (
    <div className="notification-wrap mr-24">
      <NotificationIcon />
      {showNotification && <span className="notification-dot"></span>}
    </div>
  );
};

export default Notification;
