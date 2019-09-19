import React from 'react';
import PropTypes from 'prop-types';

import EmptyView from '../../Common/EmptyView';
import EducationItem from '../../Common/EducationItem';
import CertificationItem from '../../Common/CertificationItem';

import { educations, certificates } from './constants';

import './styles.css';

const Education = (props) => {
  console.log("Education props", props);

  const renderEducations = () => (
    educations.map(item => (
      <EducationItem
        key={item.id}
        discovered={props[item.nameInStore]}
        {...item}
      />
    ))
  );

  const renderCertifications = () => (
    certificates.map(item => (
      <CertificationItem
        key={item.license}
        discovered={props.certificates}
        {...item}
      />
    ))
  );

  const renderContent = () => (
    <div className="education-section-container">
      <h3 className="education-section-title">Education</h3>
      <div className="educations-wrapper">
        { renderEducations() }
      </div>
      <h3 className="education-section-title">Certifications</h3>
      <div className="certifications-wrapper">
        { renderCertifications() }
      </div>
    </div>
  );

  return (
    <div className="experiences-section-container">
      {
        props.discovered
          ? renderContent()
          : <EmptyView section="education" />
      }
    </div>
  );
};

Education.propTypes = {
  discovered: PropTypes.bool.isRequired,
  certificates: PropTypes.bool.isRequired,
};

export default Education;
