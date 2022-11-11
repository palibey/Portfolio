import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HomePage} from "./HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SkillsPage} from "./SkillsPage";
import {EducationPage} from "./EducationPage";
import {CertificatePage} from "./CertificatePage";

class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/skills" element={<SkillsPage/>}/>
                    <Route path="/education" element={<EducationPage/>}/>
                    <Route path="/certificates" element={<CertificatePage/>}/>
                </Routes>

            </BrowserRouter>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

