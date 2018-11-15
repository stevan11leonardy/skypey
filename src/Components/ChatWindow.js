import React from 'react';
import { store } from '../store/index';
import Header from '../Components/ChatWindowsComponent/Header';
import Chats from './ChatWindowsComponent/Chat';
import _ from 'lodash';
import './ChatWindow.css'
import MessageInput from '../Containers/MessageInput/messageInput'



const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
    const { typing } = state;
    return (
        <div className='ChatWindow'>
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)} />
            <MessageInput value={typing} />
        </div>
    );
};

export default ChatWindow;