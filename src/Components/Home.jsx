import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, CardDeck, Container ,ListGroupItem,ListGroup, Row , Col, Image , Button , Card, Varient, Carousel, CarouselItem } from 'react-bootstrap';
import {CustomScroll} from 'react-custom-scroll';

import './Home.css';
import {Moment} from 'react-moment';

export default class HOME extends Component{
    render() {
        return(
         
            <Container fluid >
                
                <div class="card card-cascade wider reverse">
               
                <div class="bg">
                    <h1 className="text-center" style ={{ color:'white' }} >HFC-ProgrammingClub.org</h1>
                    <a >
                         <div class="mask rgba-white-slight"></div>
                    </a>
                </div> 
                </div>
                <Card border="light" >
                <div class="card-body card-body-cascade text-center">
                    <Card.Body>
                            <Card.Header as="h3" >Programming Club </Card.Header>
                            <p class="card-text">
                                Programming Club is designed for students with an interest in computer science. Some of our focal points include computer programming, web design, and network administration. Our goal is to enhance the skills needed in the field through team projects, tournaments, and guest speakers already involved in workforce.
                            </p>
                    
                    </Card.Body>
                </div>
                        </Card>  
                    <div class="row d-flex justify-content-center">
                        <Row >
                            <Col>
                                <Card border="primary" style={{ width: '40rem' }}>
                                    <Card.Header as="h3">Features</Card.Header>
                                    <ListGroup >
                                        <ListGroup.Item variant="primary">Pair Programming</ListGroup.Item>
                                        <ListGroup.Item >Leadership opportunities</ListGroup.Item>
                                        <ListGroup.Item variant="success">Tour Different Businesses</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Footer >
                                        <h8>Please Contact Avisor For More Information.</h8>
                                     </Card.Footer>
                                    </Card>
                            </Col>       
                            <Col>
                                <Card border="primary" style={{ width: '40rem' }}>
                                    <Card.Body>
                                        <Card.Header as="h3">Upcoming Events </Card.Header>
                                        <Card.Text>
                                        Due to COVID -19 the Progemming Club is not active in Summer 2020.Please Keep checking for Fall 2020
                                        </Card.Text>
                                        <Button variant="primary">Learn More</Button>
                                    </Card.Body>
                                    <Card.Footer >
                                        <h5>Today :</h5>
                                     </Card.Footer>
                                </Card>
                            </Col>
                            <div  class="row d-flex justify-content-center">
                        <Row>
                            <Card bg="primary" text="white" >
                               
                            <Card.Body>
                                    <Card.Header as="h3">Advisor </Card.Header>
                                    <Row >
                                    <Card.Text>
                                    <Col>Kim Moscardelli</Col>
                                   <Col>Phone :
                                   (313) 317-1549</Col>
                                   
                                   <Col>email :
                                    kimm@hfcc.edu</Col>
                                    </Card.Text>
                                    </Row>
                                    </Card.Body> 
                            </Card>
                        </Row>
                    </div>
                        </Row>
                    </div>
                    <p></p>
                    
                </Container>
        )
    }
}