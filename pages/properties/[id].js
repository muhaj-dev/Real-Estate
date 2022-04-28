import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import ImageScrollbar from "../component/ImageScrollbar"
import { fetchApi, baseUrl } from '../../utils/fetchApi';
import { Component } from 'react';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <Container fluid="lg">
        {photos && <ImageScrollbar data={photos} />}
    </Container>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id }}) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    }
}