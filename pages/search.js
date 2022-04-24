import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap';
import { BsFilter } from 'react-icons/bs';

import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg"
import { fetchApi, baseUrl } from "../utils/fetchApi";

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
 
export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
      props: {
        properties: data?.hits,
      },
    };
  }
  
  export default Search;