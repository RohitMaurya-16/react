import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
    /*
    root--> is a div id i html here render function render App output and shove it on root mean thatt div section..
    jo bhi App.js me output inklega vo div jiska name root hai usme me set ho jyega
    here...
    <div id='root'>
    Hello // div ke andar hoga div ki sari property is hello per bhi apply hogi just like html.
    </div>
    */ 
)
