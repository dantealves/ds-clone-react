import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

/**
 * UserInfo is a React.FC that returns a Container that contains a Profile that contains an Avatar and
 * a UserData that contains a strong and a span.
 * @returns The UserInfo component is being returned.
 */
const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Dante Gabriel</strong>
          <span>#2689</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;