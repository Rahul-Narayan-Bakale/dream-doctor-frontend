import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{title} | Dream Doctor Global</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Tags (for when people share your link on WhatsApp/Facebook) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;