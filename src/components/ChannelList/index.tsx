import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

/* A function that returns a container with a category and a list of channels. */
const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="LOL" />
      <ChannelButton channelName="VALORANT" />
      <ChannelButton channelName="CS" />
      <ChannelButton channelName="FORTNITE" />
      <ChannelButton channelName="MINECRAFT" />
      <ChannelButton channelName="SHHHH" />
    </Container>
  );
};

export default ChannelList;