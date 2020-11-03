import React from 'react';
import ReactDom from 'react-dom'
import App from './components/app/App'
import 'bootstrap/dist/css/bootstrap.min.css'





ReactDom.render(<App />, document.getElementById('root'))

if(module.hot){
    module.hot.accept()
}