import React, { Component ,Header } from 'react';
import { Jumbotron, Grid , Container ,  Row , Col, Image , Button , Card, Carousel, CarouselItem } from 'react-bootstrap';


export default class ABOUT extends Component{
    render() {
        return(
            <container fluid>
            
            <div>
            <h1 bg="primary" align="center">About </h1>
            </div>
            
                <div align='center'>
                        <Card  align='center' style={{ width: '100rem' }}>
                        <Card.Body>
                            
                            <Card.Text>
                            Shares knowledge and expertise of computer programming and provides professional networking opportunities for students and information about career opportunities. <Card.Link href="/contact">Contact</Card.Link> . 
                            </Card.Text>
                           
                            
                        </Card.Body>
                    </Card>
                    </div>
            
            </container>
        )
    }
}