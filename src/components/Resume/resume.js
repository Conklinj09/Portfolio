import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, pdfjs } from 'react-pdf';
import dev_resume from '../../assets/resume/Developer_Resume.pdf';
import './resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.js`
// import ReactPDF from '@react-pdf';

// ReactPDF.render(<MyDocument />, `/DeveloperResume.pdf`);

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// Create Document Component
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function prevPage () {
    if (pageNumber > 0) {
      setPageNumber(pageNumber-1)
    }
  }

  function nextPage() {
    if (pageNumber < 3) {
      setPageNumber(pageNumber + 1);
    }
  }

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages)
  }

  return (
		<div id='resume'>
      <div className='pdfButtons'>
			  <button onClick={prevPage}>Prev</button>
			  <button onClick={nextPage}>Next</button>
      </div>
      <div>
        <Document
          file={dev_resume}
          onLoadError={console.error}
          onLoadSuccess={onDocumentLoadSuccess}
          >
          <Page 
            pageNumber={pageNumber} 
            renderAnnotationLayer={false}
            renderTextLayer={false}
            />
        </Document>
      </div>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);

  
}
  { /* <Page size="A4" style={styles.page}>
</Page> */}


{/* <View style={styles.section} >
<Text>Section #1</Text>
</View>
<View style={styles.section}>
<Text>Section #2</Text>
</View> */}



// function Resume ({ resume }) {

//   const { name, repo, link, description } = resume;

//   return (
//     <div className="resume" key={name}>
//       <img
//         // src={require(`../../assets/projects/${name}.jpg`).default}
//         alt={removeHyphensAndCapitalize(name)}
//         className="resume-bg"
//       />
//       <div className="resume-text">
//         <h3>
//           <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
//           <a href={repo}>
//             <i className="fab fa-github"></i>
//           </a>
//         </h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default Resume;
