import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import ReactPDF from '@react-pdf/renderer';

ReactPDF.render(<MyDocument />, `${Resume}/DeveloperResume.pdf`);

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);



import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Resume ({ resume }) {

  const { name, repo, link, description } = resume;

  return (
    <div className="resume" key={name}>
      <img
        // src={require(`../../assets/projects/${name}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="resume-bg"
      />
      <div className="resume-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Resume;
