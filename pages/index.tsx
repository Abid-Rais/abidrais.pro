import Head from 'next/head'
import NavBar from '../components/navbar'; 
import Footer from '../components/footer'; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>abidrais.pro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div style={{margin: 50, fontSize: 20}}>
        <p >
          Hello! My name is Abid Rais and I am currently a 4th-year undergraduate student studying Computer Science at New York University, Tandon School of Engineering. 
        </p>
        <p >
          I am experienced in full-stack web development. I am skilled in creating Frontends of web applications with ReactJS and ReduxJS. I am also skilled in developing the Backend of web applications with Django, as Python is my go-to language, and various databases such as PostgresSQL and MongoDB. 
        </p>

        <p>
          I am currently searching for a Full-Time Software Engineering position. 
        </p>
      </div>

      <Footer />
    </div>
)}
