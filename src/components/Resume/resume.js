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
