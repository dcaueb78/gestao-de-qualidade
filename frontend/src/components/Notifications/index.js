import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Notification } from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#4aa3a1" size={20} />
      </Badge>

      <NotificationList>
        <Notification unread>
          <p> Sucesso em corretiva de não conformidade DEU RUIM </p>
          <button type="button">Mark as read</button>
        </Notification>
        <Notification>
          <p> Sucesso em corretiva de não conformidade DEU RUIM </p>
          <button type="button">Mark as read</button>
        </Notification>
        <Notification>
          <p> Sucesso em corretiva de não conformidade DEU RUIM </p>
          <button type="button">Mark as read</button>
        </Notification>
      </NotificationList>
    </Container>
  );
}
