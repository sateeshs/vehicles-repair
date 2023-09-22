import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from '../../../public/next.svg';

const ChatWrapper = () => {
    const handleNewUserMessage = (newMessage: string) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message through the backend API
      };
    return(<Widget
    handleNewUserMessage={handleNewUserMessage}
    profileAvatar={logo}
    title="My new awesome title"
    subtitle="And my cool subtitle"
  />);
}

export default ChatWrapper;