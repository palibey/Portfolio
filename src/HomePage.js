import {NavigationBar} from "./NavigationBar";
import Profile from "./Assets/ppReact.jpg"
import Card from 'react-bootstrap/Card';
import "./HomePage.css"
import {Button} from "react-bootstrap";
import LogoYazilim from "./Assets/Logo.jpeg"

export function HomePage() {
    return (
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div className="content">
                <img className="profilePicture" src={Profile} alt="Profile Picture"/>
            </div>
            <div className="summary">
                <Card>
                    <Card.Header as="h5">Summary</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            I love problem solving and software development. I am a self- taught
                            student.<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="experience">
                <Card>
                    <Card.Header as="h5">Experience</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <img className="Logo" src={LogoYazilim}/>
                            Software Engineer Internship<br/>
                            LOGO Yazılım<br/>
                            https://www.logo.com.tr/en<br/>
                            Jul 2022 - Sep 2022 (3 months)<br/>
                            • During the internship period, learned Spring(IoC framework for java) and Spring Boot.<br/>
                            • Extended my required internship to 40 days and Learnt JS and TypeScript by using these<br/>
                            technologies to create a weather app for the following languages: React, React Native, and
                            JavaScript.<br/>
                            • Created Logo Elements React developer page using WebStorm IDE<br/>
                            • Helped implement Logo React Web Wrapper.<br/>
                            • Developed a custom component integrated with TensorFlowJS that does object
                            classification for Logo Elements React Native package<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>

    )
}
