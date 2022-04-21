import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { fetchApi, baseUrl } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText,linkName, imageUrl }) => (
  <Container > 
      <Row className='d-flex  justify-content-center align-middle my-4' md="auto">
        <Image src={imageUrl} width={500} height={300} alt="banner" />
        <Col className='p-3 '>
          <div className=' fs-6 fw-normal text-gray-500'>{purpose}</div>
          <div className='fs-3 fw-bold py-1'>{title1}<br />{title2}</div>
          <div className='py-2 fs-6 fw-normal text-gray-700'>{desc1}<br/>{desc2}</div>
          <Button className='fs-6 fw-bold btn-outline-dark btn-light shadow-sm' href={linkName}>
            {buttonText}
          </Button>
        </Col>
      </Row>
    </Container>
)

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForRent, propertiesForSale)
  return (
    <Container >
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Row>
      {propertiesForRent.map((property) => <Property  property={property} key={property.id} />)}
      </Row>
      <Banner 
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      {/* fetch the properties and map over them...*/}
      <Row>
        {propertiesForSale.map((property) => <Property  property={property} key={property.id} />)}
      </Row>
    </Container>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}