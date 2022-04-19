import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

/* Defining the props that the component will receive. */
export interface Props {
  channelName: string;
  selected?: boolean;
}

/**
 * ChannelButton is a React.FC component that takes a channelName and selected props and returns a
 * Container component with a div containing a HashtagIcon and a span with the channelName, and another
 * div containing an InviteIcon and a SettingsIcon.
 * @param  - React.FC<Props> = ({ channelName, selected }) => {
 * @returns A React component.
 */
const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;