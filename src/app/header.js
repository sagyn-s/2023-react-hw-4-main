import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <Navbar class="bg-sky-600" bg="light" variant="dark">
                <Container class="bg-sky-600">
                    <Navbar.Brand href="/">Weather website</Navbar.Brand>
                    <Nav class="bg-lime-600" className="me-auto">
                        <Link to="/">Home</Link>
                      
                    </Nav>
                    <Nav class="bg-lime-800" className="me-auto">
                    
                        <Link to="/weather">Weather</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}