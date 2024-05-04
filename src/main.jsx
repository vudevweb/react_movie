
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/cus.css'
import './assets/css/main.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
