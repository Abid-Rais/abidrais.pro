import * as React from 'react'; 
import Head from 'next/head'
import NavBar from '../components/navbar'; 
import Footer from '../components/footer'; 

import {
    Card,
    CardHeader, 
    CardTitle, 
    CardSubtitle, 
    CardBody, 
    CardFooter,
} from "shards-react"; 

const WorkExperience = (() => {

    return (
        <div>
            <Head>
                <title>Work Experience</title>
            </Head>

            <NavBar />
            <h1 style={{marginTop: '15pt', marginLeft: '25pt'}}>Work Experience</h1>

            <Card
                style={{
                    maxWidth: "750px",
                    margin: "0 auto", 
                    marginBottom: "30pt",
                }}
            >
                <CardBody>
                    <CardTitle>New York University</CardTitle>
                    <CardSubtitle style={{marginTop: '1pt', marginBottom: '5pt'}}>Teaching Assistant: Programming Languages</CardSubtitle>
                    <ul>
                        <li>Curate programming exercises and assignments in Haskell, Smalltalk, and Prolog.</li>
                        <li>Lead office hours and monthly review sessions for a college-level course of 30+ students.</li>
                    </ul>
                </CardBody> 
                <CardFooter>
                    Remote | December 2020 - Present
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
                    <CardTitle>New York University</CardTitle>
                    <CardSubtitle style={{marginTop: '1pt', marginBottom: '5pt'}}>Teaching Assistant: Computer Architecture</CardSubtitle>
                    <ul>
                        <li>Plan lessons for and teach weekly recitation sections and office hours for a cohort of 40-50 students.</li>
                        <li>Assist in designing and grading challenging course material for a college-level course of 140+ students.</li>
                        <li>Developed an automated testing suite in Python for students to test their assembly language projects with.</li>
                    </ul>
                </CardBody> 
                <CardFooter>
                    Remote | September 2020 - Present 
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
                    <CardTitle>Mkono</CardTitle>
                    <CardSubtitle style={{marginTop: '1pt', marginBottom: '5pt'}}>Software Engineer Intern</CardSubtitle>
                    <ul>
                        <li>Planned and built an online portal to help entrepreneurs track and analyze their financial business needs.</li>
                        <li>Developed website with Django and ReactJS and established a bidirectional data flow between a PostgresSQL
database and Google Sheets.</li>
                        <li>Integrated a data store with ReduxJS to manage application state and code maintainability.</li>
                        <li>Launched online portal, which is currently in use by 30+ entrepreneurs internationally.</li>
                    </ul>
                </CardBody> 
                <CardFooter>
                    Remote | June 2020 - September 2020
                </CardFooter>
            </Card>

            <Footer />
        </div>
    )
})

export default WorkExperience; 