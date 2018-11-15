import ReactDOM from 'react-dom';
import React from 'react';
import App from './Containers/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store/index'

const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById('root'));
};

function fancyLog() {
    console.log('%c Rendered with 👉 👉👇','background: purple; color: #fff');
}

render();
store.subscribe(render);
registerServiceWorker();