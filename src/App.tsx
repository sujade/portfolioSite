import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/single-day';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Header from "./Components/Header.tsx";
import Technologies from "./Components/Technologies.tsx";
import Projects from "./Components/Projects.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header/>
        <Technologies/>
        <Projects/>
    </React.StrictMode>,
)
