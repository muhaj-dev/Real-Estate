import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.module.css'
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref>
    {/* <Row className="g-4 card-width"> */}
    <Card style={{ width: '420px', cursor: 'pointer' }} className="m-2 border-0 justify-content-flex-start">
      <Card.Img  src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house" />
      <Card.Body className='pt-3 m-0 p-0 align-middle justify-content-space-between'>
        <Col className='align-middle'>
          <div class="d-inline  me-1 ">{isVerified && <GoVerified />}</div>
          <div class="d-inline me-1 ">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</div>
        </Col>
      
      </Card.Body>
    </Card>
    </Link>  
)

export default Property;