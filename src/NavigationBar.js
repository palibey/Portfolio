import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Assets/Home.png'
import './NavigationBar.css'
import {LinkContainer} from 'react-router-bootstrap'


export function NavigationBar() {
    return(
    <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img className="HomeLogo" src={Logo} alt="Home Page"/>
            </Navbar.Brand>
            <Nav className="me-auto">
                <LinkContainer to="/education">
                    <Nav.Link>
                        <h1>Education</h1>
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/skills">
                    <Nav.Link>
                        <h1>Skills</h1>
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/certificates">
                    <Nav.Link>
                        <h1>Certificates</h1>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
    </Navbar>
    );
}
