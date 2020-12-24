import React from 'react'; 
import { Container, Row, Col } from 'shards-react'; 
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'; 
import { GrMail } from 'react-icons/gr'; 

const Footer = (() => {

    return (
        <div style={{
            position: 'fixed', 
            left: '0', 
            bottom: '0', 
            width: '100%', 
            height: '10%', 
            backgroundColor: '#05a3ed', 
            color: 'white', 
            textAlign: 'center', 
        }}>
            <Container>
                <Row>
                    <Col>
                        <a href="https://github.com/Abid-Rais" target="_blank" style={{color: 'inherit'}}><AiFillGithub size={'25pt'} style={{ marginTop: 35 }}/></a>
                    </Col>
                    <Col>
                        <a href="mailto:abidrais1843@gmail.com" style={{color: 'inherit'}}><GrMail size={ '25pt' } style={{ marginTop: 35 }}/></a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/abid-rais-4749351b9/" target="_blank" style={{color: 'inherit'}}><AiFillLinkedin size={ '25pt' } style={{ marginTop: 35 }} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
})

export default Footer