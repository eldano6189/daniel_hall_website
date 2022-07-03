import Head from "next/head";

export const SEO = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="-J_LnC5CFDaOU0uWlCg8waqrvideo5J6wzzWLE6mwtg"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Daniel Hall is a frontend developer based in North Yorkshire, UK. Skillset includes JavaScript frameworks such as React.js, CSS5, HTML5."
        />
        <meta
          name="keywords"
          content="web, frontend, developer, react.js, css, css3, html, html5, javascript, svg animation, Daniel, Hall, Daniel Hall"
        />
        <meta name="author" content="Daniel Hall" />
        <link rel="canonical" href="https://www.danielhall.dev/" />
        <meta property="og:site_name" content="DanielHall.dev" />
        <meta
          property="og:title"
          content="Daniel Hall - Front-end Web Developer based in North Yorks, UK"
        />
        <meta property="og:url" content="https://www.danielhall.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Daniel Hall is a frontend developer based in North Yorkshire, UK. Skillset includes JavaScript frameworks such as React.js, CSS5, HTML5."
        />
        <meta
          property="og:image"
          content="https://www.danielhall.dev/favicon.ico"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Daniel Hall is a frontend developer based in North Yorkshire, UK. Skillset includes JavaScript frameworks such as React.js, CSS5, HTML5."
        />
        <meta
          name="twitter:title"
          content="Daniel Hall - Front-end Web Developer based in North Yorks, UK"
        />
        <meta name="twitter:site" content="@DanielH09843406" />
        <meta
          name="twitter:image"
          content="https://twitter.com/DanielH09843406/photo"
        />
        <meta name="twitter:creator" content="@DanielH09843406" />
      </Head>
      {children}
    </>
  );
};
