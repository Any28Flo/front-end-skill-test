import React from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Col from "reactstrap/es/Col";

const PaginationComponent = ({charactersPerPage, totalCharacters, paginate}) =>{
    const pageNumbers = [];
    for (let i = 1 ; i<= Math.ceil(totalCharacters / charactersPerPage); i++ ){
        pageNumbers.push(i)
    }
    return(
        <Col className="d-flex justify-content-center">
            <Pagination size="lg" aria-label="Page navigation example">
                {
                    pageNumbers.map( (number,index) =>{
                        return(
                            <PaginationItem key={index}>
                                <PaginationLink  onClick={() => paginate(number)}>
                                    {number}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    })
                }
            </Pagination>

        </Col>


    )
}
export default PaginationComponent;