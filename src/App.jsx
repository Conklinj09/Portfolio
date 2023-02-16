import Header from './components/Header/Header.js';
import Page from './components/Page/page.js';
// import Main from './components/Main';
// import Project from './components/Project/project';
import React, {useState} from 'react'
import Nav from './components/Nav/nav.js'
import Footer from './components/Footer/Footer.js'
import bg from './assets/cover/cover-image1.jpg'
import './App.css'

function App() {
    const [pages] = 
    useState([
      {name: 'About Me'},
      {name: 'Portfolio'},
      {name: 'Contact'},
      {name: 'Resume'},
    ])
    const [currentPage, setCurrentPage]= useState (pages[0])


    return (
       <div className='main' style={{backgroundImage: `url(${bg})`}}>
        <Header>
          <Nav pages= {pages} setCurrentPage= {setCurrentPage} currentPage= {currentPage}>

          </Nav>
        </Header>
        <main> 
          <Page currentPage= {currentPage}>

          </Page>
        </main>
        <Footer />
       </div>

);
}


     
export default App;
