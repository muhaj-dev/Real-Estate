import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref>
      <Card style={{ width: '420px', cursor: 'pointer' }} className="m-1 mb-4 border-0 justify-content-flex-start">
        <Card.Img  src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house" />
        <Card.Body style={{ flex: '0'}} className='m-0 p-0 align-middle d-flex justify-content-around'>
          <Col className='d.flex'>
            <span class="align-middle me-1 ">{isVerified && <GoVerified />}</span>
            <span class="align-middle me-1 ">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</span>
          </Col>
          <img alt="100x100" className="rounded-circle" width="100" height='50'  src={agency?.logo?.url} data-holder-rendered="true"></img>
        </Card.Body>
        <Card.Title className='align-middle p-0 d-flex justify-content-start text-primary'>
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Card.Title>
        <Card.Text className='fs-5'>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Card.Text>
      </Card>
    </Link>  
)

export default Property;