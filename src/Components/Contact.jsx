import React, { Component , useState ,validated , handleSubmit, Grid } from 'react';
import { Form, Row , Col, Button, InputGroup, Container, Jumbotron, Card } from 'react-bootstrap';
import './Contact.css';
import { CardBody } from 'react-bootstrap/Card';
export default class CONTACT extends Component{
    render() {
        return(
            <Container>
                 <Card.Header className="text-center">Contact</Card.Header>
                <card border="primary" style={{ width: '18rem' }}>
                
                    <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                    
                      <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                         
                          type="text"
                          placeholder="Your name"
                          defaultValue=" Last Name"
                        />
                        
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                     
                      </Form.Row>
                      <Form.Row>
                     
                      <Form.Group as={Col} md="4" >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last name"
                          defaultValue="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                    
                      </Form.Row>
                      <Form.Row>
                       <Form.Group as={Col} md="4">
                            <tr><Form.Label>Email address</Form.Label></tr>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    
                        <Form.Label>Your message</Form.Label>
                        <Form.Control as="textarea" rows="3"  />
                    
                     </Form.Row>
                    <Form.Row>
                    <Button type="submit">Submit form</Button>
                    </Form.Row>
                  </Form>
                  </Card.Body>
                  </card>
          </Container>
                  
                );
                
              }
           
        
    }