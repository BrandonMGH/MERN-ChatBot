import React from 'react';
import PropTypes from 'prop-types';

import { showHiddenText } from 'utils/common';
import { hiddenImage } from 'images';

import './styles.css';

/**
 * This component is a static element which represents a certification
 * from some online educational website. It consists of an image of the
 * signed certificate and the name of the course as a title.
 * Also it has a hover effect and when is clicked - redirects to the
 * official website with the original version of the certificate.
 */
const CertificationItem = ({
  title, image, url, discovered,
}) => {
  const renderLink = () => {
    if (discovered) {
      return (
        <a href={url} className="image-wrapper" target="_blank" rel="noopener noreferrer">
          <img className="image" src={image} alt="certificate" />
        </a>
      );
    }

    return (
      <div className="image-wrapper">
        <img className="image" src={hiddenImage} alt="certificate" />
      </div>
    );
  };

  return (
    <div className="certification-container">
      { renderLink() }
      <div className="title">
        { showHiddenText(title, discovered) }
      </div>
    </div>
  );
};

CertificationItem.propTypes = {
  /** The official name of the course. */
  title: PropTypes.string.isRequired,
  /** The relative or absolute path to the image of the certificate */
  image: PropTypes.string.isRequired,
  /** URL of the original version of the certificate (always provided by the course). */
  url: PropTypes.string.isRequired,
  /** This prop defines if the certificate is visible and the link can be clicked. */
  discovered: PropTypes.bool.isRequired,
};

export default CertificationItem;
