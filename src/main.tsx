import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/intro-component.scss';
import { IntroComponent } from './IntroComponent';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <main 
            className='d-flex align-items-md-center'
        >
            <IntroComponent />
        </main>
    </React.StrictMode>,
)
