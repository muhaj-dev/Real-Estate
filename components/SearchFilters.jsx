import { useEffect, useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData)
    const router = useRouter();
 
    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({ pathname: path, query: query })
    }

    // const searchProperties = (filterValues) => {
    //     const path = router.pathname;
    //     const { query } = router;
    
    //     const values = getFilterValues(filterValues)
    
    //     values.forEach((item) => {
    //       if(item.value && filterValues?.[item.name]) {
    //         query[item.name] = item.value
    //       }
    //     })
    
    //     router.push({ pathname: path, query: query });
    //   };

    return (
        <Row className='bg-light d-flex gy-3 flex-wrap p-5  align-items-center justify-content-center'> 
            {filters.map((filter) => (
                <Form.Group key={filter.queryName} as={Col} className="col-auto">
                <Form.Select 
                className="p-2 pe-5"
                defaultValue={filter.placeholder}
                onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder}
                >
                <option>{filter.placeholder}</option>
                {filter?.items.map((item) => (
                    <option value={item.value} key={item.value}>
                        {item.name}
                    </option>
                ))}
                </Form.Select>
             </Form.Group> 
            ))}
                      
        </Row>
    )
}

export default SearchFilters;