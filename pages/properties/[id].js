import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { fetchApi, baseUrl } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photoIDs } }) => (
    <Container fluid="lg">
        {photoIDs && <ImageScrollbar data={photoIDs} />}
    </Container>
    
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    
    return {
      props: {
        propertyDetails: data,
      },
    };
}