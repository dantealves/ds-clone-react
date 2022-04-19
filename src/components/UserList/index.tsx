import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Dante Alves" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Caio Phillipo" isBot />
      <UserRow nickname="Eduardo Matos" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
      <UserRow nickname="Embucete" />
    </Container>
  );
};

export default UserList;