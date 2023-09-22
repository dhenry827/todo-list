import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Todo from '../components/Todo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    { <Todo />}
  </React.StrictMode>,
)
