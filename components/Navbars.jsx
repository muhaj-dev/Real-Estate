
// import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';

import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbars = () => (
    <Navbar bg="white" className="p-3 mb-5 border-bottom" expand="">
        <Container>
            <Navbar.Brand href="/" className='fs-3 fw-bold text-primary'>Muhaj</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <br />
            <Row  className='d-flex p-2 justify-content-end'>
            <Nav style={{ width: '200px' }}>
                <Nav.Link href="/" passHref><FcHome className='me-2' /> Home</Nav.Link>
                <Nav.Link href="/search" passHref><BsSearch className='me-2'/> Search</Nav.Link>
                <Nav.Link href="/search?purpose=for-sale" passHref><FcAbout className='me-2' /> Buy Property</Nav.Link>
                <Nav.Link href="/search?purpose=for-rent" passHref><FiKey className='me-2' /> Rent Property</Nav.Link>
            </Nav>
            </Row>
           
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navbars;