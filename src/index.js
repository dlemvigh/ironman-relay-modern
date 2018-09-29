import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/customize.scss';
import './index.scss';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
