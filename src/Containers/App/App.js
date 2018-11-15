import React from 'react';
import SideBar from '../../Components/SideBar/Sidebar';
import Main from '../../Components/Main/Main';
import './App.css';
import {store} from '../../store/index';
import _ from 'lodash';

const App = () => {
    const { contacts, user, activeUserId } = store.getState();
    return (
        <div className='App'>
            <SideBar contacts={_.values(contacts) } />
            <Main user={user} activeUserId={activeUserId}/>
        </div>
    );
};
export default App;