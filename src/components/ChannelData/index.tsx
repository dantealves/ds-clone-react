import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

/* A function that is using the useRef hook to create a reference to the messages div. It is then using
the useEffect hook to scroll to the bottom of the div. */
const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    /* Creating a reference to the messages div and then using the useEffect hook to scroll to the
      bottom of the div. */
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Eduardo Matos"
            date="19/04/2022"
            content="Putz HJ?????"
          />
        ))}

        <ChannelMessage
          author="Caio Phillipo"
          date="21/04/2022"
          content={
            <>
              <Mention>@Dante Alves</Mention>, PQ TEM UM AGIOTA NA MINHA CASA???
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;