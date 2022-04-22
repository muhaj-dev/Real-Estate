import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap';
import { BsFilter } from 'react-icons/bs';

const Search = () => {
    const [searchFilter, setSearchFilter] = useState(false);
    const router = useRouter();

    return (
        <Container fluid>
            <Row
            className="
            bg-light 
            border-bottom 
            p-3 fw-bold fs-3  
            "
            >
                <span className="text-center align-middle">Search Property By Filter</span>
            </Row>
        </Container>
    )
}

export default Search;