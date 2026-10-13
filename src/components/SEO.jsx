import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url }) => {
  const siteName = "NIAESB FUNAAB";
  const fullTitle = `${title} | ${siteName}`;
  const defaultDesc = "Nigerian Institution of Agricultural Engineers Students' Branch (NIAESB) at FUNAAB.";

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />

      {/* Open Graph / Facebook (Great for WhatsApp sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://niaesbfunaab.dev"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content="https://niaesbfunaab.dev/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || "https://niaesbfunaab.dev"} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />
      <meta property="twitter:image" content="https://niaesbfunaab.dev/logo.png" />

      <div></div>
    </Helmet>
  );
};

export default SEO;