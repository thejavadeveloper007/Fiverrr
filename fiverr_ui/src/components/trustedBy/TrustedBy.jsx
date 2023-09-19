import React from 'react';
import './trustedBy.scss';

const TrustedBy = () => {
  return (
    <div className='trusted-by'>
      <div className='container'>
        <span>Trusted By :</span>
        <img src="./img/facebook.png" alt="brand-logo" />
        <img src="./img/instagram.png" alt="brand-logo" />
        <img src="./img/twitter.png" alt="brand-logo" />
        <img src="./img/pinterest.png" alt="brand-logo" />
        <img src="./img/linkedin.png" alt="brand-logo" />
      </div>
    </div>
  )
}

export default TrustedBy