import { useEffect, useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

import { filterData, getFilterValue } from "../utils/filterData";

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData)

    const searchProperties = (filterValues) => {

    }

    return (
        <Row className='bg-light d-flex gy-2 flex-wrap p-4  align-items-center justify-content-center'> 
            {filters.map((filter) => (
                <Form.Group key={filter.queryName} as={Col} className="col-auto">
                <Form.Select 
                className="p-2"
                defaultValue={filter.placeholder}
                controlId="formGridState"
                onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder}
                >
                
                </Form.Select>
             </Form.Group> 
            ))}
                      
        </Row>
    )
}

export default SearchFilters;