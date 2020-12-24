import * as React from 'react'; 
import Head from 'next/head';
import NavBar from '../components/navbar'; 
import Footer from '../components/footer'; 

import {
    Card,
    CardTitle, 
    CardSubtitle, 
    CardBody, 
    CardFooter,
} from "shards-react"; 

const Projects = (() => {

    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <NavBar />
            <h1 style={{marginTop: '15pt', marginLeft: '25pt'}}>Projects</h1>

            {/* <Card
                style={{
                    maxWidth: "750px",
                    margin: "0 auto", 
                    marginBottom: "30pt", 
                }}
            >
                <CardHeader>Arnold</CardHeader>
                <CardBody>
                    <h6>Teaching Assistant, Programming Languages</h6>
                </CardBody>
                <CardFooter>
                    Fall 2020 - Present
                </CardFooter>
            </Card> */}

            <Card
                style={{
                    maxWidth: "750px",
                    margin: "0 auto", 
                    marginBottom: "30pt",
                }}
            >
                <CardBody>
                    <CardTitle>Distributed Blogging App</CardTitle>
                    <CardSubtitle style={{marginTop: '1pt', marginBottom: '5pt'}}>TechStack: Go, Iris, HTML</CardSubtitle>
                    <ul>
                        <li>Built a web application to allow users to create, read, update, and delete blog posts.</li>
                        <li>Implemented communication between the frontend and backend with TCP and custom protocols.</li>
                        <li>Redesigned multithreaded backend to handle chronologically overlapping requests from multiple frontends.</li>
                        <li>Integrated a replicated data store and failure detection using the Raft consensus algorithm.</li>
                    </ul>
                </CardBody> 
                <CardFooter>
                    Fall 2020
                </CardFooter>
            </Card>

            <Card
                style={{
                    maxWidth: "750px",
                    margin: "0 auto", 
                    marginBottom: "30pt", 
                }}
            >
                <CardBody>
                    <CardTitle>Chat Room</CardTitle>
                    <CardSubtitle style={{marginTop: '1pt', marginBottom: '5pt'}}>TechStack: Go, ReactJS</CardSubtitle>
                    <ul>
                        <li>Created a chat application using socket programming to allow messaging between various users.</li>  
                        <li>Implemented a group chat feature through the use of multithreading, goroutines, and channels.</li>
                        <li>Improved the app with a redesigned GUI, as an alternative to the command line interface.</li>
                    </ul>
                </CardBody>
                <CardFooter>
                    Fall 2020
                </CardFooter>
            </Card>

            <Card
                style={{
                    maxWidth: "750px",
                    margin: "0 auto", 
                    marginBottom: "30pt", 
                }}
            >
                <CardBody>
                    <CardTitle>Ledger</CardTitle>
                    <CardSubtitle style={{marginTop: '1pt', marginBottom: '5pt'}}>TechStack: Python, Django, GraphQl, MongoDB, ReactJS</CardSubtitle>
                    <ul>
                        <li>Developed a web application to audit bank transactions and generate visual analytics.</li>
                        <li>Updated the backend to support querying with GraphQL and storage upon a MongoDB database.</li>
                    </ul>
                </CardBody>
                <CardFooter>
                    Summer 2020
                </CardFooter>
            </Card>

            <Footer />
        </div>
    )
})

export default Projects; 