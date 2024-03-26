import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/single-day';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Header from "./Components/Header.tsx";
import Technologies from "./Components/Technologies.tsx";
import Projects from "./Components/Projects.tsx";
import Footer from "./Components/Footer.tsx";
import Love from './Components/Love.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header/>
        <Technologies/>
        <Projects/>
        <Footer/>
        <Love/>
    </React.StrictMode>,
)
