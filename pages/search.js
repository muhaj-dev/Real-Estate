import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap';
import { BsFilter } from 'react-icons/bs';

import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg"

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Container fluid>
            <Row
            className="
            bg-light 
            border-bottom 
            p-2 fw-bolder fs-4 
            d-flex justify-content-center
            align-middle 
            "
            onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Col className="text-center">
                    Search Property By Filter <BsFilter  className="m-1"/>
                </Col>
            </Row>
            {searchFilters && <SearchFilters />}
            <Col className="fs-2 fw-bold p-3">
                Properties {router.query.purpose}
            </Col>
            <Row>
                {properties.map((property) => <Property property={property} key={property.id}/> )}
            </Row>
        <Row className="justify-content-center align-middle flex-column mt-5 mb-5">
          <Image src={noresult} />
          <Col  class="text-center fs-2 mt-4">No Result Found.</Col>
        </Row>
        </Container>
    )
}
 
export default Search;

export async function getStaticProps() {
  
    return{
      props: {
        propertiesForSale: propertyForSale?.hits,
      }
    }
  }