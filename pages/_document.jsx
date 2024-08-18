import { Html, Head, Main, NextScript } from "next/document";

// Functional component version of MyDocument
const MyDocument = (props) => {
  const { locale } = props.__NEXT_DATA__;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <Html dir={dir} lang={locale}>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;