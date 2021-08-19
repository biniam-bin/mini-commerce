import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      {year} © Mini store
    </div>
  );
}

export default Footer;