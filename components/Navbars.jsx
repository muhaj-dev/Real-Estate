
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';

import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbars = () => (
    <Navbar bg="white" className="p-3 mb-5 border-bottom" expand="">
        <Container fluid>
            <Navbar.Brand href="/" className='fs-3 fw-bold text-primary'>Muhaj</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <br />
            <Row  className='d-flex flex-wrap p-2 justify-content-end'>
            <Nav style={{ width: '200px' }}>
                <Link href='/'passHref>
                    <Nav.Link href='/' ><FcHome className='me-2' /> Home</Nav.Link>
                </Link>
                <Link href='/search'passHref>
                    <Nav.Link href="/search" ><BsSearch className='me-2'/> Search</Nav.Link>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                    <Nav.Link href="/search?purpose=for-sale" ><FcAbout className='me-2' /> Buy Property</Nav.Link>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <Nav.Link href="/search?purpose=for-rent" ><FiKey className='me-2' /> Rent Property</Nav.Link>
                </Link>
            </Nav>
            </Row>
           
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navbars;